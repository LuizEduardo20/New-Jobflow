import express from 'express';
import cors from 'cors';
import { PrismaClient } from './src/generated/prisma/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Middleware de autenticação
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'sua_chave_secreta', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

// Rota para cadastro de candidatos
app.post('/api/candidatos', async (req, res) => {
  try {
    const { endereco, ...candidatoData } = req.body;

    // Verificar se o email já está em uso
    const candidatoExistente = await prisma.cadastroCandidato.findFirst({
      where: {
        emailCandidato: candidatoData.emailCandidato
      }
    });

    if (candidatoExistente) {
      return res.status(400).json({ error: 'Email já está em uso' });
    }

    // Criar endereço primeiro
    const enderecoCriado = await prisma.endereco.create({
      data: endereco
    });

    // Criptografar a senha
    const senhaCriptografada = await bcrypt.hash(candidatoData.senhaCandidato, 10);

    // Criar candidato com o endereço e senha criptografada
    const candidato = await prisma.cadastroCandidato.create({
      data: {
        ...candidatoData,
        senhaCandidato: senhaCriptografada,
        enderecoId: enderecoCriado.idEndereco
      },
      include: {
        endereco: true
      }
    });

    // Remover a senha do objeto retornado
    const { senhaCandidato, ...candidatoSemSenha } = candidato;

    res.status(201).json(candidatoSemSenha);
  } catch (error) {
    console.error('Erro ao criar candidato:', error);
    res.status(500).json({ error: 'Erro ao criar candidato' });
  }
});

// Rota para cadastro de empresas
app.post('/api/empresas', async (req, res) => {
  try {
    const { endereco, ...empresaData } = req.body;

    // Verificar se o email já está em uso
    const empresaExistente = await prisma.cadastroEmpresa.findFirst({
      where: {
        emailCorporativo: empresaData.emailCorporativo
      }
    });

    if (empresaExistente) {
      return res.status(400).json({ error: 'Email já está em uso' });
    }

    // Verificar se o CNPJ já está em uso
    const cnpjExistente = await prisma.cadastroEmpresa.findFirst({
      where: {
        cnpj: empresaData.cnpj
      }
    });

    if (cnpjExistente) {
      return res.status(400).json({ error: 'CNPJ já está em uso' });
    }

    // Criar endereço primeiro
    const enderecoCriado = await prisma.endereco.create({
      data: endereco
    });

    // Criptografar a senha
    const senhaCriptografada = await bcrypt.hash(empresaData.senhaEmpresa, 10);

    // Criar empresa com o endereço e senha criptografada
    const empresa = await prisma.cadastroEmpresa.create({
      data: {
        ...empresaData,
        senhaEmpresa: senhaCriptografada,
        enderecoId: enderecoCriado.idEndereco
      },
      include: {
        endereco: true
      }
    });

    // Remover a senha do objeto retornado
    const { senhaEmpresa, ...empresaSemSenha } = empresa;

    res.status(201).json(empresaSemSenha);
  } catch (error) {
    console.error('Erro ao criar empresa:', error);
    res.status(500).json({ error: 'Erro ao criar empresa' });
  }
});

// Rota de login para empresas
app.post('/api/auth/empresa/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Buscar empresa pelo email
    const empresa = await prisma.cadastroEmpresa.findFirst({
      where: {
        emailCorporativo: email
      },
      include: {
        endereco: true
      }
    });

    if (!empresa) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    // Verificar senha
    const senhaValida = await bcrypt.compare(senha, empresa.senhaEmpresa);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { 
        id: empresa.idEmpresa,
        idEmpresa: empresa.idEmpresa,
        email: empresa.emailCorporativo,
        tipo: 'empresa'
      },
      process.env.JWT_SECRET || 'sua_chave_secreta',
      { expiresIn: '24h' }
    );

    // Remover a senha do objeto retornado
    const { senhaEmpresa, ...empresaSemSenha } = empresa;

    // Retornar dados da empresa e token
    res.json({
      token,
      empresa: empresaSemSenha
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro ao realizar login' });
  }
});

