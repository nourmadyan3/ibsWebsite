-- CreateTable
CREATE TABLE "JobPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "contractDuration" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "workLocation" TEXT NOT NULL,
    "workingHours" TEXT NOT NULL,
    "daysOff" TEXT NOT NULL,
    "insurance" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "qualifications" TEXT NOT NULL,
    "howToApply" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
