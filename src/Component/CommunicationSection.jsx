import React from 'react';
import Card from './Card';
import PhoneCell from '../Icons/phone-cell.svg';
import ChatIcon from '../Icons/chat-icon.svg';
import VideoCallIcon from '../Icons/video-call-icon.svg';

const CommunicationSection = ({ showSubtitle, subtitleText }) => (
  <div className="h-section flex flex-col justify-evenly px-sides">
    <div className="mb-2">
      <h1 className="text-title pb-2 uppercase">we can communicate through</h1>
      {showSubtitle && <h3 className="text-subtitle ">{subtitleText}</h3>}
    </div>
    <div className="flex justify-around"></div>
  </div>
);

export default CommunicationSection;
