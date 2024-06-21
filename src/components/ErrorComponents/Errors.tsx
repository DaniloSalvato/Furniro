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
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <img className='w-4/5 md:w-1/3'
       src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/poltrona.png" alt="fire" />
      <div>
      <h1 className="text-6xl font-bold text-customBlack-500 mb-4">404</h1>
      <p className="text-xl text-customBlack-700 mb-8">Page not found or something goes wrong, please try again another time.</p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-customYellow-900 text-white text-lg font-semibold rounded-md hover:bg-customYellow-700"
      >
       Back to home
      </button>
      </div>
      
    </div>
  );
};

export default ErrorPage;
