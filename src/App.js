import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CommunicationSection from './Components/ThreeCardSections/CommunicationSection';
import TicketSection from './Components/ThreeCardSections/TicketSection';
import './styles/main.css';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <CommunicationSection />
      <TicketSection />
    </div>
  );
}

export default App;
