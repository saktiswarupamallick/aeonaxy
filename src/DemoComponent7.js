import React from 'react';

const NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Main Heading and Subheading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Main Heading</h1>
        <p className="text-lg text-gray-600">Subheading</p>
      </div>
      
      {/* Two Rectangular Boxes */}
      <div className="flex justify-center gap-8">
        {/* Box 1 */}
        <div className="flex items-center bg-white border rounded-lg p-4">
          <div className="w-1/2">
            <h2 className="text-lg font-bold mb-1">Box 1 Main Heading</h2>
            <p className="text-md text-gray-600">Box 1 Subheading</p>
          </div>
          <div className="w-1/2">
            <img src="/image1.jpg" alt="Image 1" className="w-full h-auto" />
          </div>
        </div>
        
        {/* Box 2 */}
        <div className="flex items-center bg-white border rounded-lg p-4">
          <div className="w-1/2">
            <h2 className="text-lg font-bold mb-1">Box 2 Main Heading</h2>
            <p className="text-md text-gray-600">Box 2 Subheading</p>
          </div>
          <div className="w-1/2">
            <img src="/image2.jpg" alt="Image 2" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextPage;
