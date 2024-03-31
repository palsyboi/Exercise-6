import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';

type FormData = {
  email: string;
  password: string;
};

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const router = useRouter(); 

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push('/home'); 
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("/images/soft.jpg")` }}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 dark:bg-gray-900">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-10">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-800 dark:text-white">Email Address</label>
            <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
            className={`w-full bg-gray-100 border border-sky-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
            focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500 ${errors.email && 'border-red-500'}`} 
            placeholder="name@gmail.com" required />
            {errors.email && <p className="text-sm text-red-500 mt-1">Email is required and must be valid</p>}
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" {...register('password', { required: true, minLength: 8 })} 
            placeholder="••••••••" className={`w-full bg--100 border border-sky-500 text-gray-900 sm:text-sm rounded-lg 
            focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password && 'border-red-500'}`} required />
            {errors.password && <p className="text-sm text-red-500 mt-1">Password is required and must be at least 8 characters</p>}
          </div>
          <button type="submit" className="w-full bg-blue-300 hover:bg-blue-400 focus:outline-none 
           font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-primary-600 
          dark:hover:bg-gray-800">
            Log In
          </button>
          <p className="text-sm text-white mt-2 text-center">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-white hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Index;
