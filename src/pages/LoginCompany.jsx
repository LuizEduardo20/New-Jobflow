import React, { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';

function LoginCompany({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      onNavigate('dashboard');
    }
  }, [onNavigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/auth/empresa/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao fazer login');
      }

      localStorage.setItem('companyToken', data.token);
      localStorage.setItem('companyData', JSON.stringify(data.empresa));
      localStorage.setItem('isCompanyLoggedIn', 'true');

      onNavigate('dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Building2 className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-white">
          Login de Empresa
        </h2>
        <p className="mt-2 text-center text-gray-400">
          Ou{' '}
          <button 
            onClick={() => onNavigate('register-company')}
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Registrar Empresa
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-900 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Corporativo
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-300">
                Senha
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  required
                  value={formData.senha}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="text-sm">
                <button
                  type="button"
                  onClick={() => onNavigate('register-company')}
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Registrar Empresa
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                <span className="relative">{isLoading ? 'Entrando...' : 'Entrar'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginCompany;