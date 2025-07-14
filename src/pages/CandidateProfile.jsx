import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, FileText, Camera, LogOut } from 'lucide-react';

function CandidateProfile({ onNavigate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    resume: '',
    experience: '',
    education: '',
    skills: [],
    profilePicture: null
  });

  useEffect(() => {
    // Verificar se o usuário está logado
    const token = localStorage.getItem('candidateToken');
    const userData = localStorage.getItem('candidateData');

    if (!token || !userData) {
      // Se não estiver logado, redirecionar para login
      onNavigate('login');
      return;
    }

    // Carregar dados do usuário do localStorage
    const parsedData = JSON.parse(userData);
    setFormData(prevData => ({
      ...prevData,
      name: parsedData.nomeCandidato || '',
      email: parsedData.emailCandidato || '',
      phone: parsedData.telefoneCandidato || '',
      cep: parsedData.endereco?.cep || '',
      logradouro: parsedData.endereco?.logradouro || '',
      numero: parsedData.endereco?.numero || '',
      complemento: parsedData.endereco?.complemento || '',
      bairro: parsedData.endereco?.bairro || '',
      cidade: parsedData.endereco?.cidade || '',
      estado: parsedData.endereco?.estado || '',
      resume: parsedData.curriculo || '',
      // Carregar outros dados do usuário se disponíveis
    }));
  }, [onNavigate]);

  const handleLogout = () => {
    // Remover dados de autenticação
    localStorage.removeItem('candidateToken');
    localStorage.removeItem('candidateData');
    localStorage.removeItem('isCandidateLoggedIn');
    // Redirecionar para login
    onNavigate('login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('candidateToken');
      const userData = JSON.parse(localStorage.getItem('candidateData'));
      const idCandidato = userData.idCandidato;

      // Montar objeto para envio
      const endereco = {
        cep: formData.cep,
        logradouro: formData.logradouro,
        numero: parseInt(formData.numero),
        complemento: formData.complemento,
        bairro: formData.bairro,
        cidade: formData.cidade,
        estado: formData.estado,
        idEndereco: userData.endereco?.idEndereco
      };

      const candidatoData = {
        nomeCandidato: formData.name,
        emailCandidato: formData.email,
        telefoneCandidato: formData.phone,
        curriculo: formData.resume,
        endereco
      };

      const response = await fetch(`http://localhost:3001/api/candidatos/${idCandidato}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(candidatoData)
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar perfil');
      }

      const updatedData = await response.json();
      localStorage.setItem('candidateData', JSON.stringify(updatedData));
      setIsEditing(false);
    } catch (error) {
      alert(error.message || 'Erro ao atualizar perfil');
    }
  };

  const handleCepChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      const formattedValue = value.replace(/^(\d{5})(\d)/, '$1-$2');
      setFormData({ ...formData, cep: formattedValue });
    }
  };

  const buscarCep = async () => {
    const cep = formData.cep.replace(/\D/g, '');
    if (cep.length !== 8) {
      alert('CEP inválido');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert('CEP não encontrado');
        return;
      }

      setFormData({
        ...formData,
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
      });
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP');
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePicture = () => {
    setFormData({ ...formData, profilePicture: null });
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex-1 bg-black py-12 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-4">
            {formData.profilePicture ? (
              <img
                src={formData.profilePicture}
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-xl"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-blue-700 flex items-center justify-center text-white text-4xl font-bold border-4 border-blue-500 shadow-xl">
                {getInitials(formData.name)}
              </div>
            )}
            {isEditing && (
              <label className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 shadow-lg border-2 border-white">
                <Camera className="w-5 h-5" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white mb-1 drop-shadow">{formData.name}</h1>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors mt-2 shadow"
          >
            <LogOut className="h-5 w-5 mr-2" /> Sair
          </button>
        </div>

        {!isEditing ? (
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 relative">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="absolute top-4 right-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Editar Perfil
              </button>
              <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-blue-400" /> Informações Pessoais
              </h2>
              <div className="flex flex-col gap-2">
                <p className="flex items-center text-gray-300"><Mail className="h-5 w-5 mr-2 text-gray-400" />{formData.email}</p>
                <p className="flex items-center text-gray-300"><MapPin className="h-5 w-5 mr-2 text-gray-400" />{formData.cidade}{formData.estado ? `/${formData.estado}` : ''}</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2"><FileText className="w-5 h-5 text-blue-400" /> Currículo</h2>
              {formData.resume || formData.curriculo ? (
                <div className="flex items-center gap-2 mt-2">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">{formData.resume || formData.curriculo}</span>
                </div>
              ) : (
                <p className="text-gray-500 mt-2">Nenhum currículo anexado</p>
              )}
            </div>
            <div className="flex justify-end mt-8">
              <button
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold overflow-hidden shadow-lg"
                onClick={() => onNavigate('applications')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                <span className="relative text-white">Ver minhas candidaturas</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Informações Pessoais</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Endereço</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    CEP
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.cep}
                      onChange={handleCepChange}
                      placeholder="00000-000"
                      className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={buscarCep}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Buscar
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Logradouro
                  </label>
                  <input
                    type="text"
                    value={formData.logradouro}
                    onChange={(e) => setFormData({ ...formData, logradouro: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Número
                    </label>
                    <input
                      type="text"
                      value={formData.numero}
                      onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Complemento
                    </label>
                    <input
                      type="text"
                      value={formData.complemento}
                      onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Bairro
                  </label>
                  <input
                    type="text"
                    value={formData.bairro}
                    onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Cidade
                    </label>
                    <input
                      type="text"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Estado
                    </label>
                    <input
                      type="text"
                      value={formData.estado}
                      onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Currículo</h2>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFormData({ ...formData, resume: file.name });
                  }
                }}
                className="w-full text-white"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="group relative px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                <span className="relative text-white">Salvar Alterações</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default CandidateProfile;