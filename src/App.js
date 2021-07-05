import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import './styles/main.css';

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
      <CreateAccount />
      <div className="text-center pt-navbar bg-blue-dark h-firstsection w-full px-sides">
        First Section!
      </div>
      <div className="text-center bg-yellow-primary h-section w-full px-sides">
        Other Sections!
      </div>
      <div className="text-center bg-blue-dark h-section w-full px-sides">
        Other Sections!
      </div>
      <Footer />
    </div>
  );
}

export default App;
