import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, X, AlertCircle } from 'lucide-react';

const ApplyButton = ({ vagaId }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleApply = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const token = localStorage.getItem('candidateToken');
      if (!token) {
        navigate('/login-candidate');
        return;
      }

      const response = await fetch('http://localhost:3001/api/candidaturas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ vagaId })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Erro ao se candidatar à vaga');
      }

      setSuccess(true);
      
      // Atualizar a lista de candidaturas no perfil do candidato
      const candidaturasResponse = await fetch('http://localhost:3001/api/candidatos/me/candidaturas', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (candidaturasResponse.ok) {
        const candidaturasData = await candidaturasResponse.json();
        // Atualizar o estado global ou local storage com as novas candidaturas
        localStorage.setItem('candidaturas', JSON.stringify(candidaturasData));
      }

      // Redirecionar para a página de candidaturas após 2 segundos
      setTimeout(() => {
        navigate('/candidate-applications');
      }, 2000);

    } catch (error) {
      console.error('Erro ao se candidatar:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
        <CheckCircle className="h-5 w-5" />
        <span>Candidatura enviada com sucesso!</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg">
        <X className="h-5 w-5" />
        <span>{error}</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleApply}
      disabled={loading}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-colors ${
        loading
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {loading ? (
        <>
          <AlertCircle className="h-5 w-5 animate-spin" />
          <span>Enviando candidatura...</span>
        </>
      ) : (
        <>
          <CheckCircle className="h-5 w-5" />
          <span>Candidatar-se</span>
        </>
      )}
    </button>
  );
};

export default ApplyButton; 