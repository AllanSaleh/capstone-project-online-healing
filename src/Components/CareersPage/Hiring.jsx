import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hiring() {
  const { t } = useTranslation();

  return (
    <div className="bg-yellow-primary px-sides h-2/5 flex flex-col justify-evenly py-4">
      <div className="text-3xl lg:text-title">{t('Open.Hiring')}</div>
      <div className="text-xl lg:text-subtitle text-gray-600 mt-4 text-justify">
        {t('Open.HiringIntro')}
      </div>
    </div>
  );
}
