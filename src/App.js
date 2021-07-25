import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import FirstSection from './Components/Contact Page/FirstSection';
import Description from './Components/Description/Description';
import LandingPage from './Components/landing page/landingpage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import WorkingWithHealing from './Components/WorkingWithHealing/WorkingWithHealing';
import ContactPage from './Components/Contact Page/ContactPage';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return <ContactPage />;
}

export default App;
