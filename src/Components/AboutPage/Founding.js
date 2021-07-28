import React from 'react';
import Payam from './Payam.svg';

export default function Founding() {
  return (
    <div className="sm:h-1/2 h-3/4 flex justify-around  items-center bg-blue-light px-sides relative py-56 sm:flex-row flex-col  ">
      <img className="w-full sm:w-1/3" src={Payam} alt="Payam" />
      <div className="w-full sm:1/2 sm:mb-10 sm:mt-10	 md:bg-blue-light sm:ml-10  ">
        <div className=" sm:text-title text-sm 	my-8	">Our Founding</div>
        <div className="  sm:text-subtitle text-sm leading-snug	">
          Healing was founded by Payam Abubakr in 2021. It was called Healing
          Online, and started as a blog and an online community where some of
          the world's therapists shared their research and ideas. We launched
          the Beginner's Guide to Therapy and our first study, and that hub of
          industry expertise transformed into a small consulting firm and led us
          to create the Online Therapist of today!
        </div>
      </div>
    </div>
  );
}
