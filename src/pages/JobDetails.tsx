import { useState } from 'react';
import { ArrowLeftIcon, MapPinIcon } from 'lucide-react';
import { Job } from './Jobs';

interface JobDetailsProps {
  job: Job;
  onBack: () => void;
  onNavigate: (page: string) => void;
  onApply: (job: Job) => void;
}

export default function JobDetails({ job, onBack, onNavigate, onApply }: JobDetailsProps) {
  const [isApplying, setIsApplying] = useState(false);
  
  const handleApply = async () => {
    const isLoggedIn = localStorage.getItem('isUserLoggedIn');
    
    if (!isLoggedIn) {
      onNavigate('login');
      return;
    }

    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      
      if (!user.resume) {
        alert('Por favor, atualize seu perfil e adicione seu currículo antes de se candidatar.');
        onNavigate('profile');
        return;
      }

      setIsApplying(true);

      try {
        const applications = JSON.parse(localStorage.getItem('applications') || '[]');
        if (!applications.includes(job.company)) {
          applications.push(job.company);
          localStorage.setItem('applications', JSON.stringify(applications));
        }

        alert('Currículo enviado com sucesso!');
        onApply(job);
        onNavigate('profile');
      } catch (error) {
        console.error('Erro ao aplicar para a vaga:', error);
        alert('Erro ao se candidatar para a vaga. Tente novamente mais tarde.');
      } finally {
        setIsApplying(false);
      }
    }
  };

  return (
    <div className="flex-1 bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Voltar para vagas
        </button>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600 mb-2">{job.company}</p>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPinIcon className="h-5 w-5" />
                <span>
                  {job.cidade && job.estado 
                    ? `${job.cidade} - ${job.estado}`
                    : 'Localização não especificada'}
                </span>
              </div>
            </div>
            <span className="text-green-600 font-semibold text-xl">
              {job.salary ? `R$ ${job.salary}` : 'A combinar'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Tipo de Contrato</h3>
              <p className="text-gray-900 font-medium">{job.tipo_contrato || 'Não especificado'}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Modalidade</h3>
              <p className="text-gray-900 font-medium">{job.modalidade || 'Não especificado'}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {job.status || 'Aberta'}
              </span>
            </div>
          </div>

          {job.skills && job.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Habilidades Necessárias</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {job.description && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Descrição da Vaga</h2>
              <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
            </div>
          )}

          {job.requirements && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requisitos</h2>
              <p className="text-gray-600 whitespace-pre-line">{job.requirements}</p>
            </div>
          )}

          {job.beneficios && job.beneficios.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefícios</h2>
              <div className="flex flex-wrap gap-2">
                {job.beneficios.map((beneficio: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {beneficio}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleApply}
            disabled={isApplying}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isApplying ? 'Enviando currículo...' : 'Candidatar-se'}
          </button>
        </div>
      </div>
    </div>
  );
}
