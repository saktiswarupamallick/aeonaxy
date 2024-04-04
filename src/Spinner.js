import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-8">
        <FontAwesomeIcon className="mb-8" icon={faSpinner} style={{ color: "#FFD43B" }} spin size="3x" />
        <h1 className="text-xl font-bold">Finding learning path recommendation for you based on</h1>
        <h1 className="text-xl font-bold mt-2">your response</h1>
        
      </div>
    </div>
  );
};

export default Spinner;

