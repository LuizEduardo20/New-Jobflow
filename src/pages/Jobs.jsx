import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import JobDetails from './JobDetails';

const defaultJobs = [
  {
    id: "1",
    title: "Vendedor",
    company: "Magazine Center",
    cidade: "São Paulo",
    estado: "SP",
    salary: " 2-3k",
    description: "Procuramos vendedor com experiência em vendas de varejo e atendimento ao cliente...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Presencial",
    skills: ["Vendas", "Atendimento", "Proatividade"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "2",
    title: "Desenvolvedor Frontend",
    company: "Digital Innovation Corp",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    salary: " 6-9k",
    description: "Procuramos desenvolvedor frontend para criar interfaces modernas e responsivas...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Híbrido",
    skills: ["React", "JavaScript", "CSS"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "3",
    title: "Marketing Digital",
    company: "Agência Pulse",
    cidade: "Remoto",
    estado: "",
    salary: " 4-6k",
    description: "Especialista em marketing digital para gerenciar campanhas e redes sociais...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Remoto",
    skills: ["Social Media", "Analytics", "SEO"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "4",
    title: "Analista Financeiro",
    company: "Banco NextGen",
    cidade: "São Paulo",
    estado: "SP",
    salary: " 5-7k",
    description: "Analista financeiro para gestão de relatórios e análise de dados bancários...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Híbrido",
    skills: ["Excel", "Power BI", "SQL"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "5",
    title: "Designer UX/UI",
    company: "Creative Tech",
    cidade: "Florianópolis",
    estado: "SC",
    salary: " 7-10k",
    description: "Designer para criar experiências digitais inovadoras e interfaces intuitivas...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Remoto",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "6",
    title: "Gerente de Projetos",
    company: "Consultoria Inova",
    cidade: "Belo Horizonte",
    estado: "MG",
    salary: " 8-12k",
    description: "Gerente de projetos com experiência em metodologias ágeis...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Presencial",
    skills: ["Scrum", "Jira", "Liderança"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "7",
    title: "Analista de Dados",
    company: "Data Solutions",
    cidade: "Porto Alegre",
    estado: "RS",
    salary: " 6-8k",
    description: "Analista para trabalhar com big data e business intelligence...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Híbrido",
    skills: ["Python", "SQL", "Tableau"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "8",
    title: "Recepcionista",
    company: "Hospital Central",
    cidade: "Curitiba",
    estado: "PR",
    salary: " 2-3k",
    description: "Recepcionista para atendimento em hospital, turno integral...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Presencial",
    skills: ["Atendimento", "Organização", "Pacote Office"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "9",
    title: "DevOps Engineer",
    company: "Cloud Tech",
    cidade: "Recife",
    estado: "PE",
    salary: " 9-13k",
    description: "Engenheiro DevOps para automatização e gestão de infraestrutura...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Remoto",
    skills: ["AWS", "Docker", "Jenkins"],
    beneficios: [],
    status: "Aberta"
  },
  {
    id: "10",
    title: "Assistente Administrativo",
    company: "Grupo Empresarial",
    cidade: "Brasília",
    estado: "DF",
    salary: " 2.5-3.5k",
    description: "Assistente para rotinas administrativas e suporte à gestão...",
    requirements: "",
    tipo_contrato: "CLT",
    modalidade: "Presencial",
    skills: ["Excel", "Organização", "Comunicação"],
    beneficios: [],
    status: "Aberta"
  }
];

export function Jobs({ onNavigate }) {
  const [jobs, setJobs] = useState(defaultJobs);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const jobsPerPage = 6;

  const filteredJobs = jobs.filter(job => {
    const searchLower = searchTerm.toLowerCase();
    return (
      job.title.toLowerCase().includes(searchLower) ||
      job.company.toLowerCase().includes(searchLower) ||
      (job.description?.toLowerCase().includes(searchLower) || false) ||
      (job.skills?.some(skill => skill.toLowerCase().includes(searchLower)) || false)
    );
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  if (selectedJob) {
    return (
      <JobDetails 
        job={selectedJob} 
        onBack={() => setSelectedJob(null)}
        onNavigate={onNavigate}
        onApply={(job) => {
          setSelectedJob(null);
          onNavigate('applications');
        }}
      />
    );
  }

  return (
    <div className="flex-1 bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Vagas Disponíveis</h1>
        </div>

        <div className="mb-8">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar vagas por título, empresa ou habilidades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {currentJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h2>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <p className="text-gray-500 mb-4">{job.cidade}, {job.estado}</p>
                  <div className="flex gap-2 mb-4">
                    {job.skills?.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-green-600 font-semibold">R$ {job.salary}</span>
              </div>
              <p className="text-gray-600 mb-4">{job.description?.substring(0, 200)}...</p>
              <button 
                onClick={() => setSelectedJob(job)}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Anterior
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'hover:bg-gray-100'
                }`}
              >
                Próxima
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}