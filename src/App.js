import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';
import CommunicationSection from './Components/CommunicationSection';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="bg-red-500 mx-auto" style={{ width: '1440px' }}>
      <CommunicationSection />
    </div>
  );
}

export default App;
