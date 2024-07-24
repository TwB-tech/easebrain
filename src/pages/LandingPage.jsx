import React from 'react';
import { Link } from 'react-router-dom';
import easebrainlogo from '../assets/easebrainlogo.png';
import BackgroundElements from '../components/BackgroundElements'; // Import the BackgroundElements component

const LandingPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <BackgroundElements /> {/* Add BackgroundElements component for background visuals */}
      <img src={easebrainlogo} alt="EaseBrain Logo" className="w-48 mb-8 z-10" />
      <h1 className="text-4xl font-bold mb-8 text-black text-center z-10">Welcome to EaseBrain</h1>
      <div className="space-y-4 w-full max-w-xs z-10">
        {/* Login button with gradient background */}
        <Link
          to="/login"
          className="block w-full px-4 py-2 bg-gradient-to-r from-[#DCB93E] to-[#8FC63F] text-white rounded-md text-center transition duration-300 hover:from-[#8FC63F] hover:to-[#DCB93E]"
        >
          Login
        </Link>
        {/* Register button with gradient background */}
        <Link
          to="/register"
          className="block w-full px-4 py-2 bg-gradient-to-r from-white to-black text-white shadow-md rounded-md text-center transition duration-300 hover:from-black hover:to-white"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
