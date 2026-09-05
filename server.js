/* ═══════════════════════════════════════════════════════════
   YALLA KAISHI / YALLA-HACK — server.js (Infrastructure v2.0)
   Perfect · Outstanding · Secure · Scalable
   ═══════════════════════════════════════════════════════════ */

/* ── Initialization ── */
'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

/* ── Configuration ── */
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@yalla-hack.com';
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || 'support@yallakaishi.com';
const ENV = process.env.NODE_ENV || 'development';

// Rate limiting configuration
const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again after 15 minutes.' }
});

// Honeypot anti-spam configuration
const honeypotTimeout = 5 * 60 * 1000; // 5 minute timeout for bot detection

/* ── SMTP Email Configuration ── */
let transporter = null;
let emailLog = [];

function getTransporter() {
  if (transporter) return transporter;
  
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = require('nodemailer');
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      });
      
      // Verify transporter configuration
      try {
        await transporter.verify();
        console.log('SMTP server verified successfully');
      } catch (verifyError) {
        console.warn('SMTP verification failed, will use logging mode:', verifyError.message);
        transporter = null;
      }
    } catch (error) {
      console.warn('SMTP transporter initialization failed, using logging mode:', error.message);
      transporter = null;
    }
  }
  return transporter;
}

/* ── Request Data Store ── */
const DATA_FILE = path.join(__dirname, 'data', 'requests.json');

function loadRequests() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
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

/* ── Request ID Generation: YH-CS-YYYY-NNNNN ── */
let requestCounter = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'counter.json'), 'utf-8') || '0');

function generateRequestId() {
  requestCounter += 1;
  fs.writeFileSync(path.join(__dirname, 'data', 'counter.json'), String(requestCounter));
  const year = new Date().getFullYear();
  const seq = String(requestCounter).padStart(5, '0');
  return `YH-CS-${year}-${seq}`;
}

/* ── Input Sanitization & Validation ── */
function sanitize(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[<>]/g, '')          /* strip HTML tags chars */
    .replace(/[\r\n]{3,}/g, '\n\n') /* collapse excessive newlines */
    .replace(/javascript:/gi, '')   /* block script protocols */
    .replace(/data:/gi, '')        /* block data URIs */
    .replace(/on\w+\s*=/gi, '')    /* block event handlers */
    .trim()
    .slice(0, 2000);               /* hard length cap */
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email) && email.length <= 254 && !email.includes(' ') && !email.startsWith('.') && !email.endsWith('.');
}

function isValidPhone(phone) {
  if (typeof phone !== 'string') return false;
  // Accept various formats: +86 187 0678 7811, 18706787811, +971 50 123 4567
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,15}$/;
  return phoneRegex.test(phone) && !phone.includes(' ') || phone.startsWith('+');
}

/* ── Email Sending System ── */
async function sendEmail(to, subject, body, isAdmin = true) {
  const mailer = getTransporter();
  
  if (!mailer) {
    // Log mode - save email to log for later processing
    const emailEntry = {
      id: crypto.randomBytes(4).toString('hex'),
      to,
      subject,
      body,
      sent: false,
      timestamp: new Date().toISOString(),
      isAdmin
    };
    emailLog.push(emailEntry);
    saveEmailLog();
    return { simulated: true, id: emailEntry.id };
  }
  
  try {
    await mailer.sendMail({
      from: `"Yalla-Kaishi Support" <${process.env.SMTP_USER || 'noreply@yallakaishi.com'}>`,
      to,
      subject,
      text: body
    });
    
    // Log successful send
    const emailEntry = {
      id: crypto.randomBytes(4).toString('hex'),
      to,
      subject,
      sent: true,
      timestamp: new Date().toISOString(),
      isAdmin
    };
    emailLog.push(emailEntry);
    saveEmailLog();
    
    return { sent: true, id: emailEntry.id };
  } catch (err) {
    console.error('Email send failed:', err.message);
    
    // Log failed send
    const emailEntry = {
      id: crypto.randomBytes(4).toString('hex'),
      to,
      subject,
      sent: false,
      error: err.message,
      timestamp: new Date().toISOString(),
      isAdmin
    };
    emailLog.push(emailEntry);
    saveEmailLog();
    
    return { sent: false, error: err.message, id: emailEntry.id };
  }
}

/* ── Email Log Management ── */
function saveEmailLog() {
  try {
    const logFile = path.join(__dirname, 'data', 'emaillog.json');
    // Keep only last 100 entries
    const currentLog = loadEmailLog();
    currentLog.push(...emailLog.slice(-100));
    fs.writeFileSync(logFile, JSON.stringify(currentLog.slice(-100), null, 2));
  } catch (err) {
    console.error('Failed to save email log:', err.message);
  }
}

