// src/pages/Login/page.tsx
import React, { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import Input from "../../components/Input/Input";
import { useForm, SubmitHandler } from "react-hook-form";

import InputErrorSpan from "../../components/Input/InputErrorSpan";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "new@a.com",
      password: "some password",
    },
  });

  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormData> = async (
    data: LoginFormData
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await axiosInstance.post("/login", data);
      console.log(response.data.message); // Login successful
      setSuccess(true);
      navigate("/");
      // Redirect or update state as needed
    } catch (error) {
      console.error("Login failed", error);
      setError(error.response.data.error);
      // Handle login failure
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <div className="p-8 rounded border border-divider w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <Input
              type="email"
              id="email"
              placeholder="Email"
              intent="default"
              scale="small"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <InputErrorSpan>{errors.email.message}</InputErrorSpan>}
          </div>
          <div className="relative">
            <PasswordInput register={register} />
            {errors.password && <InputErrorSpan>{errors.password.message}</InputErrorSpan>}
          </div>
          <div className="h-6 relative">
            {loading && <InputErrorSpan>loggin in</InputErrorSpan>}
            {error && <InputErrorSpan>{error}</InputErrorSpan>}
            {success && <InputErrorSpan>Login successful</InputErrorSpan>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;