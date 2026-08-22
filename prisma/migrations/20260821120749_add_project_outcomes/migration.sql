/*
  Warnings:

  - Added the required column `outcomes` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- Existing rows get a temporary empty-array default so the column can be
-- added NOT NULL without data loss; prisma/seed-projects.ts immediately
-- overwrites every row with real content afterward.
ALTER TABLE "Project" ADD COLUMN     "outcomes" JSONB NOT NULL DEFAULT '[]';
ALTER TABLE "Project" ALTER COLUMN "outcomes" DROP DEFAULT;
