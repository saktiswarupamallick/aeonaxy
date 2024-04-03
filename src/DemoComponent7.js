import React from "react";

const MainHeading = ({ children }) => {
  return <h1 className="text-center mt-10 text-3xl md:text-4xl lg:text-5xl font-bold">{children}</h1>;
};

const SubHeading = ({ children }) => {
  return <h2 className="text-center mt-8 text-md md:text-xl lg:text-x text-gray-400 ">{children}</h2>;
};

const Box = ({ image, heading, subheading }) => {
  return (
    <div className="flex mt-8 mx-6 flex-row-inverse justify-center items-center  p-4 border border-gray-300 rounded-lg">
      <div>
        <h3 className="text-lg md:text-lg font-bold">{heading}</h3>
        <div className="text-lg md:text-base">
          {subheading.split('..').map((part, index) => (
            <p key={index} className="mb-1">{part}</p>
          ))}
        </div>
      </div>
      <div><img src={image} alt="Box Image" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4" /></div>


    </div>
  );
};

const Page = () => {
  return (
    <div className="container mx-auto  py-8">
      <div>
        <MainHeading>Learning paths based on your answers</MainHeading>
        <SubHeading>Choose one to get started. You can switch anytime.</SubHeading>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 mt-8">
        <Box
          image="/parent.png"
          heading="Foundational Math"
          subheading="Build your foundational..skills in algebra ,geometry,..and probability."
        />
        <Box
          image="/parent.png"
          heading="Mathematical Thinking"
          subheading="Build your foundational..skills in algebra ,geometry,..and probability."
        />
      </div>
    </div>
  );
};

export default Page;
