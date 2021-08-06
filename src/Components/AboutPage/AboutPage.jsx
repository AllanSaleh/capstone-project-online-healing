import React from 'react';
import { useTranslation } from 'react-i18next';

import Payam from './Images/Payam.svg';

export default function AboutPage() {
  window.scrollTo(0, 0);

  const { t } = useTranslation();

  return (
    <div className="lg:h-firstsection pt-navbar">
      <div className="h-1/2 px-sides flex flex-col justify-evenly">
        <div>
          <div className="sm:text-title text-3xl">HEALING</div>
          <div className="sm:text-subtitle mt-4 text-gray-700 mb-8 text-xl">
            {t('AboutPage.WeAreHere')}
          </div>
        </div>
        <div className="sm:text-paragraph text-lg text-justify">{t('AboutPage.Description')}</div>
      </div>
      <div className="py-8 lg:py-0 px-sides h-1/2 flex justify-evenly items-center bg-blue-light sm:flex-row flex-col">
        <img className="lg:w-1/4 mb-4" src={Payam} alt="Payam" />
        <div className="lg:w-3/5 md:bg-blue-light">
          <div className="sm:text-title text-3xl mb-8">{t('AboutPage.Our')}</div>
          <div className="sm:text-subtitle text-lg text-justify">{t('AboutPage.Founding')}</div>
        </div>
      </div>
    </div>
  );
}
