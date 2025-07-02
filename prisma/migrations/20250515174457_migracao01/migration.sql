-- CreateTable
CREATE TABLE "cadastroCandidato" (
    "idCandidato" SERIAL NOT NULL,
    "nomeCandidato" TEXT NOT NULL,
    "emailCandidato" TEXT NOT NULL,
    "telefoneCandidato" TEXT NOT NULL,
    "curriculo" TEXT NOT NULL DEFAULT '',
    "senhaCandidato" TEXT NOT NULL,
    "enderecoId" INTEGER NOT NULL,

    CONSTRAINT "cadastroCandidato_pkey" PRIMARY KEY ("idCandidato")
);

-- CreateTable
CREATE TABLE "cadastroEmpresa" (
    "idEmpresa" SERIAL NOT NULL,
    "nomeEmpresa" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "segmento" TEXT NOT NULL,
    "emailCorporativo" TEXT NOT NULL,
    "telefoneCorporativo" TEXT NOT NULL,
    "enderecoId" INTEGER NOT NULL,
    "senhaEmpresa" TEXT NOT NULL,

    CONSTRAINT "cadastroEmpresa_pkey" PRIMARY KEY ("idEmpresa")
);

-- CreateTable
CREATE TABLE "cadastrarVaga" (
    "idVaga" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "requisitos" TEXT NOT NULL,
    "salario" TEXT NOT NULL,
    "tipoContrato" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Aberta',
    "skills" TEXT[],
    "beneficios" TEXT[],
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "cadastrarVaga_pkey" PRIMARY KEY ("idVaga")
);

-- CreateTable
CREATE TABLE "candidatura" (
    "idCandidatura" SERIAL NOT NULL,
    "dataCandidatura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "candidatoId" INTEGER NOT NULL,
    "vagaId" INTEGER NOT NULL,

    CONSTRAINT "candidatura_pkey" PRIMARY KEY ("idCandidatura")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "idEndereco" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("idEndereco")
);

-- CreateIndex
CREATE UNIQUE INDEX "cadastroCandidato_enderecoId_key" ON "cadastroCandidato"("enderecoId");

-- CreateIndex
CREATE UNIQUE INDEX "cadastroEmpresa_enderecoId_key" ON "cadastroEmpresa"("enderecoId");

-- AddForeignKey
ALTER TABLE "cadastroCandidato" ADD CONSTRAINT "cadastroCandidato_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("idEndereco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cadastroEmpresa" ADD CONSTRAINT "cadastroEmpresa_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("idEndereco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cadastrarVaga" ADD CONSTRAINT "cadastrarVaga_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "cadastroEmpresa"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidatura" ADD CONSTRAINT "candidatura_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "cadastroCandidato"("idCandidato") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidatura" ADD CONSTRAINT "candidatura_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "cadastrarVaga"("idVaga") ON DELETE RESTRICT ON UPDATE CASCADE;
