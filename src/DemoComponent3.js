import React from 'react';

const NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-auto">
      {/* Container for Left and Right Sections */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-8"> {/* Added pr-4 for right padding */}
          <img src="/rightpath.jpg" alt="Your Image" className="w-full" style={{ maxWidth: '700px' }} />
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">You're in the right place</h1>
          <p className="text-base lg:text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.</p>
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center">
        <button className="py-3 px-6 bg-gray-800 text-white rounded mt-8">Continue</button>
      </div>
    </div>
  );
};

export default NextPage;
