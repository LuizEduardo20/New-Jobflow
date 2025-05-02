import { useState } from 'react';
import { Job } from '../pages/Jobs';
import JobDetails from '../pages/JobDetails';

interface JobsContentProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  appliedJobs: any[];
}

export default function JobsContent({ onBack, onNavigate, appliedJobs }: JobsContentProps) {
  const [applications, setApplications] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  React.useEffect(() => {
    const savedApplications = localStorage.getItem('userApplications');
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    }
  }, []);

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
      
      {applications.length === 0 ? (
        <p className="text-gray-600">Você ainda não se candidatou a nenhuma vaga.</p>
      ) : (
        <div className="grid gap-4">
          {applications.map((job, index) => (
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
          onNavigate={(page) => onNavigate(page)}
        />
      )}
    </div>
  );
} 