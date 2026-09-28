/**
 * Minimal ambient types for the Cloudflare Worker.
 *
 * The site itself is built with Astro, whose tsconfig must not be polluted with
 * Worker globals, so `worker/` is excluded from the root tsconfig and type-checks
 * against this file instead. It declares only what `src/index.ts` actually uses,
 * which avoids taking a dependency on `@cloudflare/workers-types` for three
 * interfaces. If the full package is ever installed, delete this file.
 */

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run<T = Record<string, unknown>>(): Promise<T>;
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
  exec(query: string): Promise<unknown>;
  batch<T = Record<string, unknown>>(statements: D1PreparedStatement[]): Promise<T[]>;
}

/** Context passed to a Pages Function handler. */
interface PagesFunctionContext<Env = unknown> {
  request: Request;
  env: Env;
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException?(): void;
}

type PagesFunction<Env = unknown> = (
  context: PagesFunctionContext<Env>,
) => Response | Promise<Response>;
