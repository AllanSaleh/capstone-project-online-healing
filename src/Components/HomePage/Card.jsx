import React from 'react';

const Card = ({ title, content, showIcon, icon, buttonText, showButton }) => (
  <div className="h-full w-full my-4 flex flex-col items-center justify-evenly shadow-lg rounded-lg md:w-1/4 p-4">
    {showIcon && <img src={icon} alt="" className="flex-initial mb-4" />}
    <h3 className="text-center text-xl  lg:text-3xl 2xl:text-title pb-1 capitalize">{title}</h3>
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
