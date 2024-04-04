import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-1 bg-green-500 ml-8 mr-8 mb-6 " style={{ width: `${progress}%` }}></div>
  );
};

const DemoComponent3 = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {

    setProgress(60);
  }, []);
  const navigate = useNavigate();
  const handleContinue = () => {

    navigate("/DemoComponent4");
  };

  return (
    <>
      <div className=" mx-auto mt-2 p-4">
        <ProgressBar progress={progress} />
      </div>
      <div className="flex flex-col justify-center items-center h-screen overflow-auto">
        {/* Container for Left and Right Sections */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-8"> {/* Added pr-4 for right padding */}
            <img src="/rightpath.jpg" alt="Your " className="w-full" style={{ maxWidth: '700px' }} />
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">You're in the right place</h1>
            <p className="text-base lg:text-lg text-gray-600 mb-6">
Computer science mathematics encompasses discrete mathematics, linear algebra, calculus, and probability theory. </p>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center">
          <button  onClick={handleContinue} className="py-3 px-6 bg-gray-800 text-white rounded mt-8">Continue</button>
        </div>
      </div>
    </>
  );
};

export default DemoComponent3;
