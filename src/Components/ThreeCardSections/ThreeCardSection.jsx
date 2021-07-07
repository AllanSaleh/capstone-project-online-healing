import React from 'react';
import Card from './Card';

const ThreeCardComponent = ({ title, subtitle, cardsData, isCounselor }) => (
  <div className="h-section flex flex-col px-sides">
    {title && <h1 className="text-title uppercase">{title}</h1>}
    {subtitle && (
      <h2 className="text-subtitle uppercase">
        purchase tickets that can be used to book appointments!
      </h2>
    )}
    <div className="flex justify-around mt-28">
      {cardsData.map((cardData, index) => (
        <Card
          key={index}
          icon={cardData.icon}
          title={cardData.title}
          content={cardData.content}
          buttonText={cardData.buttonText}
        />
      ))}
    </div>
    {isCounselor && (
      <div className="flex flex-col justify-center items-center mt-28">
        <h1 className="text-title uppercase">are you a counselor?</h1>
        <p className="text-paragraph w-2/3 text-center mt-8">
          Interested in joining our mental health platform? You decide your schedule and how much
          you want to work, we’ll take care of the client referrals and billing details!
        </p>
        <button className="text-subtitle uppercase my-8 bg-blue-dark rounded-lg py-2 px-4 border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition-all duration-300">
          learn more
        </button>
      </div>
    )}
  </div>
);

export default ThreeCardComponent;
