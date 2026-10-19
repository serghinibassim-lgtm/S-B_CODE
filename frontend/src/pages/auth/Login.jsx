import React from 'react';
import LoginForm from '../../component/auth/LoginForm.jsx';
import ThemeToggle from '../../component/ThemeToggle.jsx';

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-950">
      <ThemeToggle className="absolute top-4 right-4 z-50" />

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-200">
            Connexion à votre compte
          </h2>
          <p className="mt-2 text-center text-sm text-blue-100">
            Ou{' '}
            <a href="/signup" className="font-medium text-blue-400 hover:text-blue-300">
              créez un nouveau compte
            </a>
          </p>
        </div>
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;
