import React from 'react';
import LoginForm from '../component/LoginForm';
import Navbar from '../component/NavBar';
const Login = () => {
  return (
     
<div>
  <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Connexion à votre compte
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{' '}
            <a href="/signUp" className="font-medium text-indigo-600 hover:text-indigo-500">
              créez un nouveau compte
            </a>
          </p>
        </div>
        <LoginForm/>
      </div>
    </div>
  
    </div>
  );
};

export default Login;
