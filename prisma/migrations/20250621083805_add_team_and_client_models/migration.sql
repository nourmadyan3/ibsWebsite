-- CreateTable
CREATE TABLE "TeamGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "imageUrl" TEXT NOT NULL,
    "teamGroupId" INTEGER NOT NULL,
    CONSTRAINT "TeamMember_teamGroupId_fkey" FOREIGN KEY ("teamGroupId") REFERENCES "TeamGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IndustryGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "industryGroupId" INTEGER NOT NULL,
    CONSTRAINT "Client_industryGroupId_fkey" FOREIGN KEY ("industryGroupId") REFERENCES "IndustryGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamGroup_name_key" ON "TeamGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryGroup_name_key" ON "IndustryGroup"("name");
