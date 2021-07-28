import React from 'react';

export default function Position({ title1, subtitle1, title2, subtitle2 }) {
  return (
    <div className="flex justify-between w-11/12 border-b-2 border-gray-600 mb-6 py-4">
      <div>
        <div className="text-blue-dark text-subtitle">{title1}</div>
        <div className="text-gray-600 text-paragraph">{subtitle1}</div>
      </div>

      <div className="flex flex-col">
        <div className="text-subtitle text-blue-dark">{title2}</div>
        <div className="text-gray-600 text-paragraph">{subtitle2}</div>
      </div>
    </div>
  );
}
