import React from 'react';
import Card from './Card';
import PhoneCell from '../../Icons/phone-cell.svg';
import ChatIcon from '../../Icons/chat-icon.svg';
import VideoCallIcon from '../../Icons/video-call-icon.svg';

const CommunicationSection = () => (
  <div className="h-section flex flex-col justify-evenly px-sides">
    <h1 className="text-title pb-2 uppercase mb-2">we can communicate through</h1>
    <div className="flex justify-around">
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
