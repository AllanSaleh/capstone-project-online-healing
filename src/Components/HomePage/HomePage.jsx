import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Landing from './Landing';
import Description from './Description';
import CommunicationSection from './CommunicationSection';
import RecentBlogs from './RecentBlogs';
import TicketSection from './TicketSection';

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

export default function HomePage({ loginStatus }) {
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (location.state === true) {
      const y =
        document.getElementById('Tickets').getBoundingClientRect().top +
        window.pageYOffset -
        0.1 * vh;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Landing user={loginStatus} />
      <Description user={loginStatus} />
      <CommunicationSection />
      <RecentBlogs blogs={blogs} setBlogs={(blogs) => setBlogs(blogs)} />
      <TicketSection user={loginStatus} />
    </>
  );
}
