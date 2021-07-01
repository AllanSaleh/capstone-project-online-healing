import React from 'react';
import Card from './Card';
import PhoneCell from '../Icons/phone-cell.svg';

const CommunicationSection = ({ showSubtitle, subtitleText }) => (
  <div className="h-section flex flex-col justify-evenly px-sides">
    <div className="">
      <h1 className="text-title pb-2 uppercase">we can communicate through</h1>
      {showSubtitle && <h3 className="text-subtitle ">{subtitleText}</h3>}
    </div>
  </div>
);

export default CommunicationSection;
