import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';

const TicketSection = ({ user }) => (
  <div id="Tickets" className="flex flex-col justify-evenly px-sides lg:h-section py-8">
    <div className="pb-8">
      <h1 className="text-xl md:text-4xl xl:text-title uppercase">Purchase tickets</h1>
      <h3 className="text-xs md:text-lg lg:text-subtitle text-opacity-75 mb-4 md:my-2">
        purchase tickets that can be used to book appointments!
      </h3>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-around w-full lg:h-1/3">
      <Card showIcon={false} title="5" content="10$" showButton buttonText="Purchase" user={user} />

      <Card
        showIcon={false}
        title="25"
        content="40$"
        showButton
        buttonText="Purchase"
        user={user}
      />

      <Card
        showIcon={false}
        title="50"
        content="70$"
        showButton
        buttonText="Purchase"
        user={user}
      />
    </div>
    <div
      className="flex flex-col justify-around items-center p-4 rounded-lg h-1/3 lg:mx-16"
      style={{ boxShadow: '0px 4px 12px 4px rgba(178, 171, 171, 0.25)' }}
    >
      <h1 className="text-2xl lg:text-3xl uppercase text-center py-4">are you a counselor?</h1>
      <p className="w-3/4 text-base md:text-md lg:text-subtitle text-justify md:text-center text-opacity-50">
        Interested in joining our mental health platform? You decide your schedule and how much you
        want to work, we’ll take care of the client referrals and billing details!
      </p>

      <div className="text-center my-8">
        <Link to="/Requirements">
          <button
            type="button"
            className="bg-blue-dark py-2 px-4 uppercase text-paragraph border text-black hover:bg-transparent hover:border-blue-dark hover:text-blue-dark  transition-all duration-200 rounded-md"
          >
            learn more
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default TicketSection;
