import React from 'react';

function BoxGrid() {
    return (
        <section>
            <div className="py-16">
                <div className="mx-auto px-6 max-w-6xl">
                    <h1 className="text-3xl text-center text-gray-900 dark:text-white font-semibold">Main Heading</h1>
                    <p className="text-center mt-2 text-gray-600 dark:text-gray-300">Subheading</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        <div className="bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden">
                            <img src="image1.jpg" alt="Image 1" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl text-gray-900 dark:text-white font-semibold">Heading 1</h2>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Subheading 1</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden">
                            <img src="image2.jpg" alt="Image 2" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl text-gray-900 dark:text-white font-semibold">Heading 2</h2>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Subheading 2</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden">
                            <img src="image3.jpg" alt="Image 3" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl text-gray-900 dark:text-white font-semibold">Heading 3</h2>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Subheading 3</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden">
                            <img src="image4.jpg" alt="Image 4" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl text-gray-900 dark:text-white font-semibold">Heading 4</h2>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Subheading 4</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contain</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BoxGrid;
