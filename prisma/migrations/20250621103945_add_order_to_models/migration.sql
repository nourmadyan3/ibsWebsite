-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "industryGroupId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Client_industryGroupId_fkey" FOREIGN KEY ("industryGroupId") REFERENCES "IndustryGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("id", "industryGroupId", "name") SELECT "id", "industryGroupId", "name" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE TABLE "new_IndustryGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_IndustryGroup" ("id", "name") SELECT "id", "name" FROM "IndustryGroup";
DROP TABLE "IndustryGroup";
ALTER TABLE "new_IndustryGroup" RENAME TO "IndustryGroup";
CREATE UNIQUE INDEX "IndustryGroup_name_key" ON "IndustryGroup"("name");
CREATE TABLE "new_TeamGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_TeamGroup" ("id", "name") SELECT "id", "name" FROM "TeamGroup";
DROP TABLE "TeamGroup";
ALTER TABLE "new_TeamGroup" RENAME TO "TeamGroup";
CREATE UNIQUE INDEX "TeamGroup_name_key" ON "TeamGroup"("name");
CREATE TABLE "new_TeamMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "imageUrl" TEXT NOT NULL,
    "teamGroupId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "TeamMember_teamGroupId_fkey" FOREIGN KEY ("teamGroupId") REFERENCES "TeamGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TeamMember" ("id", "imageUrl", "name", "teamGroupId", "title") SELECT "id", "imageUrl", "name", "teamGroupId", "title" FROM "TeamMember";
DROP TABLE "TeamMember";
ALTER TABLE "new_TeamMember" RENAME TO "TeamMember";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
