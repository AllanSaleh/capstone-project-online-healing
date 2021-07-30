import React from 'react';

export default function Form() {
  return (
    <div className="flex flex-col px-sides sm:mt-0 mt-20 h-section items-center sm:flex-row w-full">
      <form className="flex flex-col sm:w-1/2 w-full">
        <div className="mb-8">
          <label className="mb-2  block text-paragraph">Full Name:</label>
          <input
            className="p-2 w-3/4 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Email:</label>
          <input
            className="p-2 w-3/4 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Details:</label>
          <textarea
            className="p-2 w-3/4 h-52 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your details here..."
          />
        </div>
        <button
          className="w-32 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="sm:w-1/2 w-full flex justify-center ">
        <div className="bg-blue-light rounded-lg p-6 sm:w-72 w-56 h-64  ">
          <div className="text-subtitle mb-4">Find Us At:</div>
          <div className="text-paragraph text-gray-700">Nergiz Plaza</div>
          <div className="text-paragraph text-gray-700">3rd Floor</div>
          <div className="text-paragraph text-gray-700">Bakhtiyari Street 40m</div>
          <div className="text-paragraph text-gray-700">Erbil, Iraq</div>
          <div className="text-paragraph text-gray-700">44001</div>
        </div>
      </div>
    </div>
  );
}
