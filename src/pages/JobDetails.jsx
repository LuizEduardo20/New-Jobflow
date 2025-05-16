import { ArrowLeft, Building2, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';

function JobDetails({ job, onBack, onApply }) {
  return (
    <div className="flex-1 bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para vagas
        </button>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <Building2 className="h-5 w-5 mr-2" />
                <span>{job.company}</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-green-600">R$ {job.salary}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{job.cidade}, {job.estado}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Briefcase className="h-5 w-5 mr-2" />
              <span>{job.tipo_contrato}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>{job.modalidade}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-5 w-5 mr-2" />
              <span>{job.status}</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Habilidades Requeridas</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills?.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Descrição da Vaga</h2>
            <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Requisitos</h2>
            <p className="text-gray-600 whitespace-pre-line">{job.requirements}</p>
          </div>

          {job.beneficios && job.beneficios.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefícios</h2>
              <ul className="list-disc list-inside text-gray-600">
                {job.beneficios.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={() => onApply(job)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Candidatar-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
