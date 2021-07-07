import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.css';
import threeCardSectionData from './mockdata/data';
import ThreeCardSection from './Components/ThreeCardSections/ThreeCardSection';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      {threeCardSectionData.map((section) => (
        <ThreeCardSection
          title={section.title}
          subtitle={section.subtitle}
          cardsData={section.cardsData}
          isCounselor={section.isCounselor}
        />
      ))}
    </div>
  );
}

export default App;
