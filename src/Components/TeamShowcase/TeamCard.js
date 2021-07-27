import React from 'react';

export default function TeamCard({ img, name, position }) {
  return (
    <div className="flex flex-col w-52 bg-blue-light rounded-3xl justify-between mx-2">
      <div className="h-60">
        <img className="w-full" src={img} alt="MemberImage" />
        <div className="h-2 w-full bg-green-300" />
      </div>
      <div className="h-48 flex flex-col justify-around">
        <div className="text-gray-700 text-subtitle text-center">{name}</div>
        <div className="text-gray-700 text-paragraph text-center">{position}</div>
      </div>
    </div>
  );
}
