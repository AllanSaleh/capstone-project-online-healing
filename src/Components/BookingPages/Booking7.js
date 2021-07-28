import React from 'react';

const Booking7 = () => (
  <div className="h-firstsection px-sides pt-navbar">
    <h1 className="text-2xl lg:text-title uppercase mb-4">Submit your appointment</h1>
    <h3 className="text-md lg:text-subtitle opacity-50 text-justify">
      Click Submit if you are sure of all your choices.
    </h3>
    <div className="flex flex-col justify-evenly items-center h-1/2 lg:h-2/3 w-full lg:max-w-3xl my-16 mx-auto p-8 shadow-md">
      <h3 className="text-xl lg:text-3xl capitalize">submit appointment?</h3>
      <p className="text-sm lg:text-subtitle text-center">
        Please be aware that this action will cost you a ticket!
      </p>
      <button
        type="button"
        className="uppercase bg-blue-dark text-md lg:text-subtitle px-4 py-2 min-w-min w-1/3 rounded-md border hover:border-blue-dark hover:bg-white hover:text-blue-dark transition-all duration-300"
      >
        submit
      </button>
    </div>
  </div>
);

export default Booking7;