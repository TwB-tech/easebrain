import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-image.jpg';
import emergencyServiceImage from '../../assets/emergency-service.jpg'; 

const Hero = () => {
  // inline styles for glowing text with animation
  const glowTextStyle = {
    textShadow: `
      0 0 1px rgba(220, 185, 62, 0.7), /* Glow effect color 1 with reduced opacity */
      0 0 2px rgba(220, 185, 62, 0.7), /* Glow effect color 2 with reduced opacity */
      0 0 3px rgba(220, 185, 62, 0.5), /* Glow effect color 3 with reduced opacity */
      0 0 4px rgba(143, 198, 63, 0.5), /* Glow effect color 4 with reduced opacity */
      0 0 6px rgba(143, 198, 63, 0.3), /* Glow effect color 5 with reduced opacity */
      0 0 8px rgba(143, 198, 63, 0.2)  /* Glow effect color 6 with reduced opacity */
    `,
    animation: 'pulse 2s infinite' // Apply animation
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mental Health Awareness"
          className="object-cover w-full h-full opacity-50"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center p-6 bg-gradient-to-t from-gray-800 via-transparent to-transparent rounded-lg">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" style={glowTextStyle}>
          <span className="text-white">Prioritize </span>
          <span className="text-[#8FC63F]">Your <br />Mental Health </span>
          <span className="text-white">with </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DCB93E] to-[#8FC63F]">EaseBrain</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-white">
          Our platform offers immediate access to professional help, ensuring that you can get the support you need, exactly when you need it. Whether you're facing a crisis or looking for long-term care, EaseBrain is here for you.
        </p>
        <Link
          to="/get-started"
          className="px-6 py-3 bg-gradient-to-r from-[#DCB93E] to-[#8FC63F] text-white rounded-lg text-xl font-semibold transition duration-300 hover:from-[#8FC63F] hover:to-[#DCB93E]"
        >
          Get Started
        </Link>
        <div className="mt-12 flex flex-col items-center">
          <img
            src={emergencyServiceImage}
            alt="Emergency Services"
            className="w-64 md:w-80 mx-auto rounded-lg shadow-md opacity-40" /* Increased transparency */
          />
          <p className="mt-4 text-md sm:text-lg text-gray-200 text-center">
            Our emergency services are available 24/7, providing you with instant access to professionals who can guide you through challenging times.
          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes pulse {
            0% {
              text-shadow: 
                0 0 1px rgba(220, 185, 62, 0.7),
                0 0 2px rgba(220, 185, 62, 0.7),
                0 0 3px rgba(220, 185, 62, 0.5),
                0 0 4px rgba(143, 198, 63, 0.5),
                0 0 6px rgba(143, 198, 63, 0.3),
                0 0 8px rgba(143, 198, 63, 0.2);
            }
            50% {
              text-shadow: 
                0 0 2px rgba(220, 185, 62, 0.7),
                0 0 4px rgba(220, 185, 62, 0.7),
                0 0 6px rgba(220, 185, 62, 0.5),
                0 0 8px rgba(143, 198, 63, 0.5),
                0 0 12px rgba(143, 198, 63, 0.3),
                0 0 16px rgba(143, 198, 63, 0.2);
            }
            100% {
              text-shadow: 
                0 0 1px rgba(220, 185, 62, 0.7),
                0 0 2px rgba(220, 185, 62, 0.7),
                0 0 3px rgba(220, 185, 62, 0.5),
                0 0 4px rgba(143, 198, 63, 0.5),
                0 0 6px rgba(143, 198, 63, 0.3),
                0 0 8px rgba(143, 198, 63, 0.2);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;