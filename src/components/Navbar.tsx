import { useState } from 'react';
import { Menu, X, User, Briefcase, GraduationCap, Building } from 'lucide-react';

type NavbarProps = {
  onNavigate: (page: string) => void;
};

function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center space-x-2"
            >
              <Briefcase className="h-8 w-8" />
              <span className="text-xl font-bold">JobFlow</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('jobs')} 
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
            >
              <Briefcase className="h-5 w-5" />
              <span>Vagas</span>
            </button>
            <button 
              onClick={() => onNavigate('loginCompany')} 
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
            >
              <Building className="h-5 w-5" />
              <span>Área da Empresa</span>
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
            >
              <User className="h-5 w-5" />
              <span>Perfil</span>
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <button
            onClick={() => {
              onNavigate('jobs');
              setIsMenuOpen(false);
            }}
            className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            <Briefcase className="h-5 w-5 mr-2" />
            Vagas
          </button>
          <button
            onClick={() => {
              onNavigate('courses');
              setIsMenuOpen(false);
            }}
            className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            <GraduationCap className="h-5 w-5 mr-2" />
            Cursos
          </button>
          <button
            onClick={() => {
              onNavigate('loginCompany');
              setIsMenuOpen(false);
            }}
            className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            <Building className="h-5 w-5 mr-2" />
            Área da Empresa
          </button>
          <button
            onClick={() => {
              onNavigate('profile');
              setIsMenuOpen(false);
            }}
            className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            <User className="h-5 w-5 mr-2" />
            Perfil
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
