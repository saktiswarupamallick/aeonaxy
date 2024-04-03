import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faSpinner} style={{ color: "#FFD43B" }} spin size="3x" />
        <h1 className="text-lg font-bold mt-4">Finding learning path recommendation for you based on your response</h1>
      </div>
    </div>
  );
};

export default Loader;
