import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-1 bg-green-500 ml-8 mr-8 mb-6" style={{ width: `${progress}%` }}></div>
  );
};

const DemoComponent5 = () => {
   const navigate = useNavigate();

  const handleContinue = () => {
   
    navigate("/spinner");
  };


  return (
    <>
    <div className=" mx-auto mt-2 p-4">
      <ProgressBar progress={70} />
    </div>
    <div className="flex flex-col justify-center items-center h-screen overflow-auto">
      {/* Container for Left and Right Sections */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-8"> 
          <img src="/cheerful.jpg" alt="Your " className="w-full" style={{ maxWidth: '700px' }} />
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">You're on your way</h1>
            {/* 5 Star SVG */}
            <div className="flex mt-10 justify-start">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-7 h-8 text-yellow-500 mb-2 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 1l2.5 6.5L18 7l-5 4.25L15 19l-6-5.25L4 19l1.5-5.25L1 7l5.5.5L10 1z" />
                </svg>
              ))}
            </div>
            {/* Quote */}
            <p className="italic text-center text-sm md:text-base mb-4">"Mathematics is not just about numbers and equations; it's about understanding patterns, uncovering hidden truths, and exploring the beauty of logic in the universe."</p>
            {/* Author */}
            <p className="italic">- Jacob S.</p>
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

export default DemoComponent5;
