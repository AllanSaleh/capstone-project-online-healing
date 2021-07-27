import React from 'react';
import Card from './Card';

const TicketSection = () => (
  <div className=" md:h-section flex flex-col justify-evenly px-sides">
    <div>
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
  </div>
);

export default TicketSection;
