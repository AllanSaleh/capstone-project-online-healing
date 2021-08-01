import React from 'react';
import { Link } from 'react-router-dom';

import ProfilePic from './Images/ProfilePic.svg';
import EditProfileButton from './EditProfileButton';
import ProfileInfoSection from './ProfileInfoSection';
import SecuritySection from './SecuritySection';

export default function EditProfilePage() {
  window.scrollTo(0, 0);
  return (
    <div className="px-sides pt-navbar">
      <h3 className="text-lg lg:text-subtitle text-red-500 w-full text-center">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </h3>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-8 lg:w-2/5 lg:p-4 lg:mx-2 text-center">
          <button type="button" className="hover:cursor-pointer">
            <img src={ProfilePic} alt="profile-pic" />
          </button>
        </div>
        <div className="w-full lg:w-3/5 p-4 mx-2">
          <ProfileInfoSection />
          <SecuritySection />
          <div className="flex flex-col lg:flex-row justify-between my-8">
            <EditProfileButton
              text="save changes"
              bgColor="bg-green-300"
              color="green-500"
              margin="mr-4"
              bgOpacity="bg-opacity-70"
            />
            <EditProfileButton
              text="delete account"
              bgColor="bg-red-400"
              color="red-500"
              margin="mx-4"
              bgOpacity="bg-opacity-70"
            />
            <EditProfileButton
              text="cancel"
              bgColor="bg-yellow-300"
              color="yellow-300"
              margin="ml-4"
              bgOpacity="bg-opacity-70"
            />
          </div>

          <div className="my-16">
            <h1 className="text-3xl lg:text-title capitalize mb-8 lg:mb-16">
              Payment Methods & Tickets
            </h1>
            <div className="text-center lg:text-left lg:inline-block mx-0 lg:mr-4">
              <h3 className="text-subtitle capitalize mb-2">3 crads added</h3>
              <Link to="/SavedCards">
                <EditProfileButton text="show cards" color="blue-dark" />
              </Link>
            </div>
            <div className="text-center lg:text-left lg:inline-block mx-0 lg:ml-4">
              <h3 className="text-subtitle capitalize mb-2">
                10 tickets remaining
              </h3>
              <Link to={{ pathname: '/', state: true }}>
                <EditProfileButton text="buy tickets" color="blue-dark" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
