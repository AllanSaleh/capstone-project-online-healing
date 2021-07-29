import React from 'react';

export default function BlogImage({ image }) {
  return (
    <div className="flex flex-col justify-evenly h-firstsection px-sides pt-navbar">
      <img className="w-full" src={image} alt="Blog" />
    </div>
  );
}
