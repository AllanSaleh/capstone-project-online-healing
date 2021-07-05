import React from 'react';
import Card from './Card';

const TicketSection = () => (
  <div className="h-section flex flex-col px-sides">
    <h1 className="text-title uppercase">purchase tickets</h1>
    <h2 className="text-subtitle uppercase">
      purchase tickets that can be used to book appointments!
    </h2>
    <div className="flex justify-around mt-28">
      <Card showIcon={false} title="5 Tickets" content="10$" showButton buttonText="Purchase" />

      <Card showIcon={false} title="25 Tickets" content="40$" showButton buttonText="Purchase" />

      <Card showIcon={false} title="50 Tickets" content="70$" showButton buttonText="Purchase" />
    </div>
    <div className="flex flex-col justify-center items-center mt-28">
      <h1 className="text-title uppercase">are you a counselor?</h1>
      <p className="text-paragraph w-2/3 text-center mt-8">
        Interested in joining our mental health platform? You decide your schedule and how much you
        want to work, we’ll take care of the client referrals and billing details!
      </p>
      <button className="text-subtitle uppercase my-8 bg-blue-dark rounded-lg py-2 px-4 border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition-all duration-300">
        learn more
      </button>
    </div>
  </div>
);

export default TicketSection;
