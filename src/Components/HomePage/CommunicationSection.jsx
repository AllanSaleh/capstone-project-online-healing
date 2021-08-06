import React from 'react';

import { useTranslation } from 'react-i18next';
import Card from './Card';

import PhoneCell from './Images/phone-cell.svg';
import ChatIcon from './Images/chat-icon.svg';
import VideoCallIcon from './Images/video-call-icon.svg';

export default function CommunicationSection() {
  const { t } = useTranslation();
  return (
    <div className=" md:h-section flex flex-col justify-evenly px-sides">
      <h1 className="sm:text-xl md:text-4xl xl:text-title pb-2 uppercase mb-2">
        we can communicate through
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-around">
        <Card
          showIcon
          icon={PhoneCell}
          title={t('HomePage.Call')}
          content={t('HomePage.CallText')}
          showButton={false}
        />

        <Card
          showIcon
          icon={ChatIcon}
          title={t('HomePage.Chat')}
          content={t('HomePage.ChatText')}
          showButton={false}
        />

        <Card
          showIcon
          icon={VideoCallIcon}
          title={t('HomePage.Video')}
          content={t('HomePage.VideoText')}
          showButton={false}
        />
      </div>
    </div>
  );
}
