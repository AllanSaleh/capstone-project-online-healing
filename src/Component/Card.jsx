import React from 'react';

const Card = ({ title, content, showIcon, icon, buttonText, showButton }) => {
  return (
    <div className="flex flex-col max-w-sm items-center shadow-lg py-8 px-1">
      {showIcon && <img src={icon} alt="" className="flex-initial pb-4" />}
      <h3 className="text-center text-title pb-1">{title}</h3>
      <p className="text-gray-500 text-paragraph pb-4">{content}</p>
      {showButton && (
        <button className="bg-blue-dark py-2 px-4 text-btn text-black hover:bg-opacity-50 transition duration-300 rounded-md">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
