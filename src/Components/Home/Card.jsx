import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ title, content, showIcon, icon, buttonText, showButton }) => (
  <div className="flex flex-col max-w-sm items-center shadow-lg rounded-lg h-full w-11/12 md:w-1/3 my-6 md:my-0 md:mx-2 p-2 lg:py-6 lg:px-12">
    {showIcon && <img src={icon} alt="" className="flex-initial mb-4" />}
    <h3 className="text-center text-xl  lg:text-3xl 2xl:text-title pb-1 capitalize">
      {title}
    </h3>
    <p className="text-opacity-50 text-black text-center text-sm md:text-md lg:text-paragraph py-4">
      {content}
    </p>
    {showButton && (
      <button
        type="button"
        className="bg-blue-dark py-2 px-4 uppercase text-paragraph border text-black hover:bg-transparent hover:border-blue-dark hover:text-blue-dark  transition-all duration-200 rounded-md"
      >
        {buttonText}
      </button>
    )}
  </div>
);

export default Card;
