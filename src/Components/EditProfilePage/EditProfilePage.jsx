import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

import ProfilePic from './Images/ProfilePic.svg';
import EditProfileButton from './EditProfileButton';
import ProfileInfoSection from './ProfileInfoSection';
import SecuritySection from './SecuritySection';

export default function EditProfilePage() {
  window.scrollTo(0, 0);
  const history = useHistory();
  const usersRef = firebase.firestore().collection('users');
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
    usersRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (loginStatus === null) history.replace('/')
        else if (doc.data().user_id === loginStatus.user_id) setCurrentUser(doc.data());
      });
    });
  }, []);

  console.log(currentUser);
  return (
    <div className="px-sides pt-navbar">
      <h3 className="text-lg lg:text-subtitle text-red-500 w-full text-center">
        {!currentUser.complete &&
          'Please fill all the fields with correct and valid details to complete your profile.'}
      </h3>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-8 lg:w-2/5 lg:p-4 lg:mx-2 text-center">
          <button type="button" className="hover:cursor-pointer">
            <img src={ProfilePic} alt="profile-pic" />
          </button>
        </div>
        <div className="w-full lg:w-3/5 p-4 mx-2">
          <ProfileInfoSection userProfile={currentUser} />
          <SecuritySection userProfile={currentUser} />
          <div className="flex flex-col lg:flex-row justify-between my-8">
            <EditProfileButton
              text="save changes"
              color="green-500"
              margin="mr-4"
              bgOpacity="bg-opacity-70"
            />
            <EditProfileButton
              text="delete account"
              color="red-500"
              margin="mx-4"
              bgOpacity="bg-opacity-70"
            />
            <EditProfileButton
              text="cancel"
              color="yellow-300"
              margin="ml-4"
              bgOpacity="bg-opacity-70"
            />
          </div>

          <div className="my-16">
            <h1 className="text-3xl lg:text-title capitalize mb-8 lg:mb-16">
              Payment Methods & Tickets
            </h1>
            <div className="text-center lg:text-left lg:inline-block mx-0 xl:mr-4">
              <h3 className="text-subtitle capitalize mb-2">
                {currentUser?.cards?.length} crads added
              </h3>
              <Link to="/SavedCards">
                <EditProfileButton text="show cards" color="blue-dark" />
              </Link>
            </div>
            <div className="text-center lg:text-left lg:inline-block mx-0 xl:ml-4">
              <h3 className="text-subtitle capitalize mb-2">
                {currentUser?.tickets} tickets remaining
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
