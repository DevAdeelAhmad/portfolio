// Try to create Prisma client, fallback to null if not available
let prisma: any = null;

try {
  // Dynamic import to avoid build issues
  const { PrismaClient } = require('@prisma/client');
  const globalForPrisma = globalThis as unknown as {
    prisma: any
  };

  prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['query'],
  });

  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
} catch (error) {
  console.log('Prisma client not available, using fallback data');
}

export { prisma };
