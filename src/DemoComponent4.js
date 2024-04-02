import React from 'react';

const NextPage = () => {
  // Define an array of objects containing content for each box
  const boxContents = [
    {
      imgSrc: "/algebra.png",
      mainHeading: "Arithmetic",
      subHeading: "Introductory"
    },
    {
      imgSrc: "/arithmetic.png",
      mainHeading: "Basic Algebra",
      subHeading: "Foundational"
    },
    {
      imgSrc: "/image3.jpg",
      mainHeading: "Heading 3",
      subHeading: "Subheading 3"
    },
    {
      imgSrc: "/image4.jpg",
      mainHeading: "Heading 4",
      subHeading: "Subheading 4"
    }
  ];

  return (
    <div className="flex flex-col p-6 justify-center items-center h-screen">
      {/* Heading and Subheading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">What is your math comfort level?</h1>
        <p className="text-lg text-gray-600">Choose the highest level you feel confident in - you can always adjust later.</p>
      </div>
      
      {/* Square Boxes */}
      <div className="flex flex-wrap justify-center gap-4">
        {boxContents.map((box, index) => (
          <div key={index} className="w-50 bg-white border rounded-lg p-4">
            <img src={box.imgSrc} alt="Image" className="w-18 h-16 mx-auto mb-2" />
            <h2 className="text-sm font-bold flex justify-center mb-1">{box.mainHeading}</h2>
            <p className="text-md flex justify-center text-gray-600">{box.subHeading}</p>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <button className="py-3 px-6 bg-gray-800 text-white rounded mt-8">Continue</button>
    </div>
  );
};

export default NextPage;
