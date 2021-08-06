import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function ThankYouPage() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  const location = useLocation();
  return (
    <div className="h-firstsection pt-navbar px-sides">
      <div className="text-center lg:text-left flex flex-col justify-evenly items-center lg:items-start h-full lg:h-1/2">
        <div>
          <div className="text-4xl lg:text-title">{t('ThankYou')}</div>
          <div className="text-xl mt-4 lg:text-subtitle text-gray-700">
            {location.state.map((str) => (
              <p>{str}</p>
            ))}
          </div>
        </div>
        <Link to="/">
          <button
            type="button"
            className="w-64 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          >
            {t('Booking.BackHome')}
          </button>
        </Link>
      </div>
    </div>
  );
}
