import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "prisma/config";

const envPath = join(process.cwd(), ".env");

if (existsSync(envPath)) {
  const envFile = readFileSync(envPath, "utf8");

  for (const line of envFile.split("\n")) {
    const match = line.match(/^([A-Z0-9_]+)=["']?(.+?)["']?$/);

    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2];
    }
  }
}

const databaseUrl =
  process.env.DATABASE_URL ??
  "postgresql://postgres:postgres@localhost:5432/shubh_properties?schema=public";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node --experimental-strip-types prisma/seed.ts"
  },
  datasource: {
    url: databaseUrl
  }
});
