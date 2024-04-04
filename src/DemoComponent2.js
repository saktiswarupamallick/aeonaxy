import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const options = [
  {
    id: 1,
    icon: '/skills.png',
    label: 'Learning specific skills to advance my career',
    
  }, {
    id: 2,
    icon: '/explore.png',
    label: "Exploring new topics I'm interested in",
    
  },
  {
    id: 3,
    icon: '/math.png',
    label: 'Refreshing my math foundations',
 
  },

  {
    id: 4,
    icon: './exercise.png',
    label: 'Exercising my brain to stay sharp',
  },

  {
    id: 5,
    icon: '/eye.png',
    label: 'Somryhing else',
  }





];

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-1 bg-green-500 w-full mb-6 " style={{ width: `${progress}%` }}></div>
  );
};

const Option = ({ option, onSelect }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex items-center space-x-2 p-4 border rounded cursor-pointer transition duration-300 ${hovered ? 'border-yellow-300 shadow-md bg-white' : 'border-gray-300 hover:border-yellow-300 hover:bg-white'}`}
      onClick={() => onSelect(option.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={option.icon} alt={option.label} className="w-6 h-8" />
      
        <p className="font-bold">{option.label}</p>
        <p>{option.description}</p>
      
    </div>
  );
};


const DemoComponent2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedOption(id);
    setProgress(40);
  };
  const handleContinue = () => {
   
    navigate("/DemoComponent3");
  };

  return (
    <>
    <div className=" mx-auto mt-2 p-4">
      <ProgressBar progress={progress} />
    </div>
    <div className="max-w-xl mx-auto  p-4">
      
      <h1 className="text-xl font-bold mb-2 text-center">Which describes you best?</h1>
      <p className="text-gray-600 mb-10 text-center">
        This will help us personalize your experience.
      </p>
      <div className="space-y-4">
        {options.map((option) => (
          <Option
            key={option.id}
            option={option}
            onSelect={handleSelect}
            disabled={selectedOption !== null}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className={`py-2 px-10 rounded mt-4 ${selectedOption !== null ? 'bg-black text-white' : 'bg-gray-400'
            }`}
          disabled={selectedOption === null}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
    </>
  );
};

export default DemoComponent2;