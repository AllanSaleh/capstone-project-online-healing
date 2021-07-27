import React from 'react';
import Payam from './Payam.svg';

export default function Founding() {
  return (
    <div className="h-1/2 flex justify-around items-center bg-blue-light px-sides relative md:text-sm	lg:text-xl sm:text-sm	">
      <img className="w-1/3 md:text-sm md:w-1/3 sm:w-1/3" src={Payam} alt="Payam" />
      <div className="w-1/2 md:text-sm lg:text-xl sm:text-sm sm:mb-10sm:mt-10	 md:bg-blue-light  ">
        <div className="text-title md:text-sm lg:text-xl sm:text-sm	">Our Founding</div>
        <div className="text-subtitle md:text-sm lg:text-xl sm:text-sm md:text-paragraph">
          Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as
          a blog and an online community where some of the world's therapists shared their research
          and ideas. We launched the Beginner's Guide to Therapy and our first study, and that hub
          of industry expertise transformed into a small consulting firm and led us to create the
          Online Therapist of today!
        </div>
      </div>
    </div>
  );
}
