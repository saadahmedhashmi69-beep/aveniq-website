import nextEnv from "@next/env";
import { settingSeeds } from "./data/settings.ts";

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
  let skipped = 0;

  for (const setting of settingSeeds) {
    const existing = await prisma.siteSetting.findUnique({ where: { key: setting.key } });
    if (existing) {
      skipped += 1;
      continue;
    }
    await prisma.siteSetting.create({ data: setting });
    created += 1;
  }

  console.log(
    `Seeded ${settingSeeds.length} site settings (${created} created, ${skipped} already existed and were left untouched).`,
  );
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("Site setting seed failed:", error);
  process.exitCode = 1;
});