// Rota de login para candidatos
app.post('/api/auth/candidato/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Buscar candidato pelo email
    const candidato = await prisma.cadastroCandidato.findFirst({
      where: {
        emailCandidato: email
      },
      include: {
        endereco: true
      }
    });

    if (!candidato) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    // Verificar senha
    const senhaValida = await bcrypt.compare(senha, candidato.senhaCandidato);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { 
        id: candidato.idCandidato,
        email: candidato.emailCandidato,
        tipo: 'candidato'
      },
      process.env.JWT_SECRET || 'sua_chave_secreta',
      { expiresIn: '24h' }
    );

    // Remover a senha do objeto retornado
    const { senhaCandidato, ...candidatoSemSenha } = candidato;

    // Retornar dados do candidato e token
    res.json({
      token,
      candidato: candidatoSemSenha
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro ao realizar login' });
  }
});

// Rotas para vagas
// Criar nova vaga
app.post('/api/vagas', async (req, res) => {
  try {
    console.log('Dados recebidos:', req.body); // Log para debug
    const vagaData = {
      ...req.body,
      dataPublicacao: new Date()
    };
    const vaga = await prisma.cadastrarVaga.create({
      data: vagaData
    });
    res.json(vaga);
  } catch (error) {
    console.error('Erro ao criar vaga:', error);
    res.status(500).json({ error: 'Erro ao criar vaga' });
  }
});

// Atualizar vaga existente
app.put('/api/vagas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Só os campos do modelo!
    const {
      titulo,
      descricao,
      requisitos,
      salario,
      tipoContrato,
      modalidade,
      localizacao,
      skills,
      beneficios,
      empresaId
    } = req.body;

    const vagaData = {
      titulo,
      descricao,
      requisitos,
      salario,
      tipoContrato,
      modalidade,
      localizacao,
      skills,
      beneficios,
      empresaId
    };

    console.log('Atualizando vaga:', id, vagaData);

    const vaga = await prisma.cadastrarVaga.update({
      where: { idVaga: parseInt(id) },
      data: vagaData
    });
    res.json(vaga);
  } catch (error) {
    console.error('Erro ao atualizar vaga:', error);
    res.status(500).json({ error: error.message || 'Erro ao atualizar vaga' });
  }
});

// Excluir vaga
app.delete('/api/vagas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.cadastrarVaga.delete({
      where: { idVaga: parseInt(id) }
    });
    res.json({ message: 'Vaga excluída com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir vaga:', error);
    res.status(500).json({ error: 'Erro ao excluir vaga' });
  }
});

// Listar vagas de uma empresa
app.get('/api/vagas/empresa/:empresaId', async (req, res) => {
  try {
    const { empresaId } = req.params;
    console.log('Buscando vagas para empresa:', empresaId); // Log para debug
    const vagas = await prisma.cadastrarVaga.findMany({
      where: { empresaId: parseInt(empresaId) },
      orderBy: { dataPublicacao: 'desc' },
      include: {
        empresa: true // Incluir dados da empresa
      }
    });
    console.log('Vagas encontradas:', vagas); // Log para debug
    res.json(vagas);
  } catch (error) {
    console.error('Erro ao listar vagas:', error);
    res.status(500).json({ error: 'Erro ao listar vagas' });
  }
});

// Rota para obter dados da empresa autenticada
app.get('/api/auth/empresa/me', authenticateToken, async (req, res) => {
  try {
    const empresa = await prisma.cadastroEmpresa.findUnique({
      where: {
        idEmpresa: req.user.id
      },
      include: {
        endereco: true
      }
    });

    if (!empresa) {
      return res.status(404).json({ error: 'Empresa não encontrada' });
    }

    // Remover a senha do objeto retornado
    const { senhaEmpresa, ...empresaSemSenha } = empresa;

    res.json({ empresa: empresaSemSenha });
  } catch (error) {
    console.error('Erro ao buscar dados da empresa:', error);
    res.status(500).json({ error: 'Erro ao buscar dados da empresa' });
  }
});

