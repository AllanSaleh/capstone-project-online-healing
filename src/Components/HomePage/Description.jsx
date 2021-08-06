import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import Therapists from './Images/therapists.svg';

export default function Description({ user }) {
  const history = useHistory();
  const { t } = useTranslation();

  const GoToRoute = () => {
    if (user.login && user.complete) history.push('/Booking1');
    else if (!user.login) alert(t('HomePage.LoginAlert'));
    else alert(t('HomePage.CompleteAlert'));
  };

  return (
    <div className="text-left bg-yellow-primary h-section w-full px-sides m-">
      <div className="lg:text-5xl text-lg font-bold lg:w-7/12 lg:font-normal lg:pt-20 pt-20 uppercase">
        {t('HomePage.Therapist')}
      </div>
      <div className="pt-12 pb-16">
        <img src={Therapists} alt="therapists" />
      </div>
      <div className="lg:text-lg text-sm lg:w-8/12 lg:pb-20">{t('HomePage.TherapistInfo')}</div>
      <div>
        <button
          onClick={GoToRoute}
          type="button"
          className="uppercase mt-6 ml-4 py-2 px-6 lg:py-4 lg:px-6 lg:text-subtitle text-base rounded-md bg-blue-dark border hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          {t('HomePage.Book')}
        </button>
      </div>
    </div>
  );
}
