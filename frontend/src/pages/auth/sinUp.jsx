import React from 'react';
import SignUpForm from '../../component/auth/SignUpForm.jsx';

const SignUp = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-900 via-gray-900 to-neutral-700 ">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-200">
                        Créer un compte
                    </h2>
                    <p className="mt-2 text-center text-sm text-blue-100">
                        Ou{' '}
                        <a href="/auth/Login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            connectez-vous à votre compte existant
                        </a>
                    </p>
                </div>
                <SignUpForm/>
            </div>
        </div>
    );
};

export default SignUp;
