import React from 'react';

import Card from './Card';

import PhoneCell from './Images/phone-cell.svg';
import ChatIcon from './Images/chat-icon.svg';
import VideoCallIcon from './Images/video-call-icon.svg';

const CommunicationSection = () => (
  <div className=" md:h-section flex flex-col justify-evenly px-sides">
    <h1 className="sm:text-xl md:text-4xl xl:text-title pb-2 uppercase mb-2">
      we can communicate through
    </h1>
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-around">
      <Card
        showIcon
        icon={PhoneCell}
        title="voice call"
        content="Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!"
        showButton={false}
      />

      <Card
        showIcon
        icon={ChatIcon}
        title="chat"
        content="Need to talk to someone?Come have a chat with your therapist!"
        showButton={false}
      />

      <Card
        showIcon
        icon={VideoCallIcon}
        title="video call"
        content="For better experience therapists recommend video calls, but always remember that its a choice!"
        showButton={false}
      />
    </div>
  </div>
);

export default CommunicationSection;
