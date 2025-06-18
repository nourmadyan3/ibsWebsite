import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Seed the admin user
  const admin = await prisma.admin.upsert({
    where: { email: 'miriam.atef@ibsns.com' },
    update: {},
    create: {
      email: 'miriam.atef@ibsns.com',
      password: '123456$', // In production, hash this!
      name: 'Miriam Atef',
    },
  });

  console.log('Admin user seeded:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 