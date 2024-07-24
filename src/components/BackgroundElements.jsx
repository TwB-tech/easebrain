import React from 'react';
import easebrainLogo from '../assets/easebrainnowordlogo.png';

const BackgroundElements = () => {
  // Background image positions
  const logoPositions = [
    { top: '5%', left: '5%' },
    { top: '5%', right: '5%' },
    { top: '50%', left: '5%', transform: 'translateY(-50%)' },
    { top: '50%', right: '5%', transform: 'translateY(-50%)' },
    { bottom: '5%', left: '5%' },
    { bottom: '5%', right: '5%' },
  ];

  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient background with mixed colors and 70% opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-white to-secondary opacity-70"></div>
      {/* Background logos */}
      <div className="absolute inset-0 flex justify-between items-center opacity-10">
        {logoPositions.map((position, index) => (
          <img
            key={index}
            src={easebrainLogo} // Use the imported logo image
            alt="Logo"
            className="m-6 w-24 h-24 sm:w-32 sm:h-32" // Make images responsive
            style={{
              position: 'absolute',
              ...position
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundElements;
