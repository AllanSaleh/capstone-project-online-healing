import React from 'react';

import Landing from './Landing';
import Description from './Description';
import CommunicationSection from './CommunicationSection';
import RecentBlogs from './RecentBlogs';
import TicketSection from './TicketSection';

export default function HomePage() {
  return (
    <>
      <Landing />
      <Description />
      <CommunicationSection />
      <RecentBlogs />
      <TicketSection />
    </>
  );
}
