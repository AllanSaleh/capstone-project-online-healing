import React from 'react';

import LandingPage from './LandingPage';
import Description from './Description';
import CommunicationSection from './CommunicationSection';
import RecentBlogs from './RecentBlogs';
import TicketSection from './TicketSection';

export default function HomePage() {
  return (
    <>
      <LandingPage />
      <Description />
      <CommunicationSection />
      <RecentBlogs />
      <TicketSection />
    </>
  );
}
