import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import WorkingWithHealing from './Components/WorkingWithHealing/WorkingWithHealing';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AddNewCard from './Components/AddNewCard/AddNewCard';
import Login from './Components/Login/login';
import Careers from './Components/Careers/Careers';
import Team from './Components/TeamShowcase/TeamPage';
import LandingPage from './Components/landing page/landingpage';
import Signup from './Components/signup/signup';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
