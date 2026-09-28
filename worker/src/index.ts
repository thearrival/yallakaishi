/**
 * Yalla Kaishi — enquiry intake.
 *
 * Accepts a POST from the site form, validates it server-side, stores it in D1
 * and emails the sales inbox. Deployed to the same zone as the site, so the
 * request is same-origin and no CORS or third-party processor is involved.
 *
 * Nothing here trusts the client: every field is re-validated, length-capped
 * and stripped before it is written.
 */

export interface Env {
  DB: D1Database;
  /** Verified destination for Email Routing, e.g. hello@yallakaishi.com */
  MAIL_TO?: string;
  /** Verified sender on the same domain, e.g. website@yallakaishi.com */
  MAIL_FROM?: string;
  /** Send an email on each submission. Disable while testing D1 storage. */
  NOTIFY?: string;
}

interface Submission {
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  services: string[];
  message: string;
  consent: boolean;
  locale: string;
  /** Honeypot — real visitors leave this empty. */
  website?: string;
  submittedAt: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX = {
  name: 120,
  email: 200,
  company: 160,
  country: 80,
  phone: 40,
  message: 5000,
  services: 12,
  serviceLength: 80,
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

function parse(body: Record<string, unknown>): Submission | string {
  const name = str(body.name, MAX.name);
  const email = str(body.email, MAX.email).toLowerCase();
  const message = str(body.message, MAX.message);

  if (!name) return 'name';
  if (!EMAIL_RE.test(email)) return 'email';
  if (message.length < 10) return 'message';

  const services = Array.isArray(body.services)
    ? body.services
        .filter((s): s is string => typeof s === 'string')
        .slice(0, MAX.services)
        .map((s) => str(s, MAX.serviceLength))
        .filter(Boolean)
    : [];

  return {
    name,
    email,
    company: str(body.company, MAX.company),
    country: str(body.country, MAX.country),
    phone: str(body.phone, MAX.phone),
    services,
    message,
    consent: body.consent === true,
    locale: str(body.locale, 8) || 'en',
    website: str(body.website, 200),
    submittedAt: new Date().toISOString(),
  };
}

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
  );

/** Rate limit: at most 5 submissions per IP per hour, counted in D1. */
async function rateLimited(env: Env, ip: string): Promise<boolean> {
  const row = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM enquiries
      WHERE ip = ?1 AND created_at > datetime('now', '-1 hour')`,
  )
    .bind(ip)
    .first<{ n: number }>()
    .catch(() => null);
  return (row?.n ?? 0) >= 5;
}

async function notify(env: Env, s: Submission, ref: string) {
  if (env.NOTIFY === 'false' || !env.MAIL_TO || !env.MAIL_FROM) return;

  const list = s.services.length ? s.services.join(', ') : '—';
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px;color:#666;font-size:13px">${escapeHtml(label)}</td>` +
    `<td style="padding:6px 12px;font-size:14px">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`;

  const html = `<!doctype html><html><body style="font-family:system-ui,sans-serif;color:#0a1020">
    <h2 style="margin:0 0 4px;font-size:18px">New enquiry — ${escapeHtml(s.name)}</h2>
    <p style="margin:0 0 16px;color:#666;font-size:13px">Ref ${escapeHtml(ref)} · ${escapeHtml(s.submittedAt)}</p>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
      ${row('Name', s.name)}${row('Email', s.email)}${row('Company', s.company)}
      ${row('Country', s.country)}${row('Phone', s.phone)}${row('Services', list)}
      ${row('Brief', s.message)}${row('Locale', s.locale)}
    </table></body></html>`;

  // Email Routing is the only dependency-free notification path; if the binding
  // is not configured the enquiry is still safely stored in D1.
  const sendEmail = (env as unknown as { SEND_EMAIL?: unknown }).SEND_EMAIL as
    ((m: unknown) => Promise<unknown>) | undefined;
  if (typeof sendEmail !== 'function') return;

  await sendEmail({
    from: env.MAIL_FROM,
    to: env.MAIL_TO,
    headers: { Subject: `Enquiry ${ref} — ${s.company || s.name} (${s.country || '—'})` },
    html,
  }).catch((err: unknown) => console.error('notify failed', err));
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const parsed = parse(payload);

  // Honeypot: answer as if accepted so bots do not learn, but store nothing.
  if (typeof parsed === 'object' && parsed.website) {
    return json({ ok: true, ref: 'YK-000000' });
  }
  if (typeof parsed === 'string') {
    return json({ ok: false, error: parsed }, 400);
  }

  const ip = request.headers.get('CF-Connecting-IP') ?? '0.0.0.0';
  if (await rateLimited(env, ip)) {
    return json({ ok: false, error: 'rate_limited' }, 429);
  }

  const countRow = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM enquiries WHERE created_at > datetime('now', '-30 days')`,
  ).first<{ n: number }>();
  const seq = String((countRow?.n ?? 0) + 1).padStart(4, '0');
  const ref = `YK-${new Date().getFullYear()}-${seq}`;

  await env.DB.prepare(
    `INSERT INTO enquiries
       (ref, name, email, company, country, phone, services, message, locale, ip, created_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11)`,
  )
    .bind(
      ref,
      parsed.name,
      parsed.email,
      parsed.company,
      parsed.country,
      parsed.phone,
      JSON.stringify(parsed.services),
      parsed.message,
      parsed.locale,
      ip,
      parsed.submittedAt,
    )
    .run();

  await notify(env, parsed, ref);

  return json({ ok: true, ref });
};

/** GET is only useful as a liveness check. */
export const onRequestGet: PagesFunction<Env> = () =>
  json({ ok: true, service: 'enquiry', accepts: 'POST' });
