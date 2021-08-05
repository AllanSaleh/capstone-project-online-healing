import React from 'react';
import { useTranslation } from 'react-i18next';

import Hiring from './Hiring';
import OpeningSection from './OpeningSection';

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

export default function CareersPage() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  return (
    <div>
      <div className="lg:h-firstsection pt-navbar">
        <div className="px-sides flex flex-col justify-evenly h-3/5 py-4">
          <div>
            <div className="text-3xl lg:text-title">{t('Open.Title')}</div>
            <div className="text-xl lg:text-subtitle text-gray-600 mt-4">{t('Open.Subtitle')}</div>
          </div>
          <div className="text-lg lg:text-paragraph text-gray-600 mt-4 text-justify">{t('Open.Intro')}</div>
          <div className="self-center lg:self-auto text-lg lg:text-paragraph text-gray-600 mt-4">{t('Open.Question')}</div>
          <button
            onClick={() => {
              const y =
                document.getElementById('Openings').getBoundingClientRect().top +
                window.pageYOffset -
                0.1 * vh;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }}
            type="button"
            className="uppercase transition-all duration-300 self-center lg:self-auto w-52 lg:w-64 h-12 text-xl lg:text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          >{t('Careers.Btn')}</button>
        </div>
        <Hiring />
      </div>
      <OpeningSection />
    </div>
  );
}
