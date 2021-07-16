import PhoneCell from '../Icons/phone-cell.svg';
import ChatIcon from '../Icons/chat-icon.svg';
import VideoCallIcon from '../Icons/video-call-icon.svg';

export const CommunicationSectionData = {
  title: 'we can communicate through',
  subtitle: '',
  cardsData: [
    {
      icon: PhoneCell,
      title: 'voice call',
      content:
        'Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!',
      buttonText: '',
    },
    {
      icon: ChatIcon,
      title: 'chat',
      content: 'Need to talk to someone?Come have a chat with your therapist!',
      buttonText: '',
    },
    {
      icon: VideoCallIcon,
      title: 'voice call',
      content:
        'For better experience therapists recommend video calls, but always remember that its a choice!',
      buttonText: '',
    },
  ],
  isCounselor: false,
};

export const TicketSectionData = {
  title: 'purchase tickets',
  subtitle: 'purchase tickets that can be used to book appointments!',
  cardsData: [
    {
      icon: {},
      title: '5 Tickets',
      content: '10$',
      buttonText: 'Purchase',
    },
    {
      icon: {},
      title: '25 Tickets',
      content: '40$',
      buttonText: 'Purchase',
    },
    {
      icon: {},
      title: 'voice call',
      content: '70$',
      buttonText: 'Purchase',
    },
  ],
  isCounselor: true,
};

const threeCardSectionData = [CommunicationSectionData, TicketSectionData];

export default threeCardSectionData;
