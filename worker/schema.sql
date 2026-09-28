-- Enquiries captured from the website form.
-- Created by the Worker on first write; safe to run more than once.

CREATE TABLE IF NOT EXISTS enquiries (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  ref        TEXT    NOT NULL UNIQUE,
  name       TEXT    NOT NULL,
  email      TEXT    NOT NULL,
  company    TEXT    NOT NULL DEFAULT '',
  country    TEXT    NOT NULL DEFAULT '',
  phone      TEXT    NOT NULL DEFAULT '',
  services   TEXT    NOT NULL DEFAULT '[]',
  message    TEXT    NOT NULL,
  locale     TEXT    NOT NULL DEFAULT 'en',
  ip         TEXT    NOT NULL DEFAULT '',
  created_at TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_ip       ON enquiries (ip, created_at);

-- Reading the inbox:
--   wrangler d1 execute yallakaishi-enquiries --command \
--     "SELECT ref, name, email, company, country, created_at
--      FROM enquiries ORDER BY id DESC LIMIT 20"
