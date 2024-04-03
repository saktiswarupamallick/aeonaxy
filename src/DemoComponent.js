import React, { useState } from 'react';

const options = [
  {
    id: 1,
    icon: '/student.png',
    label: 'Student',
    description: 'or soon to be enrolled',
  }, {
    id: 2,
    icon: '/professional.png',
    label: 'Professional',
    description: 'pursuing a career',
  },
  {
    id: 3,
    icon: '/parent.png',
    label: 'Parent',
    description: 'of a school-age child',
  },
  {
    id: 4,
    icon: './learner.png',
    label: 'Lifelong learner',
  },
  {
    id: 5,
    icon: '/teacher.png',
    label: 'Teacher',
  },
  {
    id: 6,
    icon: '/other.png',
    label: 'Other',
  }
];

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-1 bg-green-500 mb-6" style={{ width: `${progress}%` }}></div>
  );
};

const Option = ({ option, onSelect }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex items-center space-x-4 p-4 border rounded cursor-pointer transition duration-300 ${hovered ? 'border-yellow-300 shadow-md bg-white' : 'border-gray-300 hover:border-yellow-300 hover:bg-white'}`}
      onClick={() => onSelect(option.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={option.icon} alt={option.label} className="w-12 h-12" />
      <div>
        <p className="font-bold">{option.label}</p>
        {option.description && <p className="text-sm text-gray-600">{option.description}</p>}
      </div>
    </div>
  );
};

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSelect = (id) => {
    setSelectedOption(id);
    setProgress(20);
  };

  return (
    <div className="mx-auto mt-10 p-4">
      <ProgressBar progress={progress} />
      <div className="max-w-xl mx-auto mt-10 p-4">
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
          >
            Continue
          </button>
        </div>
      </div>
   

    </div>
  );
};

export default Form;
