// src/pages/Signup/page.tsx
import React from 'react';
import PasswordInput from '../../components/Input/PasswordInput';
import Input from '../../components/Input/Input';

const Signup: React.FC = () => {
  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <div className="p-8 rounded border border-divider w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <Input type="text" id="username" placeholder="Username" intent="default" scale="small"/>
          </div>
          <div className="mb-4">
            <Input type="email" id="email" placeholder="Email" intent="default" scale="small"/>
          </div>
          <div className="mb-6">
            <PasswordInput />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
          <p className='text-center mt-4'>Already have an account? <a href="/login" className='text-blue-500 underline'>Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
