import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <div className="bg-blue-dark text-6xl text-yellow-primary">
        Yellow<span className="text-blue-light"> light blue</span>
      </div>
      <div className="text-title">Test Title</div>
      <div className="text-subtitle">Test Subtitle</div>
      <div className="text-paragraph">Test Paragraph</div>
      <div className="text-btn">Test Btn</div>
    </div>
  );
}

export default App;
