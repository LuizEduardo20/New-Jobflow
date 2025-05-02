import { useState, useEffect } from 'react';
import { PencilIcon, MapPinIcon, PhoneIcon, MailIcon, BriefcaseIcon, BookOpenIcon, LogOutIcon, StarIcon, GlobeIcon, HeartIcon } from 'lucide-react';

type UserData = {
  id: string;
  email: string;
  name: string;
  role: string;
  phone?: string;
  bio?: string;
  skills?: string[];
  resume?: {
    name: string;
    type: string;
  };
  logradouro?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  numero?: string;
  formacao?: string[];
  experiencia?: string[];
  competencias?: string[];
  idiomas?: string[];
  interesses?: string[];
  profileImage?: string;
};

function CandidateProfile({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [applications, setApplications] = useState<string[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<UserData | null>(null);
  const [skillInput, setSkillInput] = useState('');
  const [isImageMenuOpen, setIsImageMenuOpen] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    const userStr = localStorage.getItem('currentUser');

    if (!isUserLoggedIn || !userStr) {
      onNavigate('login');
      return;
    }

    const userDataFromStorage = JSON.parse(userStr);

    if (!userData || userData.id !== userDataFromStorage.id) {
      setUserData(userDataFromStorage);
      setEditForm(userDataFromStorage);
    }

    const savedApplications = localStorage.getItem('applications');
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    }
  }, [onNavigate, userData?.id]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isUserLoggedIn');
    onNavigate('login');
  };

  const handleSaveProfile = () => {
    if (editForm) {
      localStorage.setItem('currentUser', JSON.stringify(editForm));

      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const updatedUsers = registeredUsers.map((user: UserData) =>
        user.id === editForm.id ? editForm : user
      );
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

      setUserData(editForm);
      setIsEditing(false);
    }
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editForm) {
      setEditForm({
        ...editForm,
        resume: {
          name: file.name,
          type: file.type
        }
      });
    }
  };

  const loadUserData = () => {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      setUserData(user);
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const formattedCep = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substring(0, 9)

    setEditForm(prev => ({ ...prev!, cep: formattedCep }))
  }

  const buscarCep = async () => {
    if (editForm?.cep) {
      try {
        const cepLimpo = editForm.cep.replace(/\D/g, '')
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        const data = await response.json()

        if (!data.erro) {
          setEditForm(prev => ({
            ...prev!,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          }))
        } else {
          alert('CEP não encontrado')
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error)
        alert('Erro ao buscar CEP')
      }
    }
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('A imagem deve ter no máximo 2MB.');
      return;
    }

    try {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const base64String = reader.result as string;
        
        const stringSize = new Blob([base64String]).size;
        if (stringSize > 5 * 1024 * 1024) {
          alert('A imagem é muito grande para ser armazenada.');
          return;
        }

        setUserData(prev => ({ ...prev!, profileImage: base64String }));
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const updatedUser = { ...currentUser, profileImage: base64String };
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const updatedUsers = registeredUsers.map((user: any) => 
          user.id === currentUser.id ? updatedUser : user
        );
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
      };

      reader.onerror = () => {
        alert('Erro ao ler o arquivo.');
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      alert('Erro ao processar a imagem.');
    }
  };

  const handleRemoveImage = () => {
    try {
      setUserData(prev => ({ ...prev!, profileImage: undefined }));
      
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const updatedUser = { ...currentUser, profileImage: undefined };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const updatedUsers = registeredUsers.map((user: any) => 
        user.id === currentUser.id ? updatedUser : user
      );
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    } catch (error) {
      console.error('Erro ao remover a imagem:', error);
      alert('Erro ao remover a imagem.');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.image-menu')) {
        setIsImageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex-1 bg-gray-50 min-h-screen py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="h-24 sm:h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <div className="relative px-4 sm:px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="-mt-12 mb-4 sm:mb-0">
                <div className="flex items-end">
                  <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {userData?.profileImage ? (
                      <img
                        src={userData.profileImage}
                        alt={`Foto de perfil de ${userData?.name}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-2xl sm:text-3xl text-gray-600">
                        {userData?.name?.charAt(0)?.toUpperCase()}
                      </span>
                    )}
                  </div>

                  <div className="image-menu">
                    <button
                      onClick={() => setIsImageMenuOpen(!isImageMenuOpen)}
                      className="p-1.5 bg-gray-500 hover:bg-gray-700 rounded-full transition-colors shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>

                    {isImageMenuOpen && (
                      <div className="absolute mt-1 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1">
                          <label className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 cursor-pointer">
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                handleImageUpload(e);
                                setIsImageMenuOpen(false);
                              }}
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            Alterar foto
                          </label>
                          {userData?.profileImage && (
                            <button
                              onClick={() => {
                                handleRemoveImage();
                                setIsImageMenuOpen(false);
                              }}
                              className="flex w-full items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              Remover foto
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full sm:flex-row sm:w-auto mt-4 sm:mt-6">
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-4 py-2.5 border border-blue-600 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-4 py-2.5 border border-red-600 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOutIcon className="h-4 w-4 mr-2" />
                  Sair
                </button>
              </div>
            </div>
            {userData && !isEditing ? (
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{userData.name}</h1>
                  <div className="mt-2 space-y-2">
                    <p className="flex items-center text-gray-600">
                      <MailIcon className="h-4 w-4 mr-2" />
                      {userData.email}
                    </p>
                    {userData.phone && (
                      <p className="flex items-center text-gray-600">
                        <PhoneIcon className="h-4 w-4 mr-2" />
                        {userData.phone}
                      </p>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Endereço</h2>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      {`${userData.bairro}, ${userData.cidade} - ${userData.estado}`}
                    </p>
                    {userData.bairro && (
                      <p className="flex items-center text-gray-600">
                        <MapPinIcon className="h-4 w-4 mr-2" />
                        {`${userData.logradouro}${userData.numero ? `, ${userData.numero}` : ''}`}
                      </p>
                    )}
                    {userData.cep && (
                      <p className="flex items-center text-gray-600">
                        <MapPinIcon className="h-4 w-4 mr-2" />
                        CEP: {userData.cep}
                      </p>
                    )}
                  </div>

                  {(userData?.bio || (userData?.skills && userData.skills.length > 0)) && (
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                      {userData.bio && (
                        <div className="mb-6">
                          <h2 className="text-lg font-semibold text-gray-900 mb-3">Sobre mim</h2>
                          <p className="text-gray-600 whitespace-pre-line">{userData.bio}</p>
                        </div>
                      )}
                      {userData.skills && userData.skills.length > 0 && (
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900 mb-3">Habilidades</h2>
                          <div className="flex flex-wrap gap-2">
                            {userData.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          {userData.logradouro && (
                            <div className="mt-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                  {userData.formacao && userData.formacao.length > 0 && (
                                    <div className="mb-8 p-6 bg-white rounded-lg border border-gray-100">
                                      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <BookOpenIcon className="h-5 w-5 mr-2 text-blue-500" />
                                        Formação
                                      </h2>
                                      <div className="space-y-4">
                                        {userData.formacao.map((item, index) => (
                                          <div key={index} className="flex items-start">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3" />
                                            <p className="text-gray-700 flex-1">{item}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {userData.experiencia && userData.experiencia.length > 0 && (
                                    <div className="mb-8 p-6 bg-white rounded-lg border border-gray-100">
                                      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <BriefcaseIcon className="h-5 w-5 mr-2 text-blue-500" />
                                        Experiência
                                      </h2>
                                      <div className="space-y-4">
                                        {userData.experiencia.map((item, index) => (
                                          <div key={index} className="flex items-start">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3" />
                                            <p className="text-gray-700 flex-1">{item}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {userData.competencias && userData.competencias.length > 0 && (
                                    <div className="mb-8 p-6 bg-white rounded-lg border border-gray-100">
                                      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <StarIcon className="h-5 w-5 mr-2 text-blue-500" />
                                        Competências
                                      </h2>
                                      <div className="flex flex-wrap gap-2">
                                        {userData.competencias.map((item, index) => (
                                          <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                                            {item}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div>
                                  {userData.idiomas && userData.idiomas.length > 0 && (
                                    <div className="mb-8 p-6 bg-white rounded-lg border border-gray-100">
                                      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <GlobeIcon className="h-5 w-5 mr-2 text-blue-500" />
                                        Idiomas
                                      </h2>
                                      <div className="space-y-4">
                                        {userData.idiomas.map((item, index) => (
                                          <div key={index} className="flex items-start">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3" />
                                            <p className="text-gray-700 flex-1">{item}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {userData.interesses && userData.interesses.length > 0 && (
                                    <div className="mb-8 p-6 bg-white rounded-lg border border-gray-100">
                                      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <HeartIcon className="h-5 w-5 mr-2 text-blue-500" />
                                        Interesses
                                      </h2>
                                      <div className="flex flex-wrap gap-2">
                                        {userData.interesses.map((item, index) => (
                                          <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                                            {item}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                      <BriefcaseIcon className="h-5 w-5 mr-2 text-gray-500" />
                      Minhas Candidaturas
                    </h2>
                    <button
                      onClick={() => onNavigate('jobscontent')}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Ver todas as candidaturas
                    </button>
                  </div>

                  {applications.length > 0 ? (
                    <div className="space-y-3">
                      {applications.slice(0, 3).map((company, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <div className="h-10 w-10 flex items-center justify-center bg-blue-100 rounded-full mr-4">
                            <BriefcaseIcon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{company}</p>
                            <p className="text-sm text-gray-500">Candidatura enviada</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">Nenhuma candidatura encontrada</p>
                  )}
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <BriefcaseIcon className="h-5 w-5 mr-2 text-gray-500" />
                    Currículo
                  </h2>

                  {userData.resume ? (
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex items-center justify-center bg-blue-100 rounded-full mr-4">
                          <BriefcaseIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{userData.resume.name}</p>
                          <p className="text-sm text-gray-500">Curriculo</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Atualizar
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <BriefcaseIcon className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                      <p>Você ainda não enviou seu currículo.</p>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Adicionar currículo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Editar Informações</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input
                      type="text"
                      value={editForm?.name || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, name: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      value={editForm?.phone || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, phone: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sobre mim</label>
                    <textarea
                      value={editForm?.bio || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, bio: e.target.value }))}
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
                      CEP
                    </label>
                    <div className="mt-1 flex gap-2">
                      <input
                        id="cep"
                        name="cep"
                        type="text"
                        placeholder="00000-000"
                        value={editForm?.cep || ''}
                        onChange={handleCepChange}
                        maxLength={9}
                        className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={buscarCep}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Buscar
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700">
                      Endereço
                    </label>
                    <input
                      id="logradouro"
                      name="logradouro"
                      type="text"
                      value={editForm?.logradouro || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, logradouro: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">
                      Bairro
                    </label>
                    <input
                      id="bairro"
                      name="bairro"
                      type="text"
                      value={editForm?.bairro || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, bairro: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">
                      Cidade
                    </label>
                    <input
                      id="cidade"
                      name="cidade"
                      type="text"
                      value={editForm?.cidade || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, cidade: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                      Estado
                    </label>
                    <input
                      id="estado"
                      name="estado"
                      type="text"
                      value={editForm?.estado || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, estado: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                      Número
                    </label>
                    <input
                      id="numero"
                      name="numero"
                      type="text"
                      placeholder="123"
                      value={editForm?.numero || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, numero: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Habilidades
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {editForm?.skills?.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                        >
                          {skill}
                          <button
                            onClick={() => {
                              setEditForm(prev => ({
                                ...prev!,
                                skills: prev!.skills?.filter((_, i) => i !== index)
                              }));
                            }}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ',') {
                          e.preventDefault();
                          if (skillInput.trim()) {
                            setEditForm(prev => ({
                              ...prev!,
                              skills: [...(prev!.skills || []), skillInput.trim()]
                            }));
                            setSkillInput('');
                          }
                        }
                      }}
                      placeholder="Digite uma habilidade e pressione Enter"
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Formação
                    </label>
                    <div className="space-y-2">
                      {editForm?.formacao?.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const newFormacao = [...(editForm?.formacao || [])];
                              newFormacao[index] = e.target.value;
                              setEditForm(prev => ({ ...prev!, formacao: newFormacao }));
                            }}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newFormacao = editForm?.formacao?.filter((_, i) => i !== index);
                              setEditForm(prev => ({ ...prev!, formacao: newFormacao }));
                            }}
                            className="px-2 text-red-600 hover:text-red-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setEditForm(prev => ({
                            ...prev!,
                            formacao: [...(prev?.formacao || []), '']
                          }));
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Adicionar Formação
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Experiência
                    </label>
                    <div className="space-y-2">
                      {editForm?.experiencia?.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const newExp = [...(editForm?.experiencia || [])];
                              newExp[index] = e.target.value;
                              setEditForm(prev => ({ ...prev!, experiencia: newExp }));
                            }}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newExp = editForm?.experiencia?.filter((_, i) => i !== index);
                              setEditForm(prev => ({ ...prev!, experiencia: newExp }));
                            }}
                            className="px-2 text-red-600 hover:text-red-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setEditForm(prev => ({
                            ...prev!,
                            experiencia: [...(prev?.experiencia || []), '']
                          }));
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Adicionar Experiência
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Competências
                    </label>
                    <div className="space-y-2">
                      {editForm?.competencias?.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const newComp = [...(editForm?.competencias || [])];
                              newComp[index] = e.target.value;
                              setEditForm(prev => ({ ...prev!, competencias: newComp }));
                            }}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newComp = editForm?.competencias?.filter((_, i) => i !== index);
                              setEditForm(prev => ({ ...prev!, competencias: newComp }));
                            }}
                            className="px-2 text-red-600 hover:text-red-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setEditForm(prev => ({
                            ...prev!,
                            competencias: [...(prev?.competencias || []), '']
                          }));
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Adicionar Competência
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Idiomas
                    </label>
                    <div className="space-y-2">
                      {editForm?.idiomas?.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const newIdiomas = [...(editForm?.idiomas || [])];
                              newIdiomas[index] = e.target.value;
                              setEditForm(prev => ({ ...prev!, idiomas: newIdiomas }));
                            }}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newIdiomas = editForm?.idiomas?.filter((_, i) => i !== index);
                              setEditForm(prev => ({ ...prev!, idiomas: newIdiomas }));
                            }}
                            className="px-2 text-red-600 hover:text-red-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setEditForm(prev => ({
                            ...prev!,
                            idiomas: [...(prev?.idiomas || []), '']
                          }));
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Adicionar Idioma
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Interesses
                    </label>
                    <div className="space-y-2">
                      {editForm?.interesses?.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const newInteresses = [...(editForm?.interesses || [])];
                              newInteresses[index] = e.target.value;
                              setEditForm(prev => ({ ...prev!, interesses: newInteresses }));
                            }}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newInteresses = editForm?.interesses?.filter((_, i) => i !== index);
                              setEditForm(prev => ({ ...prev!, interesses: newInteresses }));
                            }}
                            className="px-2 text-red-600 hover:text-red-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setEditForm(prev => ({
                            ...prev!,
                            interesses: [...(prev?.interesses || []), '']
                          }));
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Adicionar Interesse
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Currículo (PDF)
                    </label>
                    <div className="mt-1">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleResumeUpload}
                        className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                    {editForm?.resume && (
                      <p className="mt-2 text-sm text-gray-500">
                        Currículo atual: {editForm.resume.name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveProfile}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
