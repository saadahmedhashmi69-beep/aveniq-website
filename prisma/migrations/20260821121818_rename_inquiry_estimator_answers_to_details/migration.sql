/*
  Warnings:

  - You are about to drop the column `estimatorAnswers` on the `Inquiry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Inquiry" DROP COLUMN "estimatorAnswers",
ADD COLUMN     "details" JSONB;
