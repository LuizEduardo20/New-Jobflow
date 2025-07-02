import { useState } from 'react';
import JobDetails from '../pages/JobDetails';

export default function JobsContent({ onBack, onNavigate, appliedJobs }) {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <span className="mr-2">←</span> Voltar
        </button>
      </div>
      
      <h1 className="text-2xl font-bold mb-6">Minhas Candidaturas</h1>
      
      {appliedJobs.length === 0 ? (
        <p className="text-gray-600">Você ainda não se candidatou a nenhuma vaga.</p>
      ) : (
        <div className="grid gap-4">
          {appliedJobs.map((job, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500 mt-2">
                {job.cidade && job.estado ? `${job.cidade} - ${job.estado}` : 'Localização não especificada'}
              </p>
              <div className="mt-3">
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  Candidatura enviada
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedJob && (
        <JobDetails 
          job={selectedJob}
          onBack={() => setSelectedJob(null)}
          onNavigate={onNavigate}
          onApply={() => {
            setSelectedJob(null);
            onNavigate('applications');
          }}
        />
      )}
    </div>
  );
} 