import React from 'react';
import ProfilePic from './ProfilePic.svg';
import ProfileInputField from '../ProfileInfo/ProfileInputField';
import BirthDateIcon from './BirthDateIcon.svg';

const TherapistProfile = () => (
  <div className="flex px-sides pt-navbar h-firstsection">
    <div className="w-2/5 p-4 mx-2 text-center">
      <button type="button" className="hover:cursor-pointer">
        <img src={ProfilePic} alt="profile-pic" />
      </button>
    </div>
    <div className="w-3/5 p-4 mx-2">
      <h1 className="text-title uppercase">therapist profile</h1>
      <ProfileInputField title="full name" type="text" id="full-name" />
      <div className="flex my-6">
        <div htmlFor="bio" className="text-subtitle capitalize inline-block w-1/3">
          bio
        </div>
        <div className="w-2/3 h-64 inline-flex items-center border border-black border-opacity-20 rounded-lg pl-4">
          <textarea id="bio" name="bio" className="w-11/12 h-full outline-none py-3 resize-none" />
        </div>
      </div>
      <ProfileInputField title="birth date" type="text" id="birth-date" icon={BirthDateIcon} />
      <ProfileInputField title="phone number" type="text" id="phone-number" />
    </div>
  </div>
);

export default TherapistProfile;
