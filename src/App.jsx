import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Jobs } from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import CandidateProfile from './pages/CandidateProfile';
import LoginCompany from './pages/LoginCompany';
import RegisterCompany from './pages/RegisterCompany';
import JobsContent from './pages/JobsContent';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isUserLoggedIn');
    setIsLoggedIn(!!userLoggedIn);
  }, []);

  const handleNavigate = (page) => {
    if (page === 'login') {
      setIsLoggedIn(false);
    } else if (page === 'profile') {
      const userLoggedIn = localStorage.getItem('isUserLoggedIn');
      if (!userLoggedIn) {
        setCurrentPage('login');
        return;
      }
    } else if (page === 'dashboard') {
      const userLoggedIn = localStorage.getItem('isUserLoggedIn');
      setIsLoggedIn(!!userLoggedIn);
    }
    setCurrentPage(page);
  };

  const handleJobApplication = (job) => {
    setAppliedJobs(prev => [...prev, job]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'jobs':
        return selectedJob ? (
          <JobDetails 
            job={selectedJob} 
            onBack={() => setSelectedJob(null)} 
            onNavigate={handleNavigate}
            onApply={handleJobApplication}
          />
        ) : (
          <Jobs 
            onSelectJob={setSelectedJob} 
            onNavigate={handleNavigate} 
          />
        );
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      case 'register':
        return <Register onNavigate={handleNavigate} />;
      case 'profile':
        return isLoggedIn ? (
          <CandidateProfile onNavigate={handleNavigate} />
        ) : (
          <Login onNavigate={handleNavigate} />
        );
      case 'loginCompany':
        return <LoginCompany onNavigate={handleNavigate} />;
      case 'registerCompany':
        return <RegisterCompany onNavigate={handleNavigate} />;
      case 'jobscontent':
        return <JobsContent 
          onBack={() => handleNavigate('jobs')} 
          onNavigate={handleNavigate}
          appliedJobs={appliedJobs}
        />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      <div className="pt-16">
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;