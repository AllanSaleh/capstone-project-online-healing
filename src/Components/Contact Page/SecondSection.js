import React from 'react';
import ContactPic from './ContactPic.svg';

export default function SecondSection() {
  return (
    <div className="flex  px-sides h-section items-center">
      <form className=" flex flex-col p-28 mr-80">
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Full Name: </label>
          <input
            className="p-2 w-96 text-paragraph text-gray-700 rounded-lg border-2 border-gray-700"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Email: </label>
          <input
            className="p-2 w-96 text-paragraph text-gray-700 rounded-lg border-2 border-gray-700"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-8">
          <label className="mb-2 block text-paragraph" >Details</label>
          <input
            className="p-2 w-96 h-24 text-paragraph text-gray-700 rounded-lg border-2 border-gray-700 text-left"
            placeholder="Enter your details here..."
          />
        </div>

        <div className="p-2">
          <button
            className="w-32 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="bg-blue-light rounded-lg p-4">
        <div className="text-3xl">Find Us At:</div>
        <div className="text-paragraph">Nergiz Plaza</div>
        <div className="text-paragraph">3rd Floor</div>
        <div className="text-paragraph">Bakhtiyari Street 40m</div>
        <div className="text-paragraph">Erbil, Iraq</div>
        <div className="text-paragraph">44001</div>
      </div>
    </div>
  );
}
