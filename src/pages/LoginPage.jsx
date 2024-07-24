import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import easebrainlogo from '../assets/easebrainlogo.png';
import BackgroundElements from '../components/BackgroundElements'; // Import the BackgroundElements component

// Define the validation schema using Zod
const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const LoginPage = () => {
  // Initialize React Hook Form with Zod resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  // Handle form submission
  const onSubmit = data => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUser({ name: data.name, email: data.email });
      navigate('/Homepage');
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <BackgroundElements /> {/* Add BackgroundElements component for background visuals */}
      <div className="relative bg-white bg-opacity-30 p-6 rounded-lg shadow-md w-full max-w-sm z-10">
        {/* Logo and navigation back to home */}
        <Link to="/">
          <img src={easebrainlogo} alt="EaseBrain Logo" className="mx-auto mb-6 w-40" />
        </Link>
        <Link to="/" className="absolute top-4 left-4 text-gray-500 hover:text-gray-700">
          ←
        </Link>
        <h1 className="text-2xl font-bold mb-6 text-black text-center">Login to EaseBrain</h1>
        {/* Login form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register('email')}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-white bg-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register('password')}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-white bg-opacity-50 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 bg-gradient-to-r from-[#DCB93E] to-[#8FC63F] text-white rounded-md transition duration-300 ${isLoading ? 'cursor-not-allowed opacity-50' : 'hover:from-[#8FC63F] hover:to-[#DCB93E]'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
          <button
            className="w-full px-4 py-2 mt-4 bg-black text-white rounded-md transition duration-300 hover:bg-gray-800"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
