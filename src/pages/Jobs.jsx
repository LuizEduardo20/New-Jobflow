import { SearchIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import JobDetails from './JobDetails';

export function Jobs({ onNavigate }) {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const jobsPerPage = 6;

  useEffect(() => {
    // Carregar vagas do localStorage
    const storedJobs = localStorage.getItem('allJobs');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  const filteredJobs = jobs.filter(job => {
    const searchLower = searchTerm.toLowerCase();
    return (
      job.titulo.toLowerCase().includes(searchLower) ||
      job.empresa?.nomeEmpresa.toLowerCase().includes(searchLower) ||
      (job.descricao?.toLowerCase().includes(searchLower) || false) ||
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
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Vagas Disponíveis</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar vagas por título, empresa ou habilidades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {currentJobs.map((job) => (
            <div 
              key={job.idVaga} 
              className="group relative bg-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              <div className="relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{job.titulo}</h2>
                    <p className="text-gray-300 mb-2">{job.empresa?.nomeEmpresa}</p>
                    <p className="text-gray-400 mb-4">{job.localizacao}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills?.map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-900/50 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-400">R$ {job.salario}</span>
                </div>
                <p className="text-gray-300 mb-6">{job.descricao?.substring(0, 200)}...</p>
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                >
                  Ver Detalhes
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 1 
                    ? 'text-gray-600 cursor-not-allowed' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Anterior
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
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