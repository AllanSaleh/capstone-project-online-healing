import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';
import Working from './Components/WorkingWithHealling/Working';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AddNewCard from './Components/AddNewCard/AddNewCard';
import OpeningSection from './Components/Careers/OpeningSection';
import WorkingWithHealing from './Components/WorkingWithHealing/WorkingWithHealing';


function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <NavBar />

      <div className="text-center bg-blue-dark h-firstsection w-full px-sides">First Section!</div>
      <OpeningSection />
      <WorkingWithHealing />
      <Footer />
    </div>
  );
}

export default App;
