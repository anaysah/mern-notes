// src/pages/Login/page.tsx
import React from 'react';
import PasswordInput from '../../components/Input/PasswordInput';

const Login: React.FC = () => {
  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <div className="p-8 rounded border border-divider w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            {/* <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label> */}
            <input
              type="email"
              id="email"
              className="bg-transparent w-full p-3 border border-divider rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            {/* <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label> */}
            <PasswordInput />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <p className='text-center mt-4'>Don't have an account? <a href="/register" className='text-blue-500 underline'>Register</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
