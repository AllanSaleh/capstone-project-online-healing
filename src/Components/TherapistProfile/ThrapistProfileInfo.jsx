import React from 'react';
import ProfilePic from '../../Icons/ProfilePic.svg';

const TherapistProfileInfo = () => (
  <div className="flex px-sides pt-navbar">
    <div className="w-2/5 p-4 mx-2 text-center">
      <button className="hover:cursor-pointer">
        <img src={ProfilePic} alt="profile-pic" />
      </button>
    </div>
  </div>
);

export default TherapistProfileInfo;
