import React from 'react';

export default function BlogBody({ title, intro, subtitle, body }) {
  return (
    <div className="flex flex-col justify-evenly lg:h-section px-sides my-4">
      <div className="text-3xl lg:text-title">{title}</div>
      <div className="mt-4 lg:mt-0 text-lg lg:text-paragraph text-gray-700 text-justify">
        "{intro}"
      </div>
      <div className="mt-4 lg:mt-0 text-xl lg:text-subtitle">{subtitle}</div>
      <div className="mt-4 lg:mt-0 text-lg lg:text-paragraph text-gray-700 text-justify">
        {body.map((paragraph) => (
          <>
            <p>{paragraph}</p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
