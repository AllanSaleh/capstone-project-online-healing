import React from 'react';

const Booking8 = () => (
  <div className="h-firstsection px-sides pt-navbar">
    <h1 className="text-title uppercase mb-4">
      your request has been submitted!
    </h1>
    <h3 className="text-subtitle opacity-50 text-justify">
      You will receive an email guiding you to book a date and time soon.
    </h3>
    <div className="flex flex-col justify-evenly items-center h-2/3 max-w-3xl my-16 mx-auto p-8 shadow-md">
      <h3 className="text-3xl capitalize">request submitted</h3>
      <p className="text-subtitle text-center">
        you will receive a confirmation email soon
        <br />
        please keep an eye on your mail.
      </p>
      <button
        type="button"
        className="uppercase bg-blue-dark text-subtitle px-4 py-2 min-w-min w-1/3 rounded-md border hover:border-blue-dark hover:bg-white hover:text-blue-dark transition-all duration-300"
      >
        back to home
      </button>
    </div>
  </div>
);

export default Booking8;
