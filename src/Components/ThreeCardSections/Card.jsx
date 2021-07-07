import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ title, content, icon, buttonText }) => (
  <div className="flex flex-col max-w-sm items-center shadow-lg py-8 px-16">
    {icon && <img src={icon} alt="" className="flex-initial pb-4" />}
    <h3 className="text-center text-title pb-1 capitalize">{title}</h3>
    {buttonText ? (
      <p className="text-opacity-50 text-black text-center text-4xl pb-4">{content}</p>
    ) : (
      <p className="text-opacity-50 text-black text-center text-paragraph pb-4">{content}</p>
    )}
    {buttonText && (
      // eslint-disable-next-line react/button-has-type
      <button className="bg-blue-dark py-2 px-4 text-subtitle border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition-all duration-300 rounded-lg uppercase">
        {buttonText}
      </button>
    )}
  </div>
);

export default Card;
