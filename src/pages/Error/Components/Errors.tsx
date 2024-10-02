import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  errorCode?: number;
  errorMessage?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-error bg-cover text-center p-6">
      <div>
      <h1 className="text-6xl font-bold text-slate-100 mb-4">404</h1>
      <p className="text-xl text-slate-100 mb-8">Page not found or something goes wrong, please try again another time.</p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-customYellow-900 text-slate-100 text-lg font-semibold rounded-md hover:bg-customYellow-700"
      >
       Back to home
      </button>
      </div>
      
    </div>
  );
};

export default ErrorPage;
