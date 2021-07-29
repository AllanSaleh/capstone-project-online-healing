import React from 'react';
import Therapists from './Images/therapists.svg';

function Description() {
  return (
    <div className="text-left bg-yellow-primary h-section w-full px-sides m-">
      <div className="text-5xl w-7/12 font-normal pt-20">
        Professional, licensed, and vetted therapists that you can trust
      </div>
      <div className="pt-12 pb-16">
        <img src={Therapists} alt="therapists" />
      </div>
      <div className="text-lg w-8/12 pb-20">
        Tap into the world's largest network of licensed, accredited, and experienced therapists who
        can help you with a range of issues including depression, anxiety, relationships, trauma,
        grief, and more. with our therapists, you get the same professionalism and quality you would
        expect from an in-office therapist, but with the ability to communicate whenever and however
        you want.
      </div>
      <div>
        <button
          type="button"
          className=" pt-4 pb-4 pl-12 pr-12 text-subtitle rounded-md bg-blue-dark border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default Description;
