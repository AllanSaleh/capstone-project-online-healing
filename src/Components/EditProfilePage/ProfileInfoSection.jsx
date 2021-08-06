import React from 'react';
import { useTranslation } from 'react-i18next';

import ProfileInputField from './ProfileInputField';
import BirthDateIcon from './Images/BirthDateIcon.svg';
import Plus from './Images/Plus.svg';

export default function ProfileInfoSection({ userProfile }) {
  const { t } = useTranslation();
  return (
    <form className="mb-8">
      <h1 className="text-3xl lg:text-title uppercase">{t('Edit.Info')}</h1>

      <ProfileInputField
        title={t('Edit.FullName')}
        type="text"
        id="full-name"
        value={userProfile?.fullname}
      />

      <div className="flex items-center my-6">
        <label
          htmlFor="education-level"
          className="text-sm md:text-lg lg:text-subtitle capitalize inline-block w-1/3"
        >{t('Edit.Education')}</label>
        <div className="w-2/3 inline-flex items-center border border-black border-opacity-20 rounded-lg px-6 py-2">
          <select
            id="education-level"
            name="education-level"
            className="w-full h-full outline-none py-1"
          >
            <option value="1">bachelor</option>
            <option value="2">bachelor</option>
            <option value="3">bachelor</option>
            <option value="4">bachelor</option>
          </select>
        </div>
      </div>
      <ProfileInputField title="hobbies" type="text" id="hobbies" value={userProfile?.hobbies} />

      <div className="flex items-center my-6">
        <label
          htmlFor="family-members"
          className="text-sm md:text-lg lg:text-subtitle capitalize inline-block w-1/3"
        >{t('Edit.Members')}</label>
        <div className="w-2/12 lg:w-1/12 inline-flex items-center border border-black border-opacity-20 rounded-lg px-4">
          <input
            type="text"
            id="family-members"
            name="family-members"
            className="w-full h-full outline-none py-3 placeholder-black text-center"
            placeholder={userProfile?.family_size}
          />
        </div>
        <span className="text-sm md:text-lg lg:text-subtitle capitalize mx-4">member(s)</span>
      </div>

      <div className="flex items-center my-6">
        <label
          htmlFor="gender"
          className="sm:text-sm md:text-lg lg:text-subtitle capitalize inline-block w-1/3"
        >{t('Edit.Gender')}</label>
        <div className="w-2/3 inline-flex items-center border border-black border-opacity-20 rounded-lg px-6 py-2">
          <select id="gender" name="gender" className="w-full h-full outline-none py-1">
            <option value="1">{t('Edit.Male')}</option>
            <option value="2">{t('Edit.Female')}</option>
            <option value="3">{t('Edit.Other')}</option>
          </select>
        </div>
      </div>

      <ProfileInputField
        title={t('Edit.Birth')}
        type="text"
        id="birth-date"
        icon={BirthDateIcon}
        value={userProfile?.birthdate}
      />
      <ProfileInputField title="email" type="email" id="email" value={userProfile?.email} />
      <ProfileInputField
        title={t('Edit.Phone')}
        type="text"
        id="phone-number"
        value={userProfile?.phone_number}
      />
      {/* <ProfileInputField title="upload ID" type="file" id="upload-id" icon={Plus} /> */}
    </form>
  );
}
