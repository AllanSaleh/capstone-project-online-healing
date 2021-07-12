import React from 'react';
​
export default function SecondSection() {
  return (
    <div className="flex  px-sides h-section items-center">
      <form className=" flex flex-col w-1/2">
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Full Name:</label>
          <input
            className="p-2 w-3/4 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your full name"
          />
        </div>
​
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Email:</label>
          <input
            className="p-2 w-3/4 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your email address"
          />
        </div>
​
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Details:</label>
          <textarea
            className="p-2 w-3/4 h-72 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your details here..."
          />
        </div>
​
        <button
          className="w-32 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          type="submit"
        >
          Submit
        </button>
      </form>
​
      <div className="w-1/2 flex justify-center">
        <div className="bg-blue-light rounded-lg p-6 w-72 h-64">
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