import { PrismaClient } from "@prisma/client"

// Prisma 7 requires accelerateUrl for the Prisma Postgres driver
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  accelerateUrl: process.env.DATABASE_URL,
})

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
