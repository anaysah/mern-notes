// src/pages/Signup/page.tsx
import React from 'react';
import PasswordInput from '../../components/Input/PasswordInput';
import Input from '../../components/Input/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputErrorSpan from '../../components/Input/InputErrorSpan';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Replace with your form submission logic
  };

  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <div className="p-8 rounded border border-divider w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <Input
              type="text"
              id="username"
              placeholder="Username"
              intent="default"
              scale="small"
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <InputErrorSpan>{errors.username.message}</InputErrorSpan>}
          </div>
          <div className="mb-4 relative">
            <Input
              type="email"
              id="email"
              placeholder="Email"
              intent="default"
              scale="small"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <InputErrorSpan>{errors.email.message}</InputErrorSpan>}
          </div>
          <div className="mb-6 relative">
            <PasswordInput 
            register={register}
            />
            {errors.password && <InputErrorSpan>{errors.password.message}</InputErrorSpan>}
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
