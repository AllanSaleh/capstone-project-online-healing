import React from 'react';

export default function BlogImage({ image }) {
  return (
    <div className="flex items-center lg:h-firstsection px-sides pt-24 lg:pt-32">
      <img className="h-3/4" src={image} alt="Blog" />
    </div>
  );
}
