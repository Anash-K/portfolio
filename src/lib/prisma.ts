import path from "node:path";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function resolveDatabaseUrl() {
  const url = process.env.DATABASE_URL ?? "file:./dev.db";

  if (url.startsWith("file:./")) {
    const fileName = url.replace("file:./", "");
    return `file:${path.join(process.cwd(), "prisma", fileName)}`;
  }

  return url;
}

function createPrismaClient() {
  const adapter = new PrismaBetterSqlite3({
    url: resolveDatabaseUrl(),
  });

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
