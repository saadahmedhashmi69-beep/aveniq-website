import nextEnv from "@next/env";
import { serviceSeeds } from "./data/services.ts";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is not set. Nothing was seeded.");
    process.exitCode = 1;
    return;
  }

  const { PrismaPg } = await import("@prisma/adapter-pg");
  const { PrismaClient } = await import("@prisma/client");
  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

  let created = 0;
  let updated = 0;

  for (const service of serviceSeeds) {
    const { slug, ...data } = service;
    const existing = await prisma.service.findUnique({ where: { slug }, select: { id: true } });
    await prisma.service.upsert({
      where: { slug },
      create: { slug, ...data },
      update: data,
    });
    if (existing) {
      updated += 1;
    } else {
      created += 1;
    }
  }

  console.log(`Seeded ${serviceSeeds.length} services (${created} created, ${updated} updated).`);
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("Service seed failed:", error);
  process.exitCode = 1;
});
