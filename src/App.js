import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import Purchase from './Components/PurchaseTicket/Purchase';
import Description from './Components/Description/Description';
import LandingPage from './Components/landing page/landingpage';
import Working from './Components/WorkingWithHealling/Working';
import FirstSection from './Components/Contact Page/FirstSection';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AddNewCard from './Components/AddNewCard/AddNewCard';
import Booking8 from './Components/BookingPages/Booking8';
import Login from './Components/Login/login';
import OpeningSection from './Components/Careers/OpeningSection';
import WorkingWithHealing from './Components/WorkingWithHealing/WorkingWithHealing';
import ContactPage from './Components/Contact Page/ContactPage';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <NavBar />
      <Booking8 />
    </div>
  );
}

export default App;
