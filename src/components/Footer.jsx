import React from 'react';
import { BriefcaseIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

function Footer({ onNavigate }) {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
              <BriefcaseIcon className="h-8 w-8" />
              <span className="text-xl font-bold">New JobFlow</span>
            </button>
            <p className="mt-2 text-gray-400">
              Conectando talentos às melhores oportunidades
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('jobs')} className="text-gray-400 hover:text-white">Vagas</button></li>
              <li><button className="text-gray-400 hover:text-white">Sobre Nós</button></li>
              <li><button className="text-gray-400 hover:text-white">Contato</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-400 hover:text-white">Blog</button></li>
              <li><button className="text-gray-400 hover:text-white">FAQ</button></li>
              <li><a href="https://www.ifpi.edu.br/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">IFPI</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} New JobFlow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;