// Atualizar dados da empresa
app.put('/api/empresas/:id', authenticateToken, async (req, res) => {
  try {
    console.log('ID recebido para atualização:', req.params.id);
    console.log('Dados recebidos para atualização:', req.body);
    const { id } = req.params;
    const { endereco, ...empresaData } = req.body;
    delete empresaData.idEmpresa;
    delete empresaData.enderecoId;

    const empresaAtualizada = await prisma.cadastroEmpresa.update({
      where: { idEmpresa: parseInt(id) },
      data: {
        ...empresaData,
        endereco: {
          update: {
            cep: endereco.cep,
            logradouro: endereco.logradouro,
            numero: parseInt(endereco.numero),
            complemento: endereco.complemento,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado
          }
        }
      },
      include: { endereco: true }
    });

    // Remover a senha do objeto retornado
    const { senhaEmpresa, ...empresaSemSenha } = empresaAtualizada;
    res.json(empresaSemSenha);
  } catch (error) {
    console.error('Erro ao atualizar empresa:', error);
    res.status(500).json({ error: 'Erro ao atualizar empresa' });
  }
});

// Rotas de verificação para candidatos
app.get('/api/candidatos/check-email/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const candidato = await prisma.cadastroCandidato.findFirst({
      where: {
        emailCandidato: email
      }
    });
    res.json({ exists: !!candidato });
  } catch (error) {
    console.error('Erro ao verificar email:', error);
    res.status(500).json({ error: 'Erro ao verificar email' });
  }
});

app.post('/api/candidatos/check-endereco', async (req, res) => {
  try {
    const { cep, numero } = req.body;
    const endereco = await prisma.endereco.findFirst({
      where: {
        cep,
        numero: parseInt(numero)
      }
    });
    res.json({ exists: !!endereco });
  } catch (error) {
    console.error('Erro ao verificar endereço:', error);
    res.status(500).json({ error: 'Erro ao verificar endereço' });
  }
});

// Rotas de verificação para empresas
app.get('/api/empresas/check-email/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const empresa = await prisma.cadastroEmpresa.findFirst({
      where: {
        emailCorporativo: email
      }
    });
    res.json({ exists: !!empresa });
  } catch (error) {
    console.error('Erro ao verificar email:', error);
    res.status(500).json({ error: 'Erro ao verificar email' });
  }
});

app.get('/api/empresas/check-cnpj/:cnpj', async (req, res) => {
  try {
    const { cnpj } = req.params;
    const empresa = await prisma.cadastroEmpresa.findFirst({
      where: {
        cnpj
      }
    });
    res.json({ exists: !!empresa });
  } catch (error) {
    console.error('Erro ao verificar CNPJ:', error);
    res.status(500).json({ error: 'Erro ao verificar CNPJ' });
  }
});

app.post('/api/empresas/check-endereco', async (req, res) => {
  try {
    const { cep, numero } = req.body;
    const endereco = await prisma.endereco.findFirst({
      where: {
        cep,
        numero: parseInt(numero)
      }
    });
    res.json({ exists: !!endereco });
  } catch (error) {
    console.error('Erro ao verificar endereço:', error);
    res.status(500).json({ error: 'Erro ao verificar endereço' });
  }
});

// Rota para criar uma nova candidatura
app.post('/api/candidaturas', authenticateToken, async (req, res) => {
  try {
    const { idVaga } = req.body;
    const candidatoId = req.user.id;

    // Verificar se já existe uma candidatura para esta vaga
    const existingApplication = await prisma.candidatura.findFirst({
      where: {
        vagaId: parseInt(idVaga),
        candidatoId: parseInt(candidatoId)
      }
    });

    if (existingApplication) {
      return res.status(400).json({ error: 'Você já se candidatou a esta vaga' });
    }

    // Criar nova candidatura
    const candidatura = await prisma.candidatura.create({
      data: {
        vagaId: parseInt(idVaga),
        candidatoId: parseInt(candidatoId),
        status: 'Pendente',
        dataCandidatura: new Date()
      },
      include: {
        vaga: {
          include: {
            empresa: true
          }
        },
        candidato: true
      }
    });

    res.status(201).json(candidatura);
  } catch (error) {
    console.error('Erro ao criar candidatura:', error);
    res.status(500).json({ error: 'Erro ao criar candidatura' });
  }
});

