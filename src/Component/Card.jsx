import React from 'react';

const Card = ({ title, content, showIcon, icon, buttonText, showButton }) => {
  return (
    <div className="flex flex-col max-w-sm items-center shadow-lg py-8 px-16">
      {showIcon && <img src={icon} alt="" className="flex-initial" />}
      <h3 className="text-center text-3xl">{title}</h3>
      <p className="font-extralight text-xs">{content}</p>
      {showButton && (
        <button className="bg-blue-dark py-2 px-4 text-black hover:bg-opacity-50 transition duration-300">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
