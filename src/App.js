import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Card from './Component/Card';
import './styles/main.css';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return <Card showIcon={false} title="Tickets" content="75$" showButton buttonText="PURCHASE" />;
}

export default App;
