import { BookmarkIcon, PlusIcon, XIcon, PencilIcon, MapPinIcon, PhoneIcon, MailIcon, BuildingIcon, LogOutIcon, UserIcon, BriefcaseIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Jobs } from './Jobs';

// Form field component
const FormField = ({ label, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {children}
  </div>
);

// Tag input component
const TagInput = ({ tags, onAdd, onRemove, placeholder, className }) => (
  <div>
    <input
      type="text"
      placeholder={placeholder}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const value = e.target.value.trim();
          if (value && !tags.includes(value)) {
            onAdd(value);
            e.target.value = '';
          }
        }
      }}
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
    />
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, index) => (
        <span key={index} className={`${className} px-3 py-1 rounded-full`}>
          {tag}
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="ml-2 hover:opacity-75"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  </div>
);

function Dashboard() {
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState('jobs');
  const [formData, setFormData] = useState({
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
  const [selectedJob, setSelectedJob] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null);

  useEffect(() => {
    const companyStr = localStorage.getItem('companyUser');
    if (companyStr) {
      const data = JSON.parse(companyStr);
      setCompanyData(data);
      setEditForm(data);
    }
  }, []);

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      let updatedJobs;
      if (selectedJob) {
        // Editar vaga existente
        updatedJobs = jobs.map(job =>
          job.id === selectedJob.id ? { ...selectedJob, ...formData } : job
        );
      } else {
        // Criar nova vaga
        const newJob = {
          id: Date.now(),
          ...formData,
          company: companyData?.name || 'Empresa',
          status: 'Aberta'
        };
        updatedJobs = [...jobs, newJob];
      }
      setJobs(updatedJobs);
      localStorage.setItem('jobs', JSON.stringify(updatedJobs));
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
      setSelectedJob(null);
    } catch (error) {
      console.error('Erro ao publicar vaga:', error);
      alert('Erro ao publicar a vaga. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteJob = (jobId) => {
    const updatedJobs = jobs.filter(job => job.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    setSelectedJob(null);
  };

  const handleSaveProfile = () => {
    if (editForm) {
      const companies = JSON.parse(localStorage.getItem('registeredCompanies') || '[]');
      const updatedCompanies = companies.map((company) =>
        company.id === editForm.id ? editForm : company
      );
      localStorage.setItem('registeredCompanies', JSON.stringify(updatedCompanies));
      localStorage.setItem('companyUser', JSON.stringify(editForm));
      setCompanyData(editForm);
      setIsEditing(false);
    }
  };

  const handleCepChange = (e) => {
    const value = e.target.value
    const formattedCep = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substring(0, 9)
    
    setEditForm(prev => ({ ...prev, cep: formattedCep }))
  }

  const buscarCep = async () => {
    if (editForm?.cep) {
      try {
        const cepLimpo = editForm.cep.replace(/\D/g, '')
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        const data = await response.json()
        
        if (!data.erro) {
          setEditForm(prev => ({
            ...prev,
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

  const renderCompanyProfile = () => {
    if (!companyData) return null;

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-900">Perfil da Empresa</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-600 hover:text-blue-700"
          >
            {isEditing ? 'Cancelar' : 'Editar Perfil'}
          </button>
        </div>

        {!isEditing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Informações da Empresa</h3>
                <div className="space-y-3">
                  {[
                    { icon: BuildingIcon, label: 'Nome', value: companyData.name },
                    { icon: BriefcaseIcon, label: 'CNPJ', value: companyData.cnpj },
                    { icon: MailIcon, label: 'Email', value: companyData.email },
                    { icon: PhoneIcon, label: 'Telefone', value: companyData.phone },
                    { icon: MapPinIcon, label: 'Localização', value: companyData.location },
                    { icon: MapPinIcon, label: 'CEP', value: companyData.cep },
                    { icon: MapPinIcon, label: 'Logradouro', value: companyData.logradouro },
                    { icon: MapPinIcon, label: 'Número', value: companyData.numero },
                    { icon: MapPinIcon, label: 'Cidade', value: companyData.cidade },
                    { icon: MapPinIcon, label: 'Estado', value: companyData.estado },
                    { icon: MapPinIcon, label: 'Bairro', value: companyData.bairro },
                    { icon: BriefcaseIcon, label: 'Segmento', value: companyData.segment },
                    { icon: BriefcaseIcon, label: 'Tamanho', value: companyData.companySize }
                  ].map((item, index) => (
                    <p key={index} className="flex items-center text-gray-700">
                      <item.icon className="h-5 w-5 mr-2 text-gray-500" />
                      <span className="font-medium mr-2">{item.label}:</span> {item.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSaveProfile} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Informações da Empresa</h3>
                {[
                  { label: 'Nome da Empresa', field: 'name' },
                  { label: 'CNPJ', field: 'cnpj', placeholder: '00.000.000/0000-00' },
                  { label: 'Segmento/Área de Atuação', field: 'segment', placeholder: 'Ex: Tecnologia, Saúde, Educação' },
                  { label: 'Email', field: 'email', type: 'email' },
                  { label: 'Telefone', field: 'phone', type: 'tel', placeholder: '(00) 0000-0000' }
                ].map(({ label, field, type = 'text', placeholder }) => (
                  <FormField key={field} label={label}>
                    <input
                      type={type}
                      value={editForm?.[field] || ''}
                      onChange={(e) => setEditForm({ ...editForm, [field]: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                      placeholder={placeholder}
                    />
                  </FormField>
                ))}
                <FormField label="Tamanho da Empresa">
                  <select
                    value={editForm?.companySize || ''}
                    onChange={(e) => setEditForm({ ...editForm, companySize: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Selecione o tamanho</option>
                    {[
                      'MEI (9 pessoa a 19 Funcionários)',
                      'Pequena empresa (10 a 49 Funcionários)',
                      'Média empresa (50 a 99 Funcionários)',
                      'Grande empresa (100 ou mais Funcionários)'
                    ].map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </FormField>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Endereço</h3>
                <FormField label="CEP">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editForm?.cep || ''}
                      onChange={handleCepChange}
                      placeholder="00000-000"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={buscarCep}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Buscar
                    </button>
                  </div>
                </FormField>
                {[
                  { label: 'Logradouro', field: 'logradouro' },
                  { label: 'Bairro', field: 'bairro' }
                ].map(({ label, field }) => (
                  <FormField key={field} label={label}>
                    <input
                      type="text"
                      value={editForm?.[field] || ''}
                      onChange={(e) => setEditForm({ ...editForm, [field]: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </FormField>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Número">
                    <input
                      type="text"
                      value={editForm?.numero || ''}
                      onChange={(e) => setEditForm({ ...editForm, numero: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                      placeholder="123"
                    />
                  </FormField>
                  <FormField label="Complemento">
                    <input
                      type="text"
                      value={editForm?.complemento || ''}
                      onChange={(e) => setEditForm({ ...editForm, complemento: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </FormField>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Cidade', field: 'cidade' },
                    { label: 'Estado', field: 'estado' }
                  ].map(({ label, field }) => (
                    <FormField key={field} label={label}>
                      <input
                        type="text"
                        value={editForm?.[field] || ''}
                        onChange={(e) => setEditForm({ ...editForm, [field]: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </FormField>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };

  const renderJobForm = () => {
    if (!showPublishModal) return null;

    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-lg w-full p-6 mt-2 mx-auto px-4 max-h-[90vh] overflow-y-auto shadow-xl">
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-white pb-4 z-10">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedJob ? 'Editar Vaga' : 'Criar Nova Vaga'}
            </h2>
            <button
              onClick={() => {
                setShowPublishModal(false);
                setSelectedJob(null);
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
              }}
              className="text-gray-400 hover:text-gray-500"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: 'Título da Vaga', field: 'title' },
              { label: 'Descrição', field: 'description', type: 'textarea' },
              { label: 'Requisitos', field: 'requirements', type: 'textarea' }
            ].map(({ label, field, type = 'text' }) => (
              <FormField key={field} label={label}>
                {type === 'textarea' ? (
                  <textarea
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    required={field !== 'requirements'}
                  />
                ) : (
                  <input
                    type={type}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                )}
              </FormField>
            ))}

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Cidade', field: 'cidade' },
                { label: 'Estado', field: 'estado' }
              ].map(({ label, field }) => (
                <FormField key={field} label={label}>
                  <input
                    type="text"
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </FormField>
              ))}
            </div>

            <FormField label="Salário">
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: R$ 3.000 - R$ 4.000"
              />
            </FormField>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: 'Tipo de Contrato',
                  field: 'tipo_contrato',
                  options: ['CLT', 'PJ', 'Temporário', 'Estágio']
                },
                {
                  label: 'Modalidade',
                  field: 'modalidade',
                  options: ['Presencial', 'Remoto', 'Híbrido']
                }
              ].map(({ label, field, options }) => (
                <FormField key={field} label={label}>
                  <select
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </FormField>
              ))}
            </div>

            <FormField label="Habilidades Requeridas">
              <TagInput
                tags={formData.skills}
                onAdd={(value) => setFormData({ ...formData, skills: [...formData.skills, value] })}
                onRemove={(index) => setFormData({ ...formData, skills: formData.skills.filter((_, i) => i !== index) })}
                placeholder="Digite uma habilidade e pressione Enter"
                className="bg-blue-100 text-blue-800"
              />
            </FormField>

            <FormField label="Benefícios">
              <TagInput
                tags={formData.beneficios}
                onAdd={(value) => setFormData({ ...formData, beneficios: [...formData.beneficios, value] })}
                onRemove={(index) => setFormData({ ...formData, beneficios: formData.beneficios.filter((_, i) => i !== index) })}
                placeholder="Digite um benefício e pressione Enter"
                className="bg-green-100 text-green-800"
              />
            </FormField>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => {
                  setShowPublishModal(false);
                  setSelectedJob(null);
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
                }}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Salvando...' : selectedJob ? 'Salvar Alterações' : 'Publicar Vaga'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button
            onClick={() => setShowPublishModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Criar Nova Vaga
            </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {[
                { id: 'jobs', label: 'Vagas Publicadas' },
                { id: 'applications', label: 'Candidaturas Recebidas' },
                { id: 'profile', label: 'Perfil da Empresa' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 text-sm font-medium ${
                    activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                  {tab.label}
                  </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'jobs' && (
              <div className="space-y-4">
                {jobs.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">
                    Nenhuma vaga publicada ainda.
                  </p>
                ) : (
                  jobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                    >
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                    </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedJob(job);
                            setFormData(job);
                            setShowPublishModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Editar
                        </button>
                          <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Excluir
                    </button>
                      </div>
                    </div>
                  ))
                )}
                </div>
            )}

            {activeTab === 'applications' && (
                    <div className="space-y-4">
                  <p className="text-gray-500 text-center py-4">
                    Nenhuma candidatura recebida ainda.
                  </p>
                  </div>
              )}

            {activeTab === 'profile' && renderCompanyProfile()}
          </div>
          </div>
      </div>

      {renderJobForm()}
    </div>
  );
}

export default Dashboard;
