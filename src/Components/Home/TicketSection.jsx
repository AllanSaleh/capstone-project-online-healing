import React from 'react';
import Card from './Card';

const TicketSection = () => (
  <div className="flex flex-col justify-evenly px-sides">
    <div className="pb-16 pt-8">
      <h1 className="text-xl md:text-4xl xl:text-title uppercase">
        Purchase tickets
      </h1>
      <h3 className="text-xs md:text-lg lg:text-subtitle text-opacity-75 mb-4 md:my-2">
        purchase tickets that can be used to book appointments!
      </h3>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-around">
      <Card
        showIcon={false}
        title="5 Tickets"
        content="10$"
        showButton
        buttonText="Purchase"
      />

      <Card
        showIcon={false}
        title="25 Tickets"
        content="40$"
        showButton
        buttonText="Purchase"
      />

      <Card
        showIcon={false}
        title="50 Tickets"
        content="70$"
        showButton
        buttonText="Purchase"
      />
    </div>
    <div
      className="flex flex-col justify-around my-16 px-4 lg:px-8 rounded-lg"
      style={{ boxShadow: '0px 4px 12px 4px rgba(178, 171, 171, 0.25)' }}
    >
      <h1 className="text-2xl md:text-4xl lg:text-title uppercase mx-auto py-4">
        are you a counselor?
      </h1>
      <p className="text-sm md:text-md lg:text-subtitle text-justify md:text-center text-opacity-50 my-4 ">
        Interested in joining our mental health platform? You decide your
        schedule and how much you want to work, we’ll take care of the client
        referrals and billing details!
      </p>

      <div className="text-center my-8">
        <button
          type="button"
          className="bg-blue-dark py-2 px-4 uppercase text-paragraph border text-black hover:bg-transparent hover:border-blue-dark hover:text-blue-dark  transition-all duration-200 rounded-md"
        >
          learn more
        </button>
      </div>
    </div>
  </div>
);

export default TicketSection;
