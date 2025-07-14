import { useState } from 'react';
import { Building2 } from 'lucide-react';

function RegisterCompany({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: '',
    cep: '',
    logradouro: '',
    numero: '',
    cidade: '',
    estado: '',
    segment: '',
    companySize: '',
    bairro: '',
    complemento: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const companySizes = [
    'MEI (9 pessoa a 19 Funcionários)',
    'Pequena empresa (10 a 49 Funcionários)',
    'Média empresa (50 a 99 Funcionários)',
    'Grande empresa (100 ou mais Funcionários)'
  ];

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    const cnpjClean = formData.cnpj.replace(/\D/g, '');
    if (cnpjClean.length !== 14) {
      setError('CNPJ inválido');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Email inválido');
      return false;
    }

    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setError('Telefone inválido. Use o formato (00) 00000-0000');
      return false;
    }

    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(formData.cep)) {
      setError('CEP inválido. Use o formato 00000-000');
      return false;
    }

    return true;
  };

  const checkDuplicateData = async () => {
    try {
      const cnpjResponse = await fetch(`http://localhost:3001/api/empresas/check-cnpj/${formData.cnpj}`);
      const cnpjData = await cnpjResponse.json();
      if (cnpjData.exists) {
        setError('Este CNPJ já está cadastrado');
        return false;
      }

      const emailResponse = await fetch(`http://localhost:3001/api/empresas/check-email/${formData.email}`);
      const emailData = await emailResponse.json();
      if (emailData.exists) {
        setError('Este email já está cadastrado');
        return false;
      }

      const enderecoResponse = await fetch('http://localhost:3001/api/empresas/check-endereco', {
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

  const handleCepChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, cep: e.target.value });
  };

  const buscarCep = async () => {
    const cep = formData.cep.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          }));
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
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

      const isDataValid = await checkDuplicateData();
      if (!isDataValid) {
        return;
      }

      const endereco = {
        cep: formData.cep,
        logradouro: formData.logradouro,
        numero: parseInt(formData.numero),
        complemento: formData.complemento || '',
        bairro: formData.bairro,
        cidade: formData.cidade,
        estado: formData.estado
      };

      const empresaData = {
        nomeEmpresa: formData.name,
        cnpj: formData.cnpj,
        segmento: formData.segment,
        emailCorporativo: formData.email,
        telefoneCorporativo: formData.phone,
        senhaEmpresa: formData.password,
        companySize: formData.companySize, // garantir envio do campo
        endereco
      };

      const response = await fetch('http://localhost:3001/api/empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empresaData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao criar conta');
      }

      const data = await response.json();
      console.log('Empresa criada:', data);
      
      localStorage.setItem('companyData', JSON.stringify(data));
      localStorage.setItem('companyToken', data.token);
      localStorage.setItem('isCompanyLoggedIn', 'true');
      
      onNavigate('dashboard');
    } catch (error) {
      setError(error.message || 'Falha ao criar conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
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
              <Building2 className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold text-white">
              Cadastro de Empresa
            </h2>
            <p className="mt-2 text-center text-gray-400">
              Ou{' '}
              <button onClick={() => onNavigate('loginCompany')} className="text-blue-500 hover:text-blue-400 transition-colors">
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
                    Nome da Empresa
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
                  <label htmlFor="cnpj" className="block text-sm font-medium text-gray-300">
                    CNPJ
                  </label>
                  <div className="mt-1">
                    <input
                      id="cnpj"
                      name="cnpj"
                      type="text"
                      required
                      placeholder="00.000.000/0000-00"
                      value={formData.cnpj}
                      onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="segment" className="block text-sm font-medium text-gray-300">
                    Segmento/Área de Atuação
                  </label>
                  <div className="mt-1">
                    <input
                      id="segment"
                      name="segment"
                      type="text"
                      required
                      placeholder="Ex: Tecnologia, Saúde, Educação"
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-300">
                    Tamanho da Empresa
                  </label>
                  <div className="mt-1">
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Selecione o tamanho</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Corporativo
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
                    Telefone Comercial
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(00) 0000-0000"
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
                    Confirmar Senha
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
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

export default RegisterCompany;