import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProgressBar = ({ progress }) => {
    return (
        <div className="h-1 bg-green-500 w-full mb-6" style={{ width: `${progress}%` }}></div>
    );
};

function DemoComponent4() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {

        setProgress(80);
    }, []);
    const [optionClicked, setOptionClicked] = useState(false); // New state to track if an option box has been clicked
    const navigate = useNavigate();
    const handleContinue = () => {

        navigate("/DemoComponent5");
    };
    const handleClick = () => {
        setProgress(80);
        setOptionClicked(true); // Set the state to true when an option box is clicked
    };

    return (
        <section>
            <div className="mx-auto mt-2 p-4">
                <ProgressBar className="w-full mb-4" progress={progress} max="100" style={{ height: '5px', backgroundColor: 'green' }} />
            </div>
            <div className="py-16">
                <div className="mx-auto px-6 max-w-6xl">
                    <h1 className="text-3xl text-center text-gray-900 dark:text-white font-semibold">What is your math comfort level?</h1>
                    <p className="text-center mt-2 text-gray-600 dark:text-gray-300">Choose the highest level you feel confident in -you can always adjust later</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        <div className="option-box border border-grey-600 rounded-lg relative overflow-hidden" onClick={handleClick}>
                            <img src="/quadratic.png" alt="1" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-md text-center text-gray-900 dark:text-white font-semibold">Arithmetic</h2>
                                <p className="mt-2 text-gray-600 text-center text-lg dark:text-gray-300">Introductory</p>
                            </div>

                            <div className="absolute inset-0 border-yellow-100 rounded-lg border-4 shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="option-box border border-grey-600 rounded-lg relative overflow-hidden" onClick={handleClick}>
                            <img src="/quadratic.png" alt="2" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-md text-center  text-gray-900 dark:text-white font-semibold">Basic Algebra</h2>
                                <p className="mt-2 text-gray-600 text-center text-lg dark:text-gray-300">Foundational</p>
                            </div>

                            <div className="absolute inset-0 border-yellow-100 rounded-lg border-4 shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="option-box border border-grey-600 rounded-lg relative overflow-hidden" onClick={handleClick}>
                            <img src="/quadratic.png" alt="3" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-md text-center text-gray-900 dark:text-white font-semibold">Intermediate Algebra</h2>
                                <p className="mt-2 text-gray-600 text-center text-lg dark:text-gray-300">Intermediate</p>
                            </div>

                            <div className="absolute inset-0 border-yellow-100 rounded-lg border-4 shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="option-box border border-grey-600 rounded-lg relative overflow-hidden" onClick={handleClick}>
                            <img src="/quadratic.png" alt="4" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-md text-center text-gray-900 dark:text-white text-center font-semibold">Calculus</h2>
                                <p className="mt-2 text-gray-600 text-center text-lg dark:text-gray-300">Advanced</p>
                            </div>

                            <div className="absolute inset-0 border-yellow-100 rounded-lg border-4 shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button onClick={handleContinue} className={`font-bold py-2 px-6 rounded ${optionClicked ? 'bg-black text-white' : 'bg-gray-200 text-white'}`}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DemoComponent4;