function loadEmailLog() {
  try {
    const logFile = path.join(__dirname, 'data', 'emaillog.json');
    if (fs.existsSync(logFile)) {
      return JSON.parse(fs.readFileSync(logFile, 'utf-8'));
    }
  } catch (err) {
    console.error('Failed to load email log:', err.message);
  }
  return [];
}

/* ── Express App Setup ── */
const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ origin: true, methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json({ limit: '50kb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Trust first proxy (for accurate rate limiting behind proxy)
app.enable('trust proxy');

/* ── Apply Rate Limiting ── */
app.use('/api/submit-request', submitLimitierdupdateHeaders);

/* ── Honeypot Anti-Spam Middleware ── */
function honeypotCheck(req, res, next) {
  const body = req.body || {};
  // Check for common bot fields
  if (body.website && body.website.length > 0) {
    // Bot detected - set a flag in session
    req.session.isBot = true;
  }
  next();
}

app.use('/api/submit-request', honeypotCheck);

/* ── Routes ── */

/* POST /api/submit-request — Submit a China services request */
app.post('/api/submit-request', submitLimiter, async (req, res) => {
  try {
    const body = req.body || {};
    const b = body;
    
    /* ── Honeypot Check ── */
    if (req.session && req.session.isBot) {
      return res.status(200).json({ 
        success: true, 
        requestId: 'YH-CS-BOT-HEALTHY',
        message: 'Bot detected - request logged for analysis'
      });
    }
    
    /* ── Sanitize & Validate All Fields ── */
    const fullName = sanitize(b.fullName || b.name || '');
    const country = sanitize(b.country || '');
    const nationality = sanitize(b.nationality || '');
    const email = sanitize(b.email || b.emailAddress || '');
    const phone = sanitize(b.phone || b.mobile || '');
    const services = Array.isArray(b.services) || Array.isArray(b.service) 
      ? (b.services || b.service).map(s => sanitize(s)).filter(Boolean) 
      : [];
    const company = sanitize(b.company || b.companyName || '');
    const language = ['en', 'ar', 'zh'].includes(sanitize(b.language || '')) ? sanitize(b.language) : 'en';
    const requestDetails = sanitize(b.requestDetails || b.description || '');
    const notes = sanitize(b.notes || b.additionalNotes || '');
    const dynamicAnswers = b.dynamicAnswers && typeof b.dynamicAnswers === 'object' ? b.dynamicAnswers : {};
    
    /* ── Validation ── */
    if (!fullName || fullName.length < 2) {
      return res.status(400).json({ error: 'Full name is required and must be at least 2 characters.' });
    }
    if (!country || country.length < 2) {
      return res.status(400).json({ error: 'Country is required.' });
    }
    if (!nationality || nationality.length < 2) {
      return res.status(400).json({ error: 'Nationality is required.' });
    }
    if (!phone || !isValidPhone(phone)) {
      return res.status(400).json({ error: 'Valid phone number is required.' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email address is required.' });
    }
    if (services.length === 0) {
      return res.status(400).json({ error: 'At least one service must be selected.' });
    }
    
    /* ── Generate Request ID & Timestamp ── */
    const requestId = generateRequestId();
    const timestamp = new Date().toISOString();
    const humanTimestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Shanghai',
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    
    /* ── Build Admin Email ── */
    const adminSubject = `New China Services Request — ${services.join(', ')} — ${fullName}`;
    const adminBody = [
      '============================================================',
      'NEW SERVICE REQUEST — YALLA-KAISHI',
      '============================================================',
      '',
      `Request ID: ${requestId}`,
      '',
      `Date & Time: ${humanTimestamp} (GMT+8 - Asia/Shanghai)`,
      '',
      `IP Address: ${req.ip || 'unknown'}${
        req.ips && req.ips.length > 0 ? ` (via: ${req.ips.join(', ')})` : ''
      }`,
      '',
      'SELECTED SERVICE(S)',
      '',
      `${services.join(', ')}`,
      '',
      'CLIENT INFORMATION',
      '',
      `Full Name: ${fullName}`,
      `Nationality: ${nationality}`,
      `Country of Residence: ${country}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Company: ${company || 'Not provided'}`,
      `Preferred Language: ${language.toUpperCase()}`,
      '',
      'REQUEST DETAILS',
      '',
      requestDetails || 'No additional details provided.',
      '',
      ...(notes ? ['ADDITIONAL NOTES', '', notes, ''] : []),
      '============================================================',
      '',
      'Status: NEW',
      'Source: yallakaishi.com',
      'Timestamp: ' + new Date().toISOString()
    ].join('\n');
    
    /* ── Build Client Confirmation Email ── */
    const clientSubject = 'Yalla-Kaishi — Your Service Request Has Been Received';
    const clientBody = [
      `Dear ${fullName},`,
      '',
      'Thank you for contacting Yalla-Kaishi.',
      '',
      'We have successfully received your service request.',
      '',
      `Request ID: ${requestId}`,
      '',
      `Requested Service: ${services.join(', ')}`,
      '',
      'Our team will review your request and contact you using the information provided within 24 hours.',
      '',
      'Please keep your Request ID for all future communication.',
      '',
      'We provide professional cross-border business services connecting China and the Gulf.',
      '',
      'Sincerely,',
      '',
      'Yalla-Kaishi Team',
      `Support: ${SUPPORT_EMAIL}`,
      `Phone: +86 187 0678 7811`,
      `Address: Jinhui Building, 123 Jiefang South Road, Yuexiu District, Guangzhou, China`,
      'Website: https://yallakaishi.com'
    ].join('\n');
    
    /* ── Send Emails (Non-blocking) ── */
    const emailResults = await Promise.allSettled([
      sendEmail(ADMIN_EMAIL, adminSubject, adminBody, true),
      sendEmail(email, clientSubject, clientBody, false)
    ]);
    
    /* ── Store Request ── */
    const requests = loadRequests();
    const requestRecord = {
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
      status: 'NEW',
      source: 'yallakaishi.com',
      ip: req.ip,
      submittedAt: new Date().toString()
    };
    requests.push(requestRecord);
    saveRequests(requests);
    
    /* ── Response ── */
    const emailStatuses = emailResults.map(r => r.status);
    
    return res.status(200).json({
      success: true,
      requestId,
      timestamp,
      message: 'Request submitted successfully.',
      emails: emailStatuses,
      redirect: `/success.html?requestId=${requestId}`
    });
    
  } catch (err) {
    console.error('Submit error:', err);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again.',
      suggestions: ['Check your input', 'Try again in a few moments', 'Contact support if issue persists']
    });
  }
});

/* GET /api/requests — Admin view of stored requests */
app.get('/api/requests', (req, res) => {
  const token = req.query.token || req.headers['x-admin-token'];
  const expectedToken = process.env.ADMIN_TOKEN;
  
  // If no token required in production, allow access or use IP whitelist
  if (expectedToken && token !== expectedToken) {
    return res.status(401).json({ error: 'Unauthorized. Provide admin token.' });
  }
  
  res.json(loadRequests());
});

/* GET /api/requests/:id — Get specific request details */
app.get('/api/requests/:id', (req, res) => {
  const requests = loadRequests();
  const request = requests.find(r => r.requestId === req.params.id);
  
  if (request) {
    return res.json(request);
  }
  
  return res.status(404).json({ error: 'Request not found.' });
});

/* GET /api/health — Health check endpoint */
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    time: new Date().toISOString(),
    uptime: process.uptime(),
    environment: ENV
  });
});

