import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const options = [
  {
    id: 1,
    icon: '/student.png',
    label: 'Student ',
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
    <div className="h-1 bg-green-500 w-full mb-6" style={{ width: `${progress}%` }}></div>
  );
};

const Option = ({ option, onSelect }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex items-center py-4 space-x-2 p-2 border rounded cursor-pointer transition duration-300 ${hovered ? 'border-yellow-300 shadow-md bg-white' : 'border-gray-300 hover:border-yellow-300 hover:bg-white'}`}
      onClick={() => onSelect(option.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={option.icon} alt={option.label} className="w-6 h-8" />

      <div className="flex flex-row ">
        <p className="font-bold pr-2">{option.label}</p>
      
        <p> {option.description}</p>
      </div>
    </div>
  );
};


const DemoComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {

    setProgress(20);
  }, []);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedOption(id);
    setProgress(20);
  };

  const handleContinue = () => {
   
    navigate("/DemoComponent2");
  };

  return (
    <>
    <div  className=" mx-auto mt-2 p-4">
      <ProgressBar progress={progress} />
    </div>
      <div className="mx-auto mt-10 p-4 max-w-lg">
       
        <h1 className="text-xl font-bold mb-2 text-center">Which describes you best?</h1>
        <p className="text-gray-600 mb-10 text-sm text-center">This will help us personalize your experience.</p>
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
            className={`py-2 px-10 rounded mt-4 ${selectedOption !== null ? 'bg-black text-white' : 'bg-gray-200 text-white'
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




export default DemoComponent;
