import { useState } from 'react';
import { User } from 'lucide-react';

function Register({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
    complemento: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Email inválido');
      return false;
    }

    // Validar formato do telefone
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setError('Telefone inválido. Use o formato (00) 00000-0000');
      return false;
    }

    // Validar formato do CEP
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(formData.cep)) {
      setError('CEP inválido. Use o formato 00000-000');
      return false;
    }

    return true;
  };

  const checkDuplicateData = async () => {
    try {
      // Verificar email duplicado
      const emailResponse = await fetch(`http://localhost:3001/api/candidatos/check-email/${formData.email}`);
      const emailData = await emailResponse.json();
      if (emailData.exists) {
        setError('Este email já está cadastrado');
        return false;
      }

      // Verificar endereço duplicado
      const enderecoResponse = await fetch('http://localhost:3001/api/candidatos/check-endereco', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cep: formData.cep,
          numero: formData.numero
        })
      });
      const enderecoData = await enderecoResponse.json();
      if (enderecoData.exists) {
        setError('Este endereço já está cadastrado');
        return false;
      }

      return true;
    } catch (error) {
      console.error('Erro ao verificar dados duplicados:', error);
      setError('Erro ao verificar dados. Tente novamente.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setError('');
      setLoading(true);

      // Verificar dados duplicados antes de prosseguir
      const isDataValid = await checkDuplicateData();
      if (!isDataValid) {
        return;
      }

      // Preparar os dados do endereço
      const endereco = {
        cep: formData.cep,
        logradouro: formData.logradouro,
        numero: parseInt(formData.numero),
        complemento: formData.complemento || '',
        bairro: formData.bairro,
        cidade: formData.cidade,
        estado: formData.estado
      };

      // Preparar os dados do candidato
      const candidatoData = {
        nomeCandidato: formData.name,
        emailCandidato: formData.email,
        telefoneCandidato: formData.phone,
        senhaCandidato: formData.password,
        curriculo: formData.resume?.name || '',
        endereco
      };

      // Enviar para o backend
      const response = await fetch('http://localhost:3001/api/candidatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(candidatoData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao criar conta');
      }

      const data = await response.json();
      console.log('Candidato criado:', data);
      
      // Fazer login automático após o registro
      const loginResponse = await fetch('http://localhost:3001/api/auth/candidato/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          senha: formData.password
        }),
      });

      const loginData = await loginResponse.json();

      if (!loginResponse.ok) {
        throw new Error(loginData.error || 'Erro ao fazer login automático');
      }

      // Salvar token e dados do usuário
      localStorage.setItem('candidateToken', loginData.token);
      localStorage.setItem('candidateData', JSON.stringify(loginData.candidato));
      localStorage.setItem('isCandidateLoggedIn', 'true');
      
      // Navegar para a home
      window.location.href = '/profile';
    } catch (error) {
      console.error('Erro ao registrar:', error);
      setError('Erro ao registrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const buscarCep = async () => {
    const cep = formData.cep.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const endereco = await response.json();

        if (!endereco.erro) {
          setFormData(prev => ({
            ...prev,
            logradouro: endereco.logradouro,
            bairro: endereco.bairro,
            cidade: endereco.localidade,
            estado: endereco.uf
          }));
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  const handleCepChange = (e) => {
    let cep = e.target.value;
    cep = cep.replace(/\D/g, '');
    if (cep.length > 5) {
      cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
    }
    setFormData(prev => ({ ...prev, cep }));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
              <User className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold text-white">
              Cadastro de Candidato
            </h2>
            <p className="mt-2 text-center text-gray-400">
              Ou{' '}
              <button onClick={() => onNavigate('login')} className="text-blue-500 hover:text-blue-400 transition-colors">
                entrar na sua conta existente
              </button>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-gray-900 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
              {error && (
                <div className="mb-4 bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nome completo
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Telefone
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="cep" className="block text-sm font-medium text-gray-300">
                      CEP
                    </label>
                    <div className="mt-1 flex gap-2">
                      <input
                        id="cep"
                        name="cep"
                        type="text"
                        required
                        placeholder="00000-000"
                        value={formData.cep}
                        onChange={handleCepChange}
                        maxLength={9}
                        className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={buscarCep}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      >
                        Buscar
                      </button>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="logradouro" className="block text-sm font-medium text-gray-300">
                      Endereço
                    </label>
                    <div className="mt-1">
                      <input
                        id="logradouro"
                        name="logradouro"
                        type="text"
                        required
                        value={formData.logradouro}
                        onChange={(e) => setFormData({ ...formData, logradouro: e.target.value })}
                        className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bairro" className="block text-sm font-medium text-gray-300">
                      Bairro
                    </label>
                    <div className="mt-1">
                      <input
                        id="bairro"
                        name="bairro"
                        type="text"
                        required
                        value={formData.bairro}
                        onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                        className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium text-gray-300">
                      Cidade
                    </label>
                    <div className="mt-1">
                      <input
                        id="cidade"
                        name="cidade"
                        type="text"
                        required
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="estado" className="block text-sm font-medium text-gray-300">
                      Estado
                    </label>
                    <div className="mt-1">
                      <input
                        id="estado"
                        name="estado"
                        type="text"
                        required
                        value={formData.estado}
                        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                        className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="numero" className="block text-sm font-medium text-gray-300">
                      Número
                    </label>
                    <div className="mt-1">
                      <input
                        id="numero"
                        name="numero"
                        type="text"
                        required
                        placeholder="123"
                        value={formData.numero}
                        onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                        className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="complemento" className="block text-sm font-medium text-gray-300">
                      Complemento
                    </label>
                    <div className="mt-1">
                      <input
                        id="complemento"
                        name="complemento"
                        type="text"
                        value={formData.complemento}
                        onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
                        className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-300">
                    Currículo (PDF)
                  </label>
                  <div className="mt-1">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      required
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFormData({
                            ...formData,
                            resume: {
                              name: file.name,
                              type: file.type
                            }
                          });
                        }
                      }}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-900/50 file:text-blue-300 hover:file:bg-blue-800/50"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-400">
                    Por favor, anexe seu currículo em formato PDF
                  </p>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Senha
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                    Confirmar senha
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={() => onNavigate('login')}
                      className="text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      Já tem uma conta? Entre aqui
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                    <span className="relative">{loading ? 'Criando conta...' : 'Criar conta'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Register;