// Rota para buscar candidaturas do candidato
app.get('/api/candidaturas', authenticateToken, async (req, res) => {
  try {
    const idCandidato = req.user.idCandidato;

    const candidaturas = await prisma.candidatura.findMany({
      where: {
        idCandidato
      },
      include: {
        vaga: {
          include: {
            empresa: true
          }
        }
      },
      orderBy: {
        dataCandidatura: 'desc'
      }
    });

    res.json(candidaturas);
  } catch (error) {
    console.error('Erro ao buscar candidaturas:', error);
    res.status(500).json({ error: 'Erro ao buscar candidaturas' });
  }
});

// Rota para atualizar status da candidatura
app.put('/api/candidaturas/:id/status', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const idEmpresa = req.user.idEmpresa || req.user.id;

    // Verificar se a empresa tem permissão para atualizar esta candidatura
    const candidatura = await prisma.candidatura.findUnique({
      where: { idCandidatura: parseInt(id) },
      include: {
        vaga: true
      }
    });

    if (!candidatura) {
      return res.status(404).json({ error: 'Candidatura não encontrada' });
    }

    if (Number(candidatura.vaga.empresaId) !== Number(idEmpresa)) {
      return res.status(403).json({ error: 'Você não tem permissão para atualizar esta candidatura' });
    }

    const updatedCandidatura = await prisma.candidatura.update({
      where: { idCandidatura: parseInt(id) },
      data: { status },
      include: {
        vaga: {
          include: {
            empresa: true
          }
        },
        candidato: true
      }
    });

    res.json(updatedCandidatura);
  } catch (error) {
    console.error('Erro ao atualizar status da candidatura:', error);
    res.status(500).json({ error: 'Erro ao atualizar status da candidatura' });
  }
});

// Rota para buscar candidatos de uma empresa
app.get('/api/empresas/:empresaId/candidatos', authenticateToken, async (req, res) => {
  try {
    const { empresaId } = req.params;
    
    // Verificar se o usuário é a empresa correta
    if (parseInt(empresaId) !== req.user.id) {
      return res.status(403).json({ error: 'Não autorizado' });
    }

    const candidaturas = await prisma.candidatura.findMany({
      where: {
        vaga: {
          empresaId: parseInt(empresaId)
        }
      },
      include: {
        candidato: {
          select: {
            idCandidato: true,
            nomeCandidato: true,
            emailCandidato: true,
            telefoneCandidato: true,
            curriculo: true
          }
        },
        vaga: {
          select: {
            idVaga: true,
            titulo: true
          }
        }
      },
      orderBy: {
        dataCandidatura: 'desc'
      }
    });

    res.json(candidaturas);
  } catch (error) {
    console.error('Erro ao buscar candidatos:', error);
    res.status(500).json({ error: 'Erro ao buscar candidatos' });
  }
});

// Atualizar dados do candidato
app.put('/api/candidatos/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { endereco, ...candidatoData } = req.body;
    delete candidatoData.idCandidato;
    delete candidatoData.enderecoId;

    const candidatoAtualizado = await prisma.cadastroCandidato.update({
      where: { idCandidato: parseInt(id) },
      data: {
        ...candidatoData,
        endereco: {
          update: {
            cep: endereco.cep,
            logradouro: endereco.logradouro,
            numero: parseInt(endereco.numero),
            complemento: endereco.complemento,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado
          }
        }
      },
      include: { endereco: true }
    });

    // Remover a senha do objeto retornado
    const { senhaCandidato, ...candidatoSemSenha } = candidatoAtualizado;
    res.json(candidatoSemSenha);
  } catch (error) {
    console.error('Erro ao atualizar candidato:', error);
    res.status(500).json({ error: 'Erro ao atualizar candidato' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 