import React, { useState } from 'react';
import { Menu, X, User, Briefcase, Building, LogOut } from 'lucide-react';

function Navbar({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('candidateToken') || localStorage.getItem('companyToken');

  const handleLogout = () => {
    localStorage.removeItem('candidateToken');
    localStorage.removeItem('companyToken');
    localStorage.removeItem('candidateData');
    localStorage.removeItem('companyData');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isCompanyLoggedIn');
    onNavigate('home');
  };

  return (
    <nav className="bg-black shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center space-x-2 group"
            >
              <Briefcase className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">New JobFlow</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('jobs')} 
              className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors"
            >
              <Briefcase className="h-5 w-5" />
              <span>Vagas</span>
            </button>
            <button 
              onClick={() => onNavigate('loginCompany')} 
              className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors"
            >
              <Building className="h-5 w-5" />
              <span>Área da Empresa</span>
            </button>
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => onNavigate('profile')}
                  className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span>Perfil</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Entrar</span>
              </button>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 transition-colors"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
          <button
            onClick={() => {
              onNavigate('jobs');
              setIsMenuOpen(false);
            }}
            className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 transition-colors"
          >
            <Briefcase className="h-5 w-5 mr-2" />
            Vagas
          </button>
          <button
            onClick={() => {
              onNavigate('loginCompany');
              setIsMenuOpen(false);
            }}
            className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 transition-colors"
          >
            <Building className="h-5 w-5 mr-2" />
            Área da Empresa
          </button>
          {isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  onNavigate('profile');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 transition-colors"
              >
                <User className="h-5 w-5 mr-2" />
                Perfil
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 transition-colors"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sair
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                onNavigate('login');
                setIsMenuOpen(false);
              }}
              className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 transition-colors"
            >
              <User className="h-5 w-5 mr-2" />
              Entrar
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;