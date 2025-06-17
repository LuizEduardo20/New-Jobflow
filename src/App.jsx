import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CandidateApplications from './pages/CandidateApplications';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isCandidateLoggedIn, setIsCandidateLoggedIn] = useState(false);
  const [isCompanyLoggedIn, setIsCompanyLoggedIn] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const candidateToken = localStorage.getItem('candidateToken');
    const companyToken = localStorage.getItem('companyToken');
    setIsCandidateLoggedIn(!!candidateToken);
    setIsCompanyLoggedIn(!!companyToken);
  }, []);

  const handleNavigate = (page) => {
    if (page === 'login') {
      setIsCandidateLoggedIn(false);
    } else if (page === 'profile') {
      const token = localStorage.getItem('candidateToken');
      if (!token) {
        setCurrentPage('login');
        return;
      }
    } else if (page === 'loginCompany') {
      const token = localStorage.getItem('companyToken');
      if (token) {
        setCurrentPage('dashboard');
        return;
      }
      setCurrentPage('login-company');
      return;
    } else if (page === 'registerCompany') {
      const token = localStorage.getItem('companyToken');
      if (token) {
        setCurrentPage('dashboard');
        return;
      }
      setCurrentPage('register-company');
      return;
    } else if (page === 'dashboard') {
      const token = localStorage.getItem('companyToken');
      if (!token) {
        setCurrentPage('login-company');
        return;
      }
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
        return isCandidateLoggedIn ? (
          <CandidateProfile onNavigate={handleNavigate} />
        ) : (
          <Login onNavigate={handleNavigate} />
        );
      case 'applications':
        return isCandidateLoggedIn ? (
          <CandidateApplications onNavigate={handleNavigate} />
        ) : (
          <Login onNavigate={handleNavigate} />
        );
      case 'login-company':
        return <LoginCompany onNavigate={handleNavigate} />;
      case 'register-company':
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
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar onNavigate={handleNavigate} />
        <div className="pt-16">
          {renderPage()}
        </div>
        <Footer onNavigate={handleNavigate} />
      </div>
    </Router>
  );
}

export default App;