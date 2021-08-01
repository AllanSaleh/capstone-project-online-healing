import React from 'react';
import { useHistory } from 'react-router-dom';

import HpIllustration from './Images/HP_illustration.svg';
import Background from './Images/Background.svg';

export default function Landing({ user }) {
  const history = useHistory();

  const GoToRoute = () => {
    if (user.login && user.complete) history.push('/Booking1');
    else if (!user.login) alert('Please LogIn First!');
    else alert('Please Complete Your Profile in Profile Settings First!');
  };

  return (
    <div className="h-firstsection mt-navbar">
      {/* background pattern */}
      <div className="absolute top-0 left-0 z-0">
        <img src={Background} alt="Background" />
      </div>

      {/* content */}
      <div className="flex lg:flex-row flex-col lg:justify-between lg:m-56 relative z-0">
        <div className="pt-20 pb-28 flex flex-col lg:transform lg:translate-y-0 transform translate-y-56">
          <div className="lg:text-4xl text-base pl-4">WE ARE HERE TO</div>
          <div className="lg:text-9xl  text-6xl pl-4">HELP</div>
          <div>
            <button
              onClick={() => GoToRoute()}
              type="button"
              className="mt-6 ml-4 py-2 px-6 lg:py-4 lg:px-6 lg:text-subtitle text-base rounded-md bg-blue-dark border hover:bg-white hover:text-blue-dark hover:border-blue-dark"
            >
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
        <div className="transform -translate-y-72 w-64 lg:transform lg:-translate-y-0 lg:w-auto lg:ml-0 ml-16">
          <img src={HpIllustration} alt="HP_illustration" />
        </div>
      </div>
    </div>
  );
}
