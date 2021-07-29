import React from 'react';

export default function Position({ title1, subtitle1, title2, subtitle2 }) {
  return (
    <div className="flex flex-col justify-between w-11/12 border-b-2 border-gray-700 mb-6 py-4">
      <div>
        <div className="text-blue-dark text-lg lg:text-subtitle">{title1}</div>
        <div className="text-gray-700 text-base lg:text-paragraph">{subtitle1}</div>
      </div>

      <div className="flex flex-col">
        <div className="text-lg lg:text-subtitle text-blue-dark">{title2}</div>
        <div className="text-gray-700 text-base lg:text-paragraph">{subtitle2}</div>
      </div>
    </div>
  );
}
