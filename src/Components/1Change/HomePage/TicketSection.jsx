import React from 'react';

import Card from './Card';

const TicketSection = () => (
  <div className="h-section flex flex-col justify-evenly px-sides">
    <h1 className="text-title pb-2 uppercase mb-2">we can communicate through</h1>
    <div className="flex justify-around">
      <Card showIcon={false} title="5 Tickets" content="10$" showButton buttonText="Purchase" />

      <Card showIcon={false} title="25 Tickets" content="40$" showButton buttonText="Purchase" />

      <Card showIcon={false} title="50 Tickets" content="70$" showButton buttonText="Purchase" />
    </div>
  </div>
);

export default TicketSection;
