import React from 'react';
import ProfileInputField from './ProfileInputField';
import BirthDateIcon from '../../Icons/BirthDateIcon.svg';
import ArrowDown from '../../Icons/ArrowDown.svg';
import Plus from '../../Icons/Plus.svg';

const ProfileInfoSection = () => (
  <form className="my-4">
    <h1 className="text-title uppercase">Profile Info</h1>
    <ProfileInputField title="full name" type="text" id="full-name" />
    <ProfileInputField title="hobbies" type="text" id="hobbies" />
    <ProfileInputField title="birth date" type="text" id="birth-date" icon={BirthDateIcon} />
    <ProfileInputField title="email" type="email" id="email" />
    <ProfileInputField title="phone number" type="text" id="phone-number" />
    <ProfileInputField title="upload ID" type="file" id="upload-id" icon={Plus} />
  </form>
);

export default ProfileInfoSection;
