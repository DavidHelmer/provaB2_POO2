-- CreateTable
CREATE TABLE "User" (
    "idUser" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "idLance" TEXT NOT NULL PRIMARY KEY,
    "valor" REAL NOT NULL,
    "idComprador" TEXT NOT NULL,
    "leilao_lance" TEXT NOT NULL,
    CONSTRAINT "Lance_idComprador_fkey" FOREIGN KEY ("idComprador") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilao_lance_fkey" FOREIGN KEY ("leilao_lance") REFERENCES "Leilao" ("idLeilao") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "idLeilao" TEXT NOT NULL PRIMARY KEY,
    "preco" REAL NOT NULL,
    "produto" TEXT NOT NULL,
    "datalimite" DATETIME NOT NULL,
    "idDono" TEXT NOT NULL,
    CONSTRAINT "Leilao_idDono_fkey" FOREIGN KEY ("idDono") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Lance_idComprador_key" ON "Lance"("idComprador");

-- CreateIndex
CREATE UNIQUE INDEX "Leilao_idDono_key" ON "Leilao"("idDono");
