/*
  Warnings:

  - Added the required column `identifier` to the `Votes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Votes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "identifier" TEXT NOT NULL,
    "ipadress" TEXT NOT NULL,
    "options_id" INTEGER NOT NULL,
    "polls_id" INTEGER NOT NULL,
    CONSTRAINT "Votes_options_id_fkey" FOREIGN KEY ("options_id") REFERENCES "Options" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Votes_polls_id_fkey" FOREIGN KEY ("polls_id") REFERENCES "Polls" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Votes" ("id", "ipadress", "options_id", "polls_id") SELECT "id", "ipadress", "options_id", "polls_id" FROM "Votes";
DROP TABLE "Votes";
ALTER TABLE "new_Votes" RENAME TO "Votes";
CREATE UNIQUE INDEX "Votes_identifier_key" ON "Votes"("identifier");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
