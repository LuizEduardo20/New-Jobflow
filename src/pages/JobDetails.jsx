import React, { useState } from 'react';
import { ArrowLeft, Building2, MapPin, Briefcase, Clock, DollarSign, Loader2 } from 'lucide-react';

function JobDetails({ job, onBack, onNavigate }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onApply = async (job) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('candidateToken');
      if (!token) {
        onNavigate('login');
        return;
      }

      const response = await fetch('http://localhost:3001/api/candidaturas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ idVaga: job.idVaga })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Erro ao se candidatar');
      }

      setShowSuccess(true);
      setTimeout(() => {
        onNavigate('applications');
      }, 2000);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="group flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Voltar para vagas
        </button>

        {showSuccess ? (
          <div className="relative bg-green-900/50 border border-green-500 text-green-300 px-6 py-4 rounded-xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl"></div>
            <div className="relative">
              <p className="font-medium text-lg">Candidatura realizada com sucesso!</p>
              <p className="text-sm mt-1">Redirecionando para suas candidaturas...</p>
            </div>
          </div>
        ) : (
          <div className="relative bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-3">{job.titulo}</h1>
                  <div className="flex items-center text-gray-300">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span>{job.empresa?.nomeEmpresa}</span>
                  </div>
                </div>
                <span className="text-3xl font-bold text-green-400">R$ {job.salario}</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center text-gray-300 bg-gray-700/50 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                  <span>{job.localizacao}</span>
                </div>
                <div className="flex items-center text-gray-300 bg-gray-700/50 p-3 rounded-lg">
                  <Briefcase className="h-5 w-5 mr-2 text-blue-400" />
                  <span>{job.tipoContrato}</span>
                </div>
                <div className="flex items-center text-gray-300 bg-gray-700/50 p-3 rounded-lg">
                  <Clock className="h-5 w-5 mr-2 text-blue-400" />
                  <span>{job.modalidade}</span>
                </div>
                <div className="flex items-center text-gray-300 bg-gray-700/50 p-3 rounded-lg">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-400" />
                  <span>{job.status}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Habilidades Requeridas</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills?.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full border border-blue-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Descrição da Vaga</h2>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">{job.descricao}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Requisitos</h2>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">{job.requisitos}</p>
              </div>

              {job.beneficios && job.beneficios.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Benefícios</h2>
                  <ul className="space-y-2">
                    {job.beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => onApply(job)}
                  disabled={isLoading}
                  className={`group relative px-8 py-3 rounded-xl font-semibold overflow-hidden ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="relative flex items-center text-white">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      'Candidatar-se'
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobDetails;
