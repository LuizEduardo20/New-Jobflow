import { BookmarkIcon, PlusIcon, XIcon, PencilIcon, MapPinIcon, PhoneIcon, MailIcon, BuildingIcon, LogOutIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  cidade: string;
  estado: string;
  salary: string;
  description: string;
  requirements: string;
  tipo_contrato: 'CLT' | 'PJ' | 'Estágio' | 'Temporário';
  modalidade: 'Presencial' | 'Remoto' | 'Híbrido';
  skills: string[];
  beneficios: string[];
  status: string;
};

interface FormData {
  title: string;
  description: string;
  requirements: string;
  location?: string;
  salary: string;
  tipo_contrato: 'CLT' | 'PJ' | 'Estágio' | 'Temporário';
  modalidade: 'Presencial' | 'Remoto' | 'Híbrido';
  skills: string[];
  beneficios: string[];
  cidade: string;
  estado: string;
}

interface DashboardProps {
  onNavigate: (page: string) => void;
}

interface CompanyData {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  phone: string;
  segment: string;
  companySize: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
}

function Dashboard({ onNavigate }: DashboardProps) {
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobs, setJobs] = useState<Job[]>(() => {
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : [];
  });
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    tipo_contrato: 'CLT',
    modalidade: 'Presencial',
    skills: [],
    beneficios: [],
    cidade: '',
    estado: ''
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [companyData, setCompanyData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<any>(null);

  useEffect(() => {
    const companyStr = localStorage.getItem('companyUser');
    if (companyStr) {
      const data = JSON.parse(companyStr);
      setCompanyData(data);
      setEditForm(data);
    }
  }, []);

  useEffect(() => {
    const coursesData = JSON.parse(localStorage.getItem('coursesData') || '[]');
  }, []);

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      const newJob: Job = {
        id: Date.now(),
        title: formData.title,
        company: companyData?.name || 'Empresa',
        cidade: formData.cidade,
        estado: formData.estado,
        salary: formData.salary || 'A combinar',
        description: formData.description,
        requirements: formData.requirements,
        tipo_contrato: formData.tipo_contrato,
        modalidade: formData.modalidade,
        skills: formData.skills,
        beneficios: formData.beneficios,
        status: 'Aberta'
      };

      console.log('Nova vaga sendo criada:', newJob);

      const updatedJobs = [...jobs, newJob];
      setJobs(updatedJobs);
      localStorage.setItem('jobs', JSON.stringify(updatedJobs));
      
      console.log('Jobs salvos:', JSON.parse(localStorage.getItem('jobs') || '[]'));

      setShowPublishModal(false);
      setFormData({
        title: '',
        description: '',
        requirements: '',
        cidade: '',
        estado: '',
        salary: '',
        tipo_contrato: 'CLT',
        modalidade: 'Presencial',
        skills: [],
        beneficios: [],
      });
    } catch (error) {
      console.error('Erro ao publicar vaga:', error);
      alert('Erro ao publicar a vaga. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('companyUser');
    localStorage.removeItem('isCompanyLoggedIn');
    onNavigate('home');
  };

  const totalJobs = jobs.length;

  const handleDeleteJob = (jobId: number) => {
    const updatedJobs = jobs.filter(job => job.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    setSelectedJob(null);
  };

  const handleSaveProfile = () => {
    if (editForm) {
      const companies = JSON.parse(localStorage.getItem('registeredCompanies') || '[]');
      const updatedCompanies = companies.map((company: any) =>
        company.id === editForm.id ? editForm : company
      );
      localStorage.setItem('registeredCompanies', JSON.stringify(updatedCompanies));

      localStorage.setItem('companyUser', JSON.stringify(editForm));
      setCompanyData(editForm);
      setIsEditing(false);
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

  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button
              onClick={() => setShowPublishModal(true)}
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Nova Publicação
            </button>
            <button
              onClick={() => setShowProfileModal(true)}
              className="inline-flex items-center justify-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-300"
            >
              <BuildingIcon className="h-5 w-5 mr-2" />
              Perfil da Empresa
            </button>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              <LogOutIcon className="h-5 w-5 mr-2" />
              Sair
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <BookmarkIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-500">Total de Vagas</p>
                <p className="text-2xl font-semibold">{totalJobs}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${job.status === 'Aberta' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                  {job.status}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Descrição</h4>
                <p className="mt-1 text-gray-600">{job.description}</p>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                  }}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                  <p className="text-gray-600 mt-1">{selectedJob.company}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-500">{selectedJob.cidade}, {selectedJob.estado}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XIcon className="h-6 w-6" />
                  </button>
                  <span className="text-green-600 font-semibold mt-2">R$ {selectedJob.salary}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500">Tipo de Contrato</h4>
                  <p className="text-gray-900">{selectedJob.tipo_contrato}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500">Modalidade</h4>
                  <p className="text-gray-900">{selectedJob.modalidade}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500">Status</h4>
                  <p className="text-gray-900">{selectedJob.status}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Descrição da Vaga</h3>
                  <p className="text-gray-600 whitespace-pre-line">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Requisitos</h3>
                  <p className="text-gray-600 whitespace-pre-line">{selectedJob.requirements}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Habilidades Necessárias</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedJob.beneficios && selectedJob.beneficios.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Benefícios</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.beneficios.map((beneficio, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                        >
                          {beneficio}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t">
                  <button
                    onClick={() => handleDeleteJob(selectedJob.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Excluir Vaga
                  </button>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showPublishModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-2xl">
              <div className="px-6 py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Título da Vaga
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descrição da Vaga
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Requisitos
                    </label>
                    <textarea
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Salário
                    </label>
                    <input
                      type="text"
                      value={formData.salary}
                      onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Ex: R$ 3.000,00 ou A combinar"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Contrato
                      </label>
                      <select
                        value={formData.tipo_contrato}
                        onChange={(e) => setFormData({ ...formData, tipo_contrato: e.target.value as FormData['tipo_contrato'] })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="CLT">CLT</option>
                        <option value="PJ">PJ</option>
                        <option value="Estágio">Estágio</option>
                        <option value="Temporário">Temporário</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Modalidade
                      </label>
                      <select
                        value={formData.modalidade}
                        onChange={(e) => setFormData({ ...formData, modalidade: e.target.value as FormData['modalidade'] })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Presencial">Presencial</option>
                        <option value="Remoto">Remoto</option>
                        <option value="Híbrido">Híbrido</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Habilidades Necessárias
                    </label>
                    <input
                      type="text"
                      placeholder="Digite uma habilidade e pressione Enter"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const input = e.target as HTMLInputElement;
                          const value = input.value.trim();
                          if (value && !formData.skills.includes(value)) {
                            setFormData({
                              ...formData,
                              skills: [...formData.skills, value]
                            });
                            input.value = '';
                          }
                        }
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                      {formData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({
                                ...formData,
                                skills: formData.skills.filter((_, i) => i !== index)
                              });
                            }}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Benefícios
                    </label>
                    <input
                      type="text"
                      placeholder="Digite um benefício e pressione Enter"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const input = e.target as HTMLInputElement;
                          const value = input.value.trim();
                          if (value && !formData.beneficios.includes(value)) {
                            setFormData({
                              ...formData,
                              beneficios: [...formData.beneficios, value]
                            });
                            input.value = '';
                          }
                        }
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                      {formData.beneficios.map((beneficio, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                        >
                          {beneficio}
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({
                                ...formData,
                                beneficios: formData.beneficios.filter((_, i) => i !== index)
                              });
                            }}
                            className="ml-2 text-green-600 hover:text-green-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cidade
                      </label>
                      <input
                        type="text"
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        placeholder="Ex: São Paulo"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Estado
                      </label>
                      <input
                        type="text"
                        value={formData.estado}
                        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                        placeholder="Ex: SP"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowPublishModal(false)}
                      className="px-4 py-2 text-gray-700 hover:text-gray-900"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Publicando...' : 'Publicar'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {showProfileModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isEditing ? 'Editar Perfil da Empresa' : 'Perfil da Empresa'}
                </h2>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>

              {!isEditing ? (
                <div className="space-y-8 p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{companyData?.name}</h3>
                      <span className="inline-flex items-center px-3 py-1 mt-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                        {companyData?.segment}
                      </span>
                    </div>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <PencilIcon className="h-4 w-4 mr-2" />
                      Editar Perfil
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Informações Básicas</h4>
                      <div className="space-y-3">
                        <p className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                          <BuildingIcon className="h-5 w-5 mr-3 text-gray-500" />
                          <span className="font-medium mr-2">CNPJ:</span> {companyData?.cnpj}
                        </p>
                        <p className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                          <MailIcon className="h-5 w-5 mr-3 text-gray-500" />
                          {companyData?.email}
                        </p>
                        <p className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                          <PhoneIcon className="h-5 w-5 mr-3 text-gray-500" />
                          {companyData?.phone}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Localização</h4>
                      <div className="space-y-3">
                        <p className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                          <MapPinIcon className="h-5 w-5 mr-3 text-gray-500" />
                          <span className="font-medium mr-2">CEP:</span> {companyData?.cep}
                        </p>
                        <p className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                          <MapPinIcon className="h-5 w-5 mr-3 text-gray-500" />
                          {companyData?.logradouro}, {companyData?.numero}
                        </p>
                        <p className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                          <MapPinIcon className="h-5 w-5 mr-3 text-gray-500" />
                          {companyData?.bairro}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Informações Adicionais</h4>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-700">
                        <span className="font-medium">Porte da Empresa:</span> {companyData?.companySize}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }} className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
                  <div className="border-b pb-4 mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Editar Informações da Empresa</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
                        <input
                          type="text"
                          value={editForm?.name || ''}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CNPJ</label>
                        <input
                          type="text"
                          value={editForm?.cnpj || ''}
                          onChange={(e) => setEditForm({ ...editForm, cnpj: e.target.value })}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Segmento</label>
                        <input
                          type="text"
                          value={editForm?.segment || ''}
                          onChange={(e) => setEditForm({ ...editForm, segment: e.target.value })}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={editForm?.email || ''}
                          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                        <input
                          type="tel"
                          value={editForm?.phone || ''}
                          onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Endereço</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                          CEP
                        </label>
                        <div className="flex gap-2">
                          <input
                            id="cep"
                            name="cep"
                            type="text"
                            placeholder="00000-000"
                            value={editForm?.cep || ''}
                            onChange={handleCepChange}
                            maxLength={9}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                          />
                          <button
                            type="button"
                            onClick={buscarCep}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                          >
                            Buscar
                          </button>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
                          Número
                        </label>
                        <input
                          id="numero"
                          name="numero"
                          type="text"
                          value={editForm?.numero || ''}
                          onChange={(e) => setEditForm(prev => ({ ...prev!, numero: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="complemento" className="block text-sm font-medium text-gray-700 mb-1">
                          Complemento
                        </label>
                        <input
                          id="complemento"
                          name="complemento"
                          type="text"
                          value={editForm?.complemento || ''}
                          onChange={(e) => setEditForm(prev => ({ ...prev!, complemento: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700 mb-1">
                          Logradouro
                        </label>
                        <input
                          id="logradouro"
                          name="logradouro"
                          type="text"
                          value={editForm?.logradouro || ''}
                          onChange={(e) => setEditForm(prev => ({ ...prev!, logradouro: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="bairro" className="block text-sm font-medium text-gray-700 mb-1">
                          Bairro
                        </label>
                        <input
                          id="bairro"
                          name="bairro"
                          type="text"
                          value={editForm?.bairro || ''}
                          onChange={(e) => setEditForm(prev => ({ ...prev!, bairro: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                          Cidade
                        </label>
                        <input
                          id="cidade"
                          name="cidade"
                          type="text"
                          value={editForm?.cidade || ''}
                          onChange={(e) => setEditForm(prev => ({ ...prev!, cidade: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-1">
                          Estado
                        </label>
                        <input
                          id="estado"
                          name="estado"
                          type="text"
                          value={editForm?.estado || ''}
                          onChange={(e) => setEditForm(prev => ({ ...prev!, estado: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Informações Adicionais</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tamanho da Empresa</label>
                      <select
                        value={editForm?.companySize || ''}
                        onChange={(e) => setEditForm({ ...editForm, companySize: e.target.value })}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Selecione o tamanho</option>
                        <option value="MEI (9 pessoa a 19 Funcionários)">MEI (9 pessoa a 19 Funcionários)</option>
                        <option value="Pequena empresa (10 a 49 Funcionários)">Pequena empresa (10 a 49 Funcionários)</option>
                        <option value="Média empresa (50 a 99 Funcionários)">Média empresa (50 a 99 Funcionários)</option>
                        <option value="Grande empresa (100 ou mais Funcionários)">Grande empresa (100 ou mais Funcionários)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 border-t pt-6">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                    >
                      Salvar Alterações
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
