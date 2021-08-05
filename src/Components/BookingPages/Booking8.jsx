import React from 'react';
import { Link } from 'react-router-dom';

export default function Booking8() {
  window.scrollTo(0, 0);
  return (
    <div className="lg:h-firstsection px-sides pt-navbar">
      <h1 className="text-2xl lg:text-title uppercase my-8">your request has been submitted!</h1>
      <h3 className="text-md lg:text-subtitle opacity-50 text-justify">
        You will receive an email guiding you to book a date and time soon.
      </h3>
      <div className="flex flex-col justify-evenly items-center h-1/2 lg:h-2/3 max-w-3xl my-16 mx-auto p-8 shadow-md">
        <h3 className="text-xl lg:text-3xl capitalize">request submitted</h3>
        <p className="text-md lg:text-subtitle text-center">
          you will receive a confirmation email soon
          <br />
          please keep an eye on your mail.
        </p>
        <Link to="/">
          <button
            type="button"
            className="uppercase bg-blue-dark text-md lg:text-subtitle px-4 py-2 lg:w-64 rounded-md border hover:border-blue-dark hover:bg-white hover:text-blue-dark transition-all duration-300"
          >
            back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
