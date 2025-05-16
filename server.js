import express from 'express';
import cors from 'cors';
import { PrismaClient } from './src/generated/prisma/index.js';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rota para cadastro de candidatos
app.post('/api/candidatos', async (req, res) => {
  try {
    const { endereco, ...candidatoData } = req.body;

    // Criar endereço primeiro
    const enderecoCriado = await prisma.endereco.create({
      data: endereco
    });

    // Criar candidato com o endereço
    const candidato = await prisma.cadastroCandidato.create({
      data: {
        ...candidatoData,
        enderecoId: enderecoCriado.idEndereco
      }
    });

    res.json(candidato);
  } catch (error) {
    console.error('Erro ao criar candidato:', error);
    res.status(500).json({ error: 'Erro ao criar candidato' });
  }
});

// Rota para cadastro de empresas
app.post('/api/empresas', async (req, res) => {
  try {
    const { endereco, ...empresaData } = req.body;

    // Criar endereço primeiro
    const enderecoCriado = await prisma.endereco.create({
      data: endereco
    });

    // Criar empresa com o endereço
    const empresa = await prisma.cadastroEmpresa.create({
      data: {
        ...empresaData,
        enderecoId: enderecoCriado.idEndereco
      }
    });

    res.json(empresa);
  } catch (error) {
    console.error('Erro ao criar empresa:', error);
    res.status(500).json({ error: 'Erro ao criar empresa' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 