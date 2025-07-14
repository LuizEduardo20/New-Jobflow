function Home({ onNavigate }) {
  return (
    <div className="flex-1">
      <section className="relative bg-black py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            New JobFlow
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Facilitando sua vida profissional com tecnologia e inovação
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => onNavigate?.('jobs')} 
              className="group relative px-8 py-4 bg-blue-600 rounded-xl font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:scale-110 transition-transform duration-300"></div>
              <span className="relative text-white">Explorar Vagas</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Vagas em Destaque</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <JobCard
              title="Desenvolvedor Front-end"
              company="Empresa XYZ"
              location="São Paulo, SP"
              description="Buscamos um desenvolvedor Front-end experiente em React e TypeScript."
              onNavigate={onNavigate}
            />
            <JobCard
              title="UX Designer"
              company="Empresa ABC"
              location="Rio de Janeiro, RJ"
              description="Procuramos um UX Designer criativo para liderar projetos inovadores."
              onNavigate={onNavigate}
            />
            <JobCard
              title="Analista de Dados"
              company="Empresa 123"
              location="Belo Horizonte, MG"
              description="Oportunidade para analista de dados com experiência em Big Data e BI."
              onNavigate={onNavigate}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-gray-800 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-white">Projeto Desenvolvido por Alunos do IFPI</h2>
                <p className="text-gray-300 mb-8">
                  O New JobFlow é um projeto inovador criado por estudantes talentosos do 
                  Instituto Federal do Piauí (IFPI), demonstrando o potencial e a criatividade dos 
                  futuros profissionais de tecnologia.
                </p>
                <a
                  href="https://www.ifpi.edu.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  Conheça o IFPI
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80"
                alt="IFPI Campus"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-800 rounded-2xl p-12 text-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
            <h2 className="text-3xl font-bold mb-6 text-white">Impulsione sua carreira</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Com o New JobFlow, você tem acesso a um sistema completo de oportunidades profissionais, 
              cuidadosamente selecionadas e divulgadas diretamente pelas empresas do mercado. 
              Nossa plataforma conecta você com as melhores vagas, permitindo que você encontre 
              seu próximo desafio profissional. O New JobFlow é seu parceiro ideal para impulsionar 
              sua trajetória profissional.
            </p>
            <button
              onClick={() => onNavigate?.('register')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative text-white">Cadastre-se Agora</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function JobCard({ title, company, location, description, onNavigate }) {
  return (
    <div className="group relative bg-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
      <div className="relative">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-2">{company}</p>
        <p className="text-gray-400 mb-4">{location}</p>
        <p className="text-gray-300 mb-6">{description}</p>
        <button
          onClick={() => onNavigate?.('jobs')}
          className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center"
        >
          Ver Detalhes
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
