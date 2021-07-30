import React from 'react';

export default function ThankYou({ subtitle }) {
  return (
    <div className="h-firstsection pt-navbar px-sides">
      <div className="text-center lg:text-left flex flex-col justify-evenly items-center lg:items-start h-full lg:h-1/2">
        <div>
          <div className="text-4xl lg:text-title">THANK YOU!</div>
          <div className="text-xl mt-4 lg:text-subtitle text-gray-700">
            {subtitle.split('\n').map((str) => (
              <p>{str}</p>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="w-64 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
