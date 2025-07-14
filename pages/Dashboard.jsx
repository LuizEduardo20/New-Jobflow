import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BriefcaseIcon, UsersIcon, BuildingIcon, LogOutIcon, PlusIcon, PencilIcon, TrashIcon, FileText, CheckCircle, XCircle, MoreVertical } from 'lucide-react';

function getStatusColor(status) {
  switch (status?.toLowerCase()) {
    case 'aprovado':
      return 'text-green-600 bg-green-100';
    case 'recusado':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-yellow-700 bg-yellow-100';
  }
}

function DashboardCompany() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [companyData, setCompanyData] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    requisitos: '',
    salario: '',
    tipoContrato: 'CLT',
    modalidade: 'Presencial',
    localizacao: '',
    skills: [],
    beneficios: []
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileFormData, setProfileFormData] = useState({
    nomeEmpresa: '',
    cnpj: '',
    emailCorporativo: '',
    telefoneCorporativo: '',
    segmento: '',
    companySize: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  });
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('companyToken');
    if (!token) {
      navigate('/login-company');
      return;
    }

    fetchCompanyData();
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdownId && !event.target.closest('.dropdown-container')) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownId]);

  const fetchCompanyData = async () => {
    try {
      const token = localStorage.getItem('companyToken');
      const response = await fetch('http://localhost:3001/api/auth/empresa/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Falha na autenticação');
      }

      const data = await response.json();
      setCompanyData(data.empresa);
      await fetchCompanyJobs(data.empresa.idEmpresa);
      await fetchCandidates(data.empresa.idEmpresa);
    } catch (error) {
      console.error('Erro ao carregar dados da empresa:', error);
      setError('Erro ao carregar dados. Por favor, faça login novamente.');
      localStorage.removeItem('companyToken');
      localStorage.removeItem('companyData');
      localStorage.removeItem('isCompanyLoggedIn');
      navigate('/login-company');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCompanyJobs = async (empresaId) => {
    try {
      const token = localStorage.getItem('companyToken');
      const response = await fetch(`http://localhost:3001/api/vagas/empresa/${empresaId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Falha ao carregar vagas');
      }
      
      const data = await response.json();
      setJobs(data);
      localStorage.setItem('allJobs', JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao carregar vagas:', error);
      setError('Falha ao carregar vagas. Por favor, tente novamente.');
    }
  };

  const fetchCandidates = async (empresaId) => {
    try {
      const token = localStorage.getItem('companyToken');
      const response = await fetch(`http://localhost:3001/api/empresas/${empresaId}/candidatos`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Falha ao carregar candidatos');
      }
      
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Erro ao carregar candidatos:', error);
      setError('Falha ao carregar candidatos. Por favor, tente novamente.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('companyToken');
    localStorage.removeItem('companyData');
    localStorage.removeItem('isCompanyLoggedIn');
    window.location.href = '/login-company';
  };

  const handleSubmitJob = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('companyToken');
      const jobData = {
        ...formData,
        empresaId: companyData.idEmpresa
      };
      let response;
      if (selectedJob) {
        // Edição de vaga
        response = await fetch(`http://localhost:3001/api/vagas/${selectedJob.idVaga}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(jobData)
        });
      } else {
        // Criação de vaga
        response = await fetch('http://localhost:3001/api/vagas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(jobData)
        });
      }
      if (!response.ok) {
        throw new Error(selectedJob ? 'Falha ao editar vaga' : 'Falha ao criar vaga');
      }
      await fetchCompanyJobs(companyData.idEmpresa);
      setShowJobModal(false);
      setSelectedJob(null);
      setFormData({
        titulo: '',
        descricao: '',
        requisitos: '',
        salario: '',
        tipoContrato: 'CLT',
        modalidade: 'Presencial',
        localizacao: '',
        skills: [],
        beneficios: []
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteJob = async (jobId) => {
    try {
      const token = localStorage.getItem('companyToken');
      const response = await fetch(`http://localhost:3001/api/vagas/${jobId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Falha ao excluir vaga');
      }

      await fetchCompanyJobs(companyData.idEmpresa);
      const updatedJobs = jobs.filter(job => job.idVaga !== jobId);
      localStorage.setItem('allJobs', JSON.stringify(updatedJobs));
      // Atualizar a lista de candidatos após deletar vaga
      await fetchCandidates(companyData.idEmpresa);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('companyToken');
      console.log('Enviando para atualização:', companyData.idEmpresa, profileFormData);
      const response = await fetch(`http://localhost:3001/api/empresas/${companyData.idEmpresa}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(profileFormData)
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar perfil');
      }

      const updatedData = await response.json();
      setCompanyData(updatedData);
      setShowProfileModal(false);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateStatus = async (candidaturaId, newStatus) => {
    try {
      const token = localStorage.getItem('companyToken');
      const response = await fetch(`http://localhost:3001/api/candidaturas/${candidaturaId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar status');
      }

      // Atualizar a lista de candidatos
      await fetchCandidates(companyData.idEmpresa);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Vagas Ativas</p>
            <p className="text-2xl font-semibold text-white">{jobs.length}</p>
          </div>
          <BriefcaseIcon className="h-8 w-8 text-blue-500" />
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Candidatos</p>
            <p className="text-2xl font-semibold text-white">0</p>
          </div>
          <UsersIcon className="h-8 w-8 text-green-500" />
        </div>
      </div>
    </div>
  );

  const renderJobs = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Vagas Publicadas</h2>
        <button
          onClick={() => setShowJobModal(true)}
          className="group relative flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
          <PlusIcon className="h-5 w-5 mr-2 relative text-white" />
          <span className="relative text-white">Nova Vaga</span>
        </button>
      </div>

      {jobs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">Nenhuma vaga publicada ainda.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div key={job.idVaga} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.titulo}</h3>
                  <p className="text-gray-400 mt-1">{job.localizacao}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-800">
                      {job.tipoContrato}
                    </span>
                    <span className="px-2 py-1 bg-green-900/50 text-green-300 text-sm rounded-full border border-green-800">
                      {job.modalidade}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setFormData(job);
                      setShowJobModal(true);
                    }}
                    className="p-2 text-blue-400 hover:bg-blue-900/50 rounded-lg transition-colors"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteJob(job.idVaga)}
                    className="p-2 text-red-400 hover:bg-red-900/50 rounded-lg transition-colors"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCandidates = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Candidatos</h2>
      </div>

      {candidates.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">Nenhum candidato ainda.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {candidates.map((candidatura) => (
            <div key={candidatura.idCandidatura} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">{candidatura.candidato.nomeCandidato}</h3>
                  <p className="text-gray-400 mt-1">Vaga: {candidatura.vaga.titulo}</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-400">
                    <p>Email: {candidatura.candidato.emailCandidato}</p>
                    <p>Telefone: {candidatura.candidato.telefoneCandidato}</p>
                  </div>
                  <div className="mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      candidatura.status === 'aprovado' 
                        ? 'bg-green-900/50 text-green-300 border border-green-800'
                        : candidatura.status === 'recusado'
                        ? 'bg-red-900/50 text-red-300 border border-red-800'
                        : 'bg-yellow-900/50 text-yellow-300 border border-yellow-800'
                    }`}>
                      {candidatura.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {candidatura.candidato.curriculo && (
                    <a
                      href={candidatura.candidato.curriculo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                      <FileText className="h-5 w-5 mr-2 relative text-white" />
                      <span className="relative text-white">Baixar Currículo</span>
                    </a>
                  )}
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setOpenDropdownId(openDropdownId === candidatura.idCandidatura ? null : candidatura.idCandidatura)}
                      className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>
                    {openDropdownId === candidatura.idCandidatura && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-10">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              handleUpdateStatus(candidatura.idCandidatura, 'aprovado');
                              setOpenDropdownId(null);
                            }}
                            className="flex items-center w-full px-4 py-2 text-sm text-green-400 hover:bg-green-900/50 transition-colors"
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Aprovar Candidatura
                          </button>
                          <button
                            onClick={() => {
                              handleUpdateStatus(candidatura.idCandidatura, 'recusado');
                              setOpenDropdownId(null);
                            }}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-900/50 transition-colors"
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Recusar Candidatura
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderJobModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-2xl p-4 md:p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-xl border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          {selectedJob ? 'Editar Vaga' : 'Nova Vaga'}
        </h2>
        <form onSubmit={handleSubmitJob} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Título</label>
              <input
                type="text"
                value={formData.titulo}
                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Ex: Desenvolvedor Front-end"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Localização</label>
              <input
                type="text"
                value={formData.localizacao}
                onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Ex: São Paulo, SP ou Remoto"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">Descrição</label>
            <textarea
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              rows="3"
              placeholder="Descreva a vaga, o time, o desafio..."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">Requisitos</label>
            <textarea
              value={formData.requisitos}
              onChange={(e) => setFormData({ ...formData, requisitos: e.target.value })}
              className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              rows="2"
              placeholder="Liste os requisitos essenciais para a vaga"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Salário</label>
              <input
                type="text"
                value={formData.salario}
                onChange={(e) => setFormData({ ...formData, salario: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Ex: R$ 5.000,00"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Tipo de Contrato</label>
                <select
                  value={formData.tipoContrato}
                  onChange={(e) => setFormData({ ...formData, tipoContrato: e.target.value })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                >
                  <option value="CLT">CLT</option>
                  <option value="PJ">PJ</option>
                  <option value="Temporário">Temporário</option>
                  <option value="Estágio">Estágio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Modalidade</label>
                <select
                  value={formData.modalidade}
                  onChange={(e) => setFormData({ ...formData, modalidade: e.target.value })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                >
                  <option value="Presencial">Presencial</option>
                  <option value="Remoto">Remoto</option>
                  <option value="Híbrido">Híbrido</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Skills (Habilidades)</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.skills && formData.skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full flex items-center gap-1 border border-blue-800">
                    {skill}
                    <button type="button" className="ml-1 text-blue-400 hover:text-blue-300" onClick={() => setFormData({ ...formData, skills: formData.skills.filter((_, i) => i !== idx) })}>&times;</button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Digite e pressione Enter"
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const value = e.target.value.trim();
                    if (value && (!formData.skills || !formData.skills.includes(value))) {
                      setFormData({ ...formData, skills: [...(formData.skills || []), value] });
                      e.target.value = '';
                    }
                  }
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Benefícios</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.beneficios && formData.beneficios.map((b, idx) => (
                  <span key={idx} className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full flex items-center gap-1 border border-green-800">
                    {b}
                    <button type="button" className="ml-1 text-green-400 hover:text-green-300" onClick={() => setFormData({ ...formData, beneficios: formData.beneficios.filter((_, i) => i !== idx) })}>&times;</button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Digite e pressione Enter"
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const value = e.target.value.trim();
                    if (value && (!formData.beneficios || !formData.beneficios.includes(value))) {
                      setFormData({ ...formData, beneficios: [...(formData.beneficios || []), value] });
                      e.target.value = '';
                    }
                  }
                }}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={() => {
                setShowJobModal(false);
                setSelectedJob(null);
                setFormData({
                  titulo: '',
                  descricao: '',
                  requisitos: '',
                  salario: '',
                  tipoContrato: 'CLT',
                  modalidade: 'Presencial',
                  localizacao: '',
                  skills: [],
                  beneficios: []
                });
              }}
              className="px-5 py-2 text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="group relative px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg overflow-hidden font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
              <span className="relative">{selectedJob ? 'Salvar Alterações' : 'Publicar Vaga'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Informações da Empresa</h2>
        <button
          onClick={() => {
            setProfileFormData({
              ...companyData,
              endereco: {
                ...companyData.endereco,
                idEndereco: companyData.endereco?.idEndereco // garante que idEndereco está presente
              }
            });
            setShowProfileModal(true);
          }}
          className="group relative flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
          <PencilIcon className="h-5 w-5 mr-2 relative text-white" />
          <span className="relative text-white">Editar Perfil</span>
        </button>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-400">Nome da Empresa</p>
            <p className="text-lg font-medium text-white">{companyData?.nomeEmpresa}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">CNPJ</p>
            <p className="text-lg font-medium text-white">{companyData?.cnpj}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Email Corporativo</p>
            <p className="text-lg font-medium text-white">{companyData?.emailCorporativo}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Telefone</p>
            <p className="text-lg font-medium text-white">{companyData?.telefoneCorporativo}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Segmento</p>
            <p className="text-lg font-medium text-white">{companyData?.segmento}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Tamanho da Empresa</p>
            <p className="text-lg font-medium text-white">{companyData?.companySize}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">Endereço</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-400">CEP</p>
            <p className="text-lg font-medium text-white">{companyData?.endereco?.cep}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Logradouro</p>
            <p className="text-lg font-medium text-white">{companyData?.endereco?.logradouro}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Número</p>
            <p className="text-lg font-medium text-white">{companyData?.endereco?.numero}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Complemento</p>
            <p className="text-lg font-medium text-white">{companyData?.endereco?.complemento || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Bairro</p>
            <p className="text-lg font-medium text-white">{companyData?.endereco?.bairro}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Cidade/Estado</p>
            <p className="text-lg font-medium text-white">{`${companyData?.endereco?.cidade}/${companyData?.endereco?.estado}`}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-2xl p-4 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-white">Editar Perfil da Empresa</h2>
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Nome da Empresa</label>
              <input
                type="text"
                value={profileFormData.nomeEmpresa}
                onChange={(e) => setProfileFormData({ ...profileFormData, nomeEmpresa: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">CNPJ</label>
              <input
                type="text"
                value={profileFormData.cnpj}
                onChange={(e) => setProfileFormData({ ...profileFormData, cnpj: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Email Corporativo</label>
              <input
                type="email"
                value={profileFormData.emailCorporativo}
                onChange={(e) => setProfileFormData({ ...profileFormData, emailCorporativo: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Telefone</label>
              <input
                type="tel"
                value={profileFormData.telefoneCorporativo}
                onChange={(e) => setProfileFormData({ ...profileFormData, telefoneCorporativo: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Segmento</label>
              <input
                type="text"
                value={profileFormData.segmento}
                onChange={(e) => setProfileFormData({ ...profileFormData, segmento: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Tamanho da Empresa</label>
              <select
                value={profileFormData.companySize}
                onChange={(e) => setProfileFormData({ ...profileFormData, companySize: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              >
                <option value="">Selecione o tamanho</option>
                <option value="MEI (9 pessoa a 19 Funcionários)">MEI (9 pessoa a 19 Funcionários)</option>
                <option value="Pequena empresa (10 a 49 Funcionários)">Pequena empresa (10 a 49 Funcionários)</option>
                <option value="Média empresa (50 a 99 Funcionários)">Média empresa (50 a 99 Funcionários)</option>
                <option value="Grande empresa (100 ou mais Funcionários)">Grande empresa (100 ou mais Funcionários)</option>
              </select>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Endereço</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">CEP</label>
                <input
                  type="text"
                  value={profileFormData.endereco.cep}
                  onChange={(e) => setProfileFormData({
                    ...profileFormData,
                    endereco: { ...profileFormData.endereco, cep: e.target.value }
                  })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Logradouro</label>
                <input
                  type="text"
                  value={profileFormData.endereco.logradouro}
                  onChange={(e) => setProfileFormData({
                    ...profileFormData,
                    endereco: { ...profileFormData.endereco, logradouro: e.target.value }
                  })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Número</label>
                <input
                  type="text"
                  value={profileFormData.endereco.numero}
                  onChange={(e) => setProfileFormData({
                    ...profileFormData,
                    endereco: { ...profileFormData.endereco, numero: e.target.value }
                  })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Complemento</label>
                <input
                  type="text"
                  value={profileFormData.endereco.complemento}
                  onChange={(e) => setProfileFormData({
                    ...profileFormData,
                    endereco: { ...profileFormData.endereco, complemento: e.target.value }
                  })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Bairro</label>
                <input
                  type="text"
                  value={profileFormData.endereco.bairro}
                  onChange={(e) => setProfileFormData({
                    ...profileFormData,
                    endereco: { ...profileFormData.endereco, bairro: e.target.value }
                  })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Cidade</label>
                <input
                  type="text"
                  value={profileFormData.endereco.cidade}
                  onChange={(e) => setProfileFormData({
                    ...profileFormData,
                    endereco: { ...profileFormData.endereco, cidade: e.target.value }
                  })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Estado</label>
                <input
                  type="text"
                  value={profileFormData.endereco.estado}
                  onChange={(e) => setProfileFormData({
                    ...profileFormData,
                    endereco: { ...profileFormData.endereco, estado: e.target.value }
                  })}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={() => setShowProfileModal(false)}
              className="px-5 py-2 text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="group relative px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg overflow-hidden font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
              <span className="relative">Salvar Alterações</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-gray-900 shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BuildingIcon className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-white">{companyData?.nomeEmpresa}</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <LogOutIcon className="h-5 w-5 mr-2" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-4 p-4 bg-red-900/50 border border-red-500 text-red-300 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800">
          <div className="border-b border-gray-800">
            <nav className="flex -mb-px">
              {[
                { id: 'overview', label: 'Visão Geral' },
                { id: 'jobs', label: 'Vagas' },
                { id: 'candidates', label: 'Candidatos' },
                { id: 'profile', label: 'Perfil' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-500 text-blue-500'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6 bg-gray-900">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'jobs' && renderJobs()}
            {activeTab === 'candidates' && renderCandidates()}
            {activeTab === 'profile' && renderProfile()}
          </div>
        </div>
      </main>

      {showJobModal && renderJobModal()}
      {showProfileModal && renderProfileModal()}
    </div>
  );
}

export default DashboardCompany;