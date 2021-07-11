import React from 'react';
import ProfileInputField from './ProfileInputField';
import BirthDateIcon from '../../Icons/BirthDateIcon.svg';

const EditProfileSection = ({ title, fileds }) => (
  <div>
    <h1 className="text-title uppercase">{title}</h1>
    <ProfileInputField title= 'full name' type="text" id="full-name" icon={BirthDateIcon}/>
    <ProfileInputField title= 'full name' type="text" id="full-name" icon={BirthDateIcon}/>
    <ProfileInputField title= 'full name' type="text" id="full-name" icon={BirthDateIcon}/>
    <ProfileInputField title= 'full name' type="text" id="full-name" icon={BirthDateIcon}/>
    <ProfileInputField title= 'full name' type="text" id="full-name" icon={BirthDateIcon}/>
    <ProfileInputField title= 'full name' type="text" id="full-name" icon={BirthDateIcon}/>
    <ProfileInputField title= 'full name' type="text" id="full-name" icon={BirthDateIcon}/>
  </div>
);

export default EditProfileSection;
