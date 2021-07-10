import React from 'react';
import ProfilePic from '../../Icons/ProfilePic.svg';
import EditProfileSection from './EditProfileSection';

const EditProfile = () => (
  <div className="px-sides pt-navbar">
    <h3 className="text-subtitle text-red-500 w-full text-center">
      Please fill all the fields with correct and valid details to complete your profile.
    </h3>
    <div className="flex">
      <div className="w-2/5 p-4 mx-2 text-center">
        <button
          className="hover:cursor-pointer"
          onClick={() => {
            console.log('profile pic clicked');
          }}
        >
          <img src={ProfilePic} alt="profile-pic" />
        </button>
      </div>
      <div className="w-3/5 p-4 mx-2">
        <EditProfileSection title="profile info" />
      </div>
    </div>
  </div>
);

export default EditProfile;
