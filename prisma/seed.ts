import nextEnv from "@next/env";
import { hashPassword } from "../lib/auth/password.ts";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const initialPassword = process.env.ADMIN_INITIAL_PASSWORD;

  if (!email || !initialPassword) {
    console.error(
      "ADMIN_EMAIL and ADMIN_INITIAL_PASSWORD must be set (in your environment or .env) " +
        "before seeding the admin account. Nothing was created.",
    );
    process.exitCode = 1;
    return;
  }

  if (initialPassword.length < 12) {
    console.error("ADMIN_INITIAL_PASSWORD must be at least 12 characters. Nothing was created.");
    process.exitCode = 1;
    return;
  }

  const { PrismaPg } = await import("@prisma/adapter-pg");
  const { PrismaClient } = await import("@prisma/client");

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is not set. Nothing was created.");
    process.exitCode = 1;
    return;
  }

  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin user ${email} already exists — no changes made.`);
    await prisma.$disconnect();
    return;
  }

  const passwordHash = await hashPassword(initialPassword);
  const adminUser = await prisma.adminUser.create({
    data: { email, name: "Aveniq Admin", passwordHash },
  });

  console.log(`Created admin user ${adminUser.email}.`);
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("Admin seed failed:", error);
  process.exitCode = 1;
});
