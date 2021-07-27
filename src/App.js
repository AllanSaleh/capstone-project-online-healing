import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import ContactPage from './Components/Contact Page/ContactPage';
import Working from './Components/WorkingWithHealling/Working';
import WorkingWithHealing from './Components/WorkingWithHealing/WorkingWithHealing';
import ThankYou from './Components/ThankYou/ThankYou';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return <WorkingWithHealing />;
}

export default App;
