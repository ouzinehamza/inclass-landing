import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

export const pool: Pool | null = databaseUrl
  ? globalForDb.__arenaNextJsPostgresqlPool ??
    new Pool({
      connectionString: databaseUrl,
    })
  : null;

if (process.env.NODE_ENV !== "production" && pool) {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

function createDbFallback(): NodePgDatabase {
  const handler: ProxyHandler<object> = {
    get(_target, prop) {
      if (prop === "then") {
        return undefined;
      }
      return (..._args: unknown[]) => {
        const queryProxy: unknown = new Proxy(
          {},
          {
            get(_t, qProp) {
              if (qProp === "then") {
                return (_resolve: unknown, reject: (err: Error) => void) =>
                  reject(
                    new Error(
                      "DATABASE_URL is not configured. Running in offline/fallback mode.",
                    ),
                  );
              }
              return (..._qArgs: unknown[]) => queryProxy;
            },
          },
        );
        return queryProxy;
      };
    },
  };
  return new Proxy({}, handler) as unknown as NodePgDatabase;
}

export const db: NodePgDatabase = pool ? drizzle(pool) : createDbFallback();

