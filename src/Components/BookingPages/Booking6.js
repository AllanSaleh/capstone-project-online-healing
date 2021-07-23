import React from 'react';

const Booking6 = () => (
  <div className="h-firstsection px-sides pt-navbar">
    <h1 className="text-title uppercase mb-4">What brings you here?</h1>
    <h3 className="text-subtitle opacity-50 text-justify">
      Please specify (in a few sentences) why you'd like counseling.
      <br />
      This will give your counselor a good understanding of where to start.
    </h3>
    <div className="h-2/5 border border-black border-opacity-20 rounded-md p-4 my-16">
      <textarea className="h-full w-full outline-none border-none resize-none p-1"></textarea>
    </div>
    <div className="flex justify-between">
      <button
        type="button"
        className="uppercase bg-blue-dark h-12 w-32 text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition duration-300"
      >
        back
      </button>
      <button
        type="button"
        className="uppercase bg-blue-dark h-12 w-32 text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition-all duration-300"
      >
        next
      </button>
    </div>
  </div>
);

export default Booking6;
