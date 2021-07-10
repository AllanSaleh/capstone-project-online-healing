import React from 'react';
import ProfilePic from '../../Icons/ProfilePic.svg';

const EditProfile = () => (
  <div className="px-sides pt-navbar">
    <h3 className="text-subtitle text-red-500 w-full text-center">
      Please fill all the fields with correct and valid details to complete your profile.
    </h3>
    <div className="flex">
      <div className="w-1/3 p-4 mx-3 border border-black text-center">
        <button
          className="hover:cursor-pointer"
          onClick={() => {
            console.log('profile pic clicked');
          }}
        >
          <img src={ProfilePic} alt="profile-pic" />
        </button>
      </div>
      <div className="w-2/3 border border-black p-4 mx-3" />
    </div>
  </div>
);

export default EditProfile;
