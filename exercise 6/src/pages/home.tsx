import React from 'react';
import { useRouter } from 'next/router'; 

const Home = () => {
  const router = useRouter(); 

  const handleLogout = () => {
    router.push('/'); 
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url("/images/assignment.jpg")` }}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white mb-6 text-center">Welcome User!</h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">Tapos naka ba sa imo Activity og assignment? edi gawin muna para hindi naka magkabalaka sa imo kinabuhi</p>
        <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-800 focus:outline-none 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
          Logout
        </button>
      </div>
    </section>
  );
};

export default Home;

