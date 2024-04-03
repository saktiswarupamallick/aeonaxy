import React from "react";

const MainHeading = ({ children }) => {
  return <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">{children}</h1>;
};

const SubHeading = ({ children }) => {
  return <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold">{children}</h2>;
};

const Box = ({ image, heading, subheading }) => {
  return (
    <div className="flex flex-row justify-center items-center bg-gray-200 p-4 border border-gray-300 rounded-lg">
      <img src={image} alt="Box Image" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4" />
      <div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{heading}</h3>
        <p className="text-sm md:text-base">{subheading}</p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="container mx-auto py-8">
      <div>
        <MainHeading>Main Heading</MainHeading>
        <SubHeading>Sub Heading</SubHeading>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 mt-8">
        <Box
          image="/parent.png"
          heading="Foundational Math"
          subheading="Build your foundational skills in algebra ,geometry,and probability"
        />
        <Box
          image="/parent.png"
          heading="Mathematical Thinking"
          subheading="Build your foundational skills in algebra ,geometry,and probability"
        />
      </div>
    </div>
  );
};

export default Page;
