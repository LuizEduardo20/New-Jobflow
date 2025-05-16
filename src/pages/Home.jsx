function Home({ onNavigate }) {
  return (
    <div className="flex-1">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bem-vindo ao JobFlow
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Facilitando sua vida profissional
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => onNavigate?.('jobs')} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              Explorar Vagas
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Vagas em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Projeto Desenvolvido por Alunos do IFPI</h2>
              <p className="text-gray-600 mb-6">
                O JobFlow é um projeto inovador criado por estudantes talentosos do 
                Instituto Federal do Piauí (IFPI), demonstrando o potencial e a criatividade dos 
                futuros profissionais de tecnologia.
              </p>
              <a
                href="https://www.ifpi.edu.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block hover:bg-gray-800"
              >
                Conheça o IFPI
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80"
                alt="IFPI Campus"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-columns items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Impulsione sua carreira</h2>
              <p className="text-gray-300">
                Com o JobFlow, você tem acesso a um sistema completo de oportunidades profissionais, 
                cuidadosamente selecionadas e divulgadas diretamente pelas empresas do mercado. 
                Nossa plataforma conecta você com as melhores vagas, permitindo que você encontre 
                seu próximo desafio profissional. O JobFlow é seu parceiro ideal para impulsionar 
                sua trajetória profissional.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.('register')}
              className="bg-white text-gray-900 my-10 px-8 py-3 rounded-lg font-semibold hover:bg-gray-500"
            >
              Cadastre-se Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function JobCard({ title, company, location, description, onNavigate }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{company}</p>
      <p className="text-gray-500 mb-4">{location}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={() => onNavigate?.('jobs')}
        className="text-blue-600 font-semibold hover:text-blue-700"
      >
        Ver Detalhes
      </button>
    </div>
  );
}

export default Home;
