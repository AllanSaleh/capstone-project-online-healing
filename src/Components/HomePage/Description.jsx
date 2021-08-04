import React from 'react';
import { useHistory } from 'react-router-dom';

import Therapists from './Images/therapists.svg';

export default function Description({ user }) {
  const history = useHistory();

  const GoToRoute = () => {
    if (user.login && user.complete) history.push('/Booking1');
    else if (!user.login) alert('Please LogIn First!');
    else alert('Please Complete Your Profile in Profile Settings First!');
  };

  return (
    <div className="text-left bg-yellow-primary h-section w-full px-sides m-">
      <div className="lg:text-5xl text-lg font-bold lg:w-7/12 lg:font-normal lg:pt-20 pt-20 uppercase">
        Professional, licensed, and vetted therapists that you can trust
      </div>
      <div className="pt-12 pb-16">
        <img src={Therapists} alt="therapists" />
      </div>
      <div className="lg:text-lg text-sm lg:w-8/12 lg:pb-20">
        Tap into the world's largest network of licensed, accredited, and experienced therapists who
        can help you with a range of issues including depression, anxiety, relationships, trauma,
        grief, and more. with our therapists, you get the same professionalism and quality you would
        expect from an in-office therapist, but with the ability to communicate whenever and however
        you want.
      </div>
      <div>
        <button
          onClick={GoToRoute}
          type="button"
          className="mt-6 ml-4 py-2 px-6 lg:py-4 lg:px-6 lg:text-subtitle text-base rounded-md bg-blue-dark border hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
}
