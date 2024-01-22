import React, { useState } from 'react';
import Logo from '../Images/arc.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = (e) => {

   
    setTimeout(() => {
      navigate('/service-portfolio');
    }, 1000);
    e.preventDefault();
    //The sign-in logic goes here

    // Display success alert
    setShowAlert(true);

    // Simulating a delay to hide the alert after a few seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {showAlert && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-md shadow-md">
            Sign in successful!
          </div>
        )}
        <div className="text-center">
          <img src={Logo} alt="Logo" className="w-24 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Welcome back!</h2>
          <p className="text-gray-500">Sign in to your account</p>
        </div>
        <form className="mt-6">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
