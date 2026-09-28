# Enquiry Worker

Captures the website contact form into Cloudflare D1 and emails the sales inbox.
It runs as a Pages Function in the same zone as the site, so the request is
same-origin: no CORS, no third-party form processor, nothing extra to disclose.

## One-time setup

Requires the zone to be on Cloudflare (the same move that enables Web Analytics)
and the [Wrangler CLI](https://developers.cloudflare.com/workers/get-started/).

```bash
cd worker
npm i -g wrangler
wrangler login

# 1. Create the database
wrangler d1 create yallakaishi-enquiries
#    → copy the printed database_id into wrangler.toml and uncomment [[d1_databases]]

# 2. Create the table
wrangler d1 execute yallakaishi-enquiries --file=./schema.sql

# 3. (optional) Email notification
#    Enable Email Routing for the zone, verify the destination address, then
#    uncomment [[send_email]] in wrangler.toml.

# 4. Deploy
wrangler pages deploy <path-to-../dist>
```

The site posts to `/api/enquiry` by default, so no build-time secret is needed.
Until the Worker is deployed the form falls back to opening the visitor's mail
client with the brief pre-filled, so no enquiry is ever lost.

## Behaviour

- Server-side validation: name, email format, minimum brief length, field
  length caps, service list capped at 12 entries.
- Honeypot field (`website`) — bot submissions are acknowledged but discarded.
- Rate limit: 5 submissions per IP per hour, counted in D1.
- Refs are sequential and human-quotable: `YK-2026-0042`, also shown to the
  visitor on the success screen so a follow-up can cite it.

## Reading the inbox

```bash
wrangler d1 execute yallakaishi-enquiries --command \
  "SELECT ref, name, email, company, country, created_at
   FROM enquiries ORDER BY id DESC LIMIT 20"
```

Deletion requests (see the privacy policy) are a single command:

```bash
wrangler d1 execute yallakaishi-enquiries --command \
  "DELETE FROM enquiries WHERE email = 'visitor@example.com'"
```

## Type checking

`worker/` is excluded from the root tsconfig so Worker globals never leak into
the Astro build. Check it on its own:

```bash
npx tsc -p worker
```

`worker/src/env.d.ts` declares the three Cloudflare interfaces actually used.
If `@cloudflare/workers-types` is ever installed, delete that file.
