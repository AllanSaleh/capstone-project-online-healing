import React from 'react';

export default function BlogImage({ image }) {
  return (
    <div className="flex items-center lg:h-firstsection px-sides pt-24 lg:pt-navbar">
      <img className="w-full" src={image} alt="Blog" />
    </div>
  );
}
