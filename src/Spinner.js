import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Spinner = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
      navigate('./Democomponent7'); // Redirect after 6 seconds
    }, 6000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {showSpinner && (
        <div className="text-center mb-8">
          <FontAwesomeIcon className="mb-8" icon={faSpinner} style={{ color: "#FFD43B" }} spin size="3x" />
          <h1 className="text-xl font-bold">Finding learning path recommendation for you based on</h1>
          <h1 className="text-xl font-bold mt-2">your response</h1>
        </div>
      )}
    </div>
  );
};

export default Spinner;
