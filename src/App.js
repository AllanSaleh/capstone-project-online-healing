import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import EditProfile from './Components/ProfileInfo/EditProfile';
import TherapistProfile from './Components/TherapistProfile/ThrapistProfileInfo';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <NavBar />
      <TherapistProfile />
      <Footer />
    </div>
  );
}

export default App;
