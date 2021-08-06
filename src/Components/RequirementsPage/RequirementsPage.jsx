import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Frame from './Images/Frame.svg';

export default function RequirementsPage() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  return (
    <div className="pt-navbar px-sides  pb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <div className="uppercase text-2xl lg:text-title mt-8">{t('Require.Why')}</div>
          <div className="text-jusfify space-y-6 w-3/4 mt-8">
            <p className="lg:text-subtitle text-lg">{t('Require.Income')}</p>
            <p className="lg:text-paragraph text-justify text-gray-700">{t('Require.Explain')}</p>
          </div>
          <div className="text-jusfify space-y-6 w-3/4 mt-8">
            <p className="lg:text-subtitle text-lg">{t('Require.Focus')}</p>
            <p className="lg:text-paragraph text-justify text-gray-700">{t('Require.Worry')}</p>
          </div>
        </div>
        <img src={Frame} alt="illustration" className="my-8 lg:h-60 w-full lg:mt-60" />
      </div>
      <div className="mt-8 flex flex-col items-center lg:items-start">
        <div>
          <p className="lg:text-title text-3xl">{t('Require.Require')}</p>
          <ul className="text-jusfify w-3/4 lg:text-paragraph mt-8 list-disc px pl-12 text-gray-700">
            <li>{t('Require.License')}</li>
            <li>{t('Require.Exp')}</li>
            <li>{t('Require.Skill')}</li>
            <li>{t('Require.Internet')}</li>
            <li>{t('Require.Irq')}</li>
          </ul>
        </div>
        <Link to="/TherapistCreate">
          <button
            type="button"
            className="mt-6 w-48 h-12 text-lg lg:text-subtitle bg-blue-dark rounded-lg border border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark uppercase"
          >
            {t('Require.Start')}
          </button>
        </Link>
      </div>
    </div>
  );
}
