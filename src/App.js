import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ThankYou from './Components/ThankYou/ThankYou';

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
        subtitle={`Your Sign Up request has been received, you will soon receive a confirmation email. \nPlease follow the steps in the email to complete and activate your account.`}
      />
      <Footer />
    </div>
  );
}

export default App;
