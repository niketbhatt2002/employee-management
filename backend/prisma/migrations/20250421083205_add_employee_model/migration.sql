-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "salary" REAL NOT NULL,
    "designation" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "dateOfJoining" DATETIME NOT NULL,
    "dateOfLeaving" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