/* GET /api/status — API status with capabilities */
app.get('/api/status', (req, res) => {
  res.json({
    api: 'Yalla-Kaishi China Services API v2.0',
    version: '2.0.0',
    endpoints: {
      submit: '/api/submit-request',
      requests: '/api/requests',
      request: '/api/requests/:id',
      health: '/api/health',
      status: '/api/status'
    },
    features: {
      rateLimiting: true,
      honeypotProtection: true,
      emailNotifications: process.env.SMTP_HOST ? 'configured' : 'logging-mode',
      trilingualSupport: true,
      requestIdGeneration: true,
      inputValidation: true
    },
    contact: {
      adminEmail: ADMIN_EMAIL,
      supportEmail: SUPPORT_EMAIL,
      phone: '+86 187 0678 7811'
    }
  });
};

/* ── Error Handling Middleware ── */
app.use((err, req, res, next) => {
  console.error('Express error:', err);
  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    error: 'Something went wrong',
    message: ENV === 'development' ? err.message : 'Internal server error',
    timestamp: new Date().toISOString()
  });
});

/* ── 404 Handler ── */
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

/* ── Start Server ── */
let server;
let isRunning = false;

function startServer() {
  if (isRunning) {
    console.log('Server already running on port', PORT);
    return server;
  }
  
  server = app.listen(PORT, HOST, () => {
    isRunning = true;
    const localUrl = `http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`;
    console.log('╔═══════════════════════════════════════════');
    console.log('║  Yalla-Kaishi China Services API');
    console.log('║  Infrastructure v2.0');
    console.log('╠═══════════════════════════════════════════');
    console.log(`  Listening on ${localUrl}`);
    console.log(`  Environment: ${ENV}`);
    console.log(`  Admin notifications → ${ADMIN_EMAIL}`);
    console.log(`  SMTP ${getTransporter() ? 'configured' : 'not configured (logging mode)'}`);
    console.log(`  Request ID format: YH-CS-YYYY-NNNNN`);
    console.log(`  Max submission rate: 10 per 15 minutes per IP`);
    console.log('╚═══════════════════════════════════════════');
  });
  
  return server;
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

function startServerIfNeeded() {
  // Only start if we're not in a test environment
  if (process.argv[1] === __filename || !process.argv.includes('test')) {
    startServer();
  }
}

startServerIfNeeded();

module.exports = { app, server, startServer, isRunning };