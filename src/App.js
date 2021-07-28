import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import Team from './Components/TeamShowcase/TeamPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/Contact Page/ContactPage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AddNewCard from './Components/AddNewCard/AddNewCard';
import Team from './Components/TeamShowcase/TeamPage';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <ContactPage />
    </div>
  );
}

export default App;
