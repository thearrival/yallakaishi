import { describe, expect, it } from 'vitest';
import { onRequestGet, onRequestPost } from '../worker/src/index';

/** Minimal stand-ins for the D1 statements the Worker issues. */
type RecordedCall = { sql: string; binds: unknown[] };

function stubDB(overrides: Record<string, unknown> = {}) {
  const calls: RecordedCall[] = [];
  const db = {
    calls,
    prepare(sql: string) {
      const binds: unknown[] = [];
      const stmt = {
        bind(...values: unknown[]) {
          binds.push(...values);
          return stmt;
        },
        first: async () => overrides.first ?? { n: 0 },
        run: async () => {
          calls.push({ sql, binds });
          return {};
        },
        all: async () => ({ results: [] }),
      };
      return stmt;
    },
    exec: async () => ({}),
    batch: async () => [],
  };
  return db;
}

const env = (db: unknown = stubDB()) => ({ DB: db, NOTIFY: 'false' }) as never;

const post = (body: unknown, e: unknown = env()) =>
  onRequestPost({
    request: new Request('https://yallakaishi.com/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': '203.0.113.7' },
      body: JSON.stringify(body),
    }),
    env: e,
    waitUntil: () => {},
  } as never);

const valid = {
  name: 'Layla Hassan',
  email: 'Layla@Example.COM',
  company: 'Gulf Trading Co',
  country: 'Saudi Arabia',
  phone: '+966500000000',
  services: ['svc:market-entry-licensing'],
  message: 'We want to import into Saudi Arabia and need the licence sequence.',
  consent: true,
  locale: 'en',
};

describe('enquiry worker', () => {
  it('accepts a valid submission and returns a reference', async () => {
    const res = await post(valid);
    expect(res.status).toBe(200);
    const json = (await res.json()) as { ok: boolean; ref: string };
    expect(json.ok).toBe(true);
    expect(json.ref).toMatch(/^YK-\d{4}-\d{4}$/);
  });

  it('lowercases the email and strips whitespace from fields', async () => {
    const db = stubDB();
    await post({ ...valid, name: '  Layla  ', email: '  MIXED@Case.COM  ' }, env(db));
    const insert = db.calls.find((c) => c.sql.includes('INSERT INTO enquiries'));
    expect(insert?.binds[1]).toBe('Layla');
    expect(insert?.binds[2]).toBe('mixed@case.com');
  });

  it('rejects a missing name, bad email and a too-short brief', async () => {
    expect(((await (await post({ ...valid, name: '' })).json()) as { error: string }).error).toBe(
      'name',
    );
    expect(
      ((await (await post({ ...valid, email: 'not-an-email' })).json()) as { error: string }).error,
    ).toBe('email');
    expect(
      ((await (await post({ ...valid, message: 'too short' })).json()) as { error: string }).error,
    ).toBe('message');
  });

  it('discards honeypot submissions but answers as if accepted', async () => {
    const db = stubDB();
    const res = await post({ ...valid, website: 'http://spam.example' }, env(db));
    const json = (await res.json()) as { ok: boolean };
    expect(json.ok).toBe(true);
    expect(db.calls.some((c) => c.sql.includes('INSERT'))).toBe(false);
  });

  it('caps field lengths so a huge payload cannot be stored', async () => {
    const db = stubDB();
    await post({ ...valid, message: 'x'.repeat(50_000) }, env(db));
    const insert = db.calls.find((c) => c.sql.includes('INSERT INTO enquiries'));
    expect(String(insert?.binds[7]).length).toBe(5000);
  });

  it('caps the number of services and drops non-strings', async () => {
    const db = stubDB();
    await post(
      { ...valid, services: [...Array(30)].map((_, i) => `svc:${i}`).concat(42 as never) },
      env(db),
    );
    const insert = db.calls.find((c) => c.sql.includes('INSERT INTO enquiries'));
    const stored = JSON.parse(String(insert?.binds[6])) as string[];
    expect(stored).toHaveLength(12);
    expect(stored.every((s) => typeof s === 'string')).toBe(true);
  });

  it('rate limits an IP that has already submitted five times', async () => {
    const res = await post(valid, env(stubDB({ first: { n: 5 } })));
    expect(res.status).toBe(429);
  });

  it('rejects a body that is not JSON', async () => {
    const res = await onRequestPost({
      request: new Request('https://yallakaishi.com/api/enquiry', { method: 'POST', body: 'nope' }),
      env: env(),
      waitUntil: () => {},
    } as never);
    expect(res.status).toBe(400);
  });

  it('answers GET as a liveness check without touching D1', async () => {
    const res = await onRequestGet({
      request: new Request('https://yallakaishi.com/api/enquiry'),
      env: env(),
      waitUntil: () => {},
    } as never);
    expect(res.status).toBe(200);
    expect(((await res.json()) as { accepts: string }).accepts).toBe('POST');
  });
});
