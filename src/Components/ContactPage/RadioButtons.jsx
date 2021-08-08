import React from 'react';
import { useTranslation } from 'react-i18next';

import ContactPic from './Images/ContactPic.svg';

export default function RadioButtons({ choiceCheck }) {
  const { t } = useTranslation();
  const choose = (value) => choiceCheck(value);

  const radios = [
    { value: 'ServiceQuestion', text: t('Contact.Choice1') },
    {
      value: 'ClientSupport',
      text: t('Contact.Choice2'),
    },
    {
      value: 'CouncelorInterest',
      text: t('Contact.Choice3'),
    },
    {
      value: 'CounselorSupport',
      text: t('Contact.Choice4'),
    },
    {
      value: 'BusinessInquiry',
      text: t('Contact.Choice5'),
    },
    {
      value: 'OrganizationInterest',
      text: t('Contact.Choice6'),
    },
    { value: 'BillingQuestion', text: t('Contact.Choice7') },
  ];
  return (
    <div className="lg:h-firstsection pt-navbar px-sides flex flex-col justify-evenly w-full">
      <div>
        <div className="text-2xl sm:text-title sm:mb-0 mb-3">{t('Contact.Title')}</div>
        <div className="sm:text-subtitle sm:mb-0 mb-10  text-gray-700 md:text-sm lg:text-xl lg:text-gray-700 lg:text-subtitle md:mt-5 md:flex-col md:justify-evenly md:flex">
          {t('Contact.Subtitle')}
        </div>
      </div>

      <div className="flex justify-between sm:flex-row flex-col">
        <div>
          <div className="text-subtitle mb-4 text-sm sm:text-lg">{t('Contact.Type')}</div>
          <div className="flex flex-col justify-between">
            {radios.map((radio) => (
              <div className="flex ml-4 my-2">
                <input
                  onChange={(e) => choose(e.target.value)}
                  name="ContactRadio"
                  className="my-2 mr-4"
                  type="radio"
                  value={radio.value}
                />
                <div className="text-paragraph sm:text-lg text-xm">{radio.text}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={ContactPic} className="sm:block hidden" alt="contact pic" />
      </div>
    </div>
  );
}
