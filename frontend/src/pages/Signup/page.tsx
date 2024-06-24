// src/pages/Signup/page.tsx
import React, { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import Input from "../../components/Input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import InputErrorSpan from "../../components/Input/InputErrorSpan";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupFormData> = async (
    data: SignupFormData
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await axiosInstance.post("/signup", data);
      console.log(response.data.message); // Login successful
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <div className="p-8 rounded border border-divider w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <Input
              type="text"
              id="name"
              placeholder="Name"
              intent="default"
              scale="small"
              {...register("name", { required: "name is required" })}
            />
            {errors.name && (
              <InputErrorSpan>{errors.name.message}</InputErrorSpan>
            )}
          </div>
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
            {errors.email && (
              <InputErrorSpan>{errors.email.message}</InputErrorSpan>
            )}
          </div>
          <div className=" relative">
            <PasswordInput register={register} />
            {errors.password && (
              <InputErrorSpan>{errors.password.message}</InputErrorSpan>
            )}
          </div>
          <div className="h-6 relative">
            {loading && <InputErrorSpan>loggin in</InputErrorSpan>}
            {error && <InputErrorSpan>{error}</InputErrorSpan>}
            {success && <InputErrorSpan> Account created successfully</InputErrorSpan>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
