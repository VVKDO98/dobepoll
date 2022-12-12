-- CreateTable
CREATE TABLE "Polls" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Options" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "polls_id" INTEGER NOT NULL,
    CONSTRAINT "Options_polls_id_fkey" FOREIGN KEY ("polls_id") REFERENCES "Polls" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Votes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ipadress" TEXT NOT NULL,
    "options_id" INTEGER NOT NULL,
    "polls_id" INTEGER NOT NULL,
    CONSTRAINT "Votes_options_id_fkey" FOREIGN KEY ("options_id") REFERENCES "Options" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Votes_polls_id_fkey" FOREIGN KEY ("polls_id") REFERENCES "Polls" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
