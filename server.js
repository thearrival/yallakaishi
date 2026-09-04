/* ═══════════════════════════════════════════════════════════
   YALLA KAISHI / YALLA-HACK — server.js
   China Services Request API
   - Form submission endpoint
   - Email notification to hello@yalla-hack.com
   - Client confirmation email
   - Rate limiting + input validation
   - In-memory request management
   ═══════════════════════════════════════════════════════════ */

'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const rateLimit = require('express-rate-limit');

/* ── Config (via environment variables) ── */
const PORT = process.env.PORT || 3000;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@yalla-hack.com';
const DATA_FILE = path.join(__dirname, 'data', 'requests.json');

/* ── SMTP transport (configured via env vars for security) ── */
let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  /* Only attempt to load nodemailer if SMTP is configured */
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const nodemailer = require('nodemailer');
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
  }
  return transporter;
}

/* ── Request storage ── */
function loadRequests() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch (err) {
    console.error('Failed to load requests:', err.message);
  }
  return [];
}

function saveRequests(requests) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(requests, null, 2));
  } catch (err) {
    console.error('Failed to save requests:', err.message);
  }
}

/* ── Request ID generation: YH-CS-YYYY-NNNNN ── */
let requestCounter = 0;
function generateRequestId() {
  requestCounter += 1;
  const year = new Date().getFullYear();
  const seq = String(requestCounter).padStart(5, '0');
  return `YH-CS-${year}-${seq}`;
}

/* ── Input sanitization ── */
function sanitize(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[<>]/g, '')          /* strip HTML tags chars */
    .replace(/[\r\n]{3,}/g, '\n\n') /* collapse excessive newlines */
    .replace(/javascript:/gi, '')   /* block script protocols */
    .trim()
    .slice(0, 2000);               /* hard length cap */
}

function isValidEmail(email) {
  return typeof email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) &&
    email.length <= 254;
}

/* ── Email sending (fail-safe: logs to console if SMTP unavailable) ── */
async function sendEmail(to, subject, body) {
  const mailer = getTransporter();
  if (!mailer) {
    console.log('──────── EMAIL (SMTP not configured — logged only) ────────');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log('Body:');
    console.log(body);
    console.log('──────────────────────────────────────────────────────────');
    return { simulated: true };
  }
  try {
    await mailer.sendMail({
      from: `"Yalla-Hack Support" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: body
    });
    return { sent: true };
  } catch (err) {
    console.error('Email send failed:', err.message);
    return { sent: false, error: err.message };
  }
}

/* ── Express app ── */
const app = express();

app.use(cors({ origin: true, methods: ['GET', 'POST'] }));
app.use(express.json({ limit: '100kb' }));
app.use(express.static(__dirname));

/* ── Rate limiting: 10 submissions / 15 min per IP ── */
const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' }
});

/* ── Honeypot anti-spam field ── */
function isBot(body) {
  return !!(body && (body.website && body.website.length > 0));
}

/* ═══════════ ROUTES ═══════════ */

/* POST /api/submit-request — submit a China services request */
app.post('/api/submit-request', submitLimiter, async (req, res) => {
  try {
    const b = req.body || {};

    /* Honeypot check */
    if (isBot(b)) {
      return res.status(200).json({ success: true, requestId: 'YH-CS-BOT' });
    }

    /* Validate required fields */
    const fullName = sanitize(b.fullName);
    const country = sanitize(b.country);
    const nationality = sanitize(b.nationality);
    const email = sanitize(b.email);
    const phone = sanitize(b.phone);
    const services = Array.isArray(b.services) ? b.services.map(s => sanitize(s)).filter(Boolean) : [];
    const company = sanitize(b.company);
    const language = ['en', 'ar', 'zh'].includes(sanitize(b.language)) ? sanitize(b.language) : 'en';
    const requestDetails = sanitize(b.requestDetails);
    const notes = sanitize(b.notes);
    const dynamicAnswers = b.dynamicAnswers && typeof b.dynamicAnswers === 'object' ? b.dynamicAnswers : {};

    if (!fullName || !country || !nationality || !phone) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }
    if (services.length === 0) {
      return res.status(400).json({ error: 'At least one service must be selected.' });
    }

    /* Generate request ID + timestamp */
    const requestId = generateRequestId();
    const timestamp = new Date().toISOString();
    const humanTimestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Shanghai',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    /* ── Build admin email ── */
    const adminSubject = `New China Services Request — ${services.join(', ')} — ${fullName}`;
    const adminBody = [
      '--------------------------------',
      'NEW SERVICE REQUEST',
      '--------------------------------',
      '',
      `Request ID: ${requestId}`,
      '',
      `Date & Time: ${humanTimestamp} (GMT+8)`,
      '',
      `Selected Service(s): ${services.join(', ')}`,
      '',
      'CLIENT INFORMATION',
      '',
      `Full Name: ${fullName}`,
      `Nationality: ${nationality}`,
      `Country of Residence: ${country}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Company: ${company || '—'}`,
      `Preferred Language: ${language.toUpperCase()}`,
      '',
      'REQUEST DETAILS',
      '',
      requestDetails || 'No additional details provided.',
      '',
      ...(notes ? ['ADDITIONAL NOTES', '', notes, ''] : []),
      '--------------------------------',
      '',
      'Status: NEW'
    ].join('\n');

    /* ── Build client confirmation ── */
    const clientSubject = 'Yalla-Hack — Your Service Request Has Been Received';
    const clientBody = [
      `Dear ${fullName},`,
      '',
      'Thank you for contacting Yalla-Hack.',
      '',
      'We have successfully received your service request.',
      '',
      `Request ID: ${requestId}`,
      '',
      `Requested Service: ${services.join(', ')}`,
      '',
      'Our team will review your request and contact you using the information provided.',
      '',
      'Please keep your Request ID for future communication.',
      '',
      'Best regards,',
      '',
      'Yalla-Hack',
      'Cybersecurity & Digital Solutions',
      ADMIN_EMAIL,
      '+86 187 0678 7811',
      'Jinhui Building, 123 Jiefang South Road, Yuexiu District, Guangzhou, China',
      'https://yalla-hack.ae'
    ].join('\n');

    /* ── Send emails (non-blocking to response) ── */
    const emailResults = await Promise.allSettled([
      sendEmail(ADMIN_EMAIL, adminSubject, adminBody),
      sendEmail(email, clientSubject, clientBody)
    ]);

    /* ── Store request (for admin dashboard) ── */
    const requests = loadRequests();
    requests.push({
      requestId,
      timestamp,
      services,
      fullName,
      nationality,
      country,
      email,
      phone,
      company,
      language,
      requestDetails,
      dynamicAnswers,
      notes,
      status: 'NEW'
    });
    saveRequests(requests);

    res.status(200).json({
      success: true,
      requestId,
      timestamp,
      message: 'Request submitted successfully.',
      emails: emailResults.map(r => r.status)
    });
  } catch (err) {
    console.error('Submit error:', err);
    res.status(500).json({ error: 'Internal server error. Please try again.' });
  }
});

/* GET /api/requests — admin view of stored requests (basic auth via token) */
app.get('/api/requests', (req, res) => {
  const token = req.query.token || req.headers['x-admin-token'];
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || token !== expected) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }
  res.json(loadRequests());
});

/* GET /api/health */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

/* ── Start server ── */
app.listen(PORT, () => {
  console.log(`Yalla-Hack China Services API running on http://localhost:${PORT}`);
  console.log(`Admin notifications → ${ADMIN_EMAIL}`);
  console.log(`SMTP ${getTransporter() ? 'configured' : 'NOT configured (emails logged to console)'}`);
});
