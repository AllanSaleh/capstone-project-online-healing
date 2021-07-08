import React from 'react';

export default function Position(props) {
  return (
    <div className="flex justify-between w-11/12 border-b-2 border-gray-700 mb-6 py-4">
      <div>
        <div className="text-blue-dark text-subtitle">{props.title1}</div>
        <div className="text-gray-700 text-paragraph">{props.subtitle1}</div>
      </div>

      <div className="flex flex-col">
        <div className="text-subtitle text-blue-dark">{props.title2}</div>
        <div className="text-gray-700 text-paragraph">{props.subtitle2}</div>
      </div>
    </div>
  );
}
