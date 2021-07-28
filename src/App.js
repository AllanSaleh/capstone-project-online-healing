import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

// import Team from './Components/TeamShowcase/TeamPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/Contact/ContactPage';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <AboutPage />
    </div>
  );
}

export default App;
