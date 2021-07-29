import React from 'react';

export default function ThankYou({ subtitle }) {
  return (
    <div className="h-firstsection pt-navbar px-sides">
      <div className="flex flex-col justify-evenly h-1/2">
        <div className="text-title">THANK YOU!</div>
        <div className="text-subtitle text-gray-700">
          {subtitle.split('\n').map((str) => (
            <p>{str}</p>
          ))}
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
