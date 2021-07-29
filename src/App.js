import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import ThankYou from './Components/ThankYou/ThankYou';
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
      <NavBar />
      <ThankYou
        subtitle={`Your request has been received, you'll soon receive a confirmation email. \nPlease follow the steps in the email to complete and activate your account.`}
      />
      <Footer />
    </div>
  );
}

export default App;
