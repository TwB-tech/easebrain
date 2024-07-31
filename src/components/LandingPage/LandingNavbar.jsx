import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import easebrainlogo from '../../assets/easebrainlogo.png';

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full px-6 py-4 flex items-center sticky top-0 z-50 bg-white backdrop-blur-md" style={{ height: '60px' }}>
      <img
        src={easebrainlogo}
        alt="EaseBrain Logo"
        className="w-28 sm:w-32 md:w-36 lg:w-42" // Responsive logo size
      />
      <div className="flex-grow" /> {/* Space between logo and buttons */}
      <div className="hidden md:flex md:items-center md:space-x-4">
        {/* The buttons on desktop */}
        <Link
          to="/login"
          className="px-4 py-2 bg-gradient-to-r from-[#DCB93E] to-[#8FC63F] text-white rounded-md transition duration-300 hover:from-[#8FC63F] hover:to-[#DCB93E]"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-gradient-to-r from-white to-black text-white rounded-md transition duration-300 hover:from-black hover:to-white"
        >
          Register
        </Link>
        <Link
          to="/get-started"
          className="px-4 py-2 border-2 border-[#8FC63F] text-[#8FC63F] rounded-md transition duration-300 hover:bg-[#8FC63F] hover:text-white"
        >
          Get Started
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-full bg-white bg-opacity-90 shadow-lg md:hidden"
        >
          {/* The buttons in the dropdown menu */}
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Register
          </Link>
          <Link
            to="/get-started"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
