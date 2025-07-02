import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin, DollarSign, FileText, Info, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function getStatusColor(status) {
  switch (status) {
    case 'Aprovado':
      return 'bg-green-900/50 text-green-300 border border-green-800';
    case 'Recusado':
      return 'bg-red-900/50 text-red-300 border border-red-800';
    case 'Pendente':
      return 'bg-yellow-900/50 text-yellow-300 border border-yellow-800';
    default:
      return 'bg-gray-800 text-gray-300 border border-gray-700';
  }
}

function getStatusIcon(status) {
  switch (status) {
    case 'Aprovado':
      return <CheckCircle className="h-5 w-5" />;
    case 'Recusado':
      return <XCircle className="h-5 w-5" />;
    case 'Pendente':
      return <Clock className="h-5 w-5" />;
    default:
      return null;
  }
}

function CandidateApplications({ onNavigate }) {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('candidateToken');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch('http://localhost:3001/api/candidaturas', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Falha ao carregar candidaturas');
        }

        const data = await response.json();
        setApplications(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Erro!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
          <h1 className="text-3xl font-bold text-white drop-shadow">Minhas Candidaturas</h1>
          <button
            onClick={() => {
              onNavigate('jobs');
              setIsMenuOpen(false);
            }}
            className="group relative flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
            <Briefcase className="h-5 w-5 mr-2 relative text-white" />
            <span className="relative text-white">Ver Vagas</span>
          </button>
        </div>

        {applications.length === 0 ? (
          <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-12 text-center">
            <p className="text-gray-400 text-lg">Você ainda não se candidatou a nenhuma vaga.</p>
            <button
              onClick={() => navigate('/jobs')}
              className="group relative mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
              <Briefcase className="h-5 w-5 mr-2 relative text-white" />
              <span className="relative text-white">Explorar Vagas</span>
            </button>
          </div>
        ) : (
          <div className="grid gap-8">
            {applications.map((application) => (
              <div key={application.idCandidatura} className="bg-gray-900 rounded-2xl shadow-lg border border-gray-800 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">{application.vaga.titulo}</h2>
                      <div className="flex items-center mt-1 text-blue-300">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{application.vaga.empresa.nomeEmpresa}</span>
                      </div>
                      <div className="mt-4">
                        <span className={`inline-flex items-center px-4 py-1 rounded-full text-base font-medium ${getStatusColor(application.status)}`}> 
                          {getStatusIcon(application.status)}
                          <span className="ml-2">{application.status}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm text-gray-400">Data da Candidatura</p>
                      <p className="text-white font-medium">
                        {new Date(application.dataCandidatura).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-gray-800 pt-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Detalhes da Vaga</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-400">Localização</p>
                        <p className="text-white">{application.vaga.localizacao}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Tipo de Contrato</p>
                        <p className="text-white">{application.vaga.tipoContrato}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Salário</p>
                        <p className="text-green-400 font-semibold">
                          {application.vaga.salario
                            ? `R$ ${application.vaga.salario.toLocaleString('pt-BR')}`
                            : 'A combinar'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Modalidade</p>
                        <p className="text-white">{application.vaga.modalidade}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CandidateApplications; 