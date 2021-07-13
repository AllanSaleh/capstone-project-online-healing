import React from 'react';
import ProfilePic from '../../Icons/ProfilePic.svg';
import EditProfileButton from './EditProfileButton';
import ProfileInfoSection from './ProfileInfoSection';
import SecuritySection from './SecuritySection';

const EditProfile = () => (
  <div className="px-sides pt-navbar">
    <h3 className="text-subtitle text-red-500 w-full text-center">
      Please fill all the fields with correct and valid details to complete your profile.
    </h3>
    <div className="flex">
      <div className="w-2/5 p-4 mx-2 text-center">
        <button className="hover:cursor-pointer">
          <img src={ProfilePic} alt="profile-pic" />
        </button>
      </div>
      <div className="w-3/5 p-4 mx-2">
        <ProfileInfoSection />
        <SecuritySection />
        <div className="flex justify-between my-8">
          <EditProfileButton
            text="save changes"
            bgColor="bg-green-300"
            textColor="text-green-800"
            margin="mr-4"
            bgOpacity="bg-opacity-70"
          />
          <EditProfileButton
            text="delete account"
            bgColor="bg-red-400"
            textColor="text-red-800"
            margin="mx-4"
            bgOpacity="bg-opacity-70"
          />
          <EditProfileButton
            text="cancel"
            bgColor="bg-yellow-300"
            textColor="text-yellow-800"
            margin="ml-4"
            bgOpacity="bg-opacity-70"
          />
        </div>
        <div className="my-16">
          <h1 className="text-title capitalize mb-16">Payment Methods & Tickets</h1>
          <div className="inline-block mr-4">
            <h3 className="text-subtitle capitalize mb-2">3 crads added</h3>
            <EditProfileButton text="show cards" />
          </div>
          <div className="inline-block ml-4">
            <h3 className="text-subtitle capitalize mb-2">10 tickets remaining</h3>
            <EditProfileButton text="buy tickets" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EditProfile;
