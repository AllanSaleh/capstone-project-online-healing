import React from 'react';

import Payam from './Images/Payam.svg';

export default function AboutPage() {
  return (
    <div className="h-firstsection">
      <div className="h-1/2 px-sides pt-navbar md:text-sm lg:text-lg md:h-1/2 md:mb-10 sm:text-sm	mb-20">
        <div className="sm:text-title mt-8 text-sm 	">HEALING</div>
        <div className="sm:text-subtitle  text-gray-700 mb-8  text-sm mt-5	">A Cool One Liner!</div>
        <div className="sm:text-paragraph  text-sm leading-snug 	">
          At Healing, wedd believe there is a better way to do things. A more valuable way where
          customers are earned rather than bought. We're obsessively passionate about it, and our
          mission is to help people achieve it. We focus on search engine optimization. It's one of
          the least understood and least transparent aspects of great marketing, and we see that as
          an opportunity. We're excited to simplify SEO for everyone through our software,
          education, and community.
        </div>
      </div>
      <div className="sm:h-1/2 h-3/4 flex justify-around  items-center bg-blue-light px-sides relative py-56 sm:flex-row flex-col  ">
        <img className="w-full sm:w-1/3" src={Payam} alt="Payam" />
        <div className="w-full sm:1/2 sm:mb-10 sm:mt-10	 md:bg-blue-light sm:ml-10  ">
          <div className=" sm:text-title text-sm 	my-8	">Our Founding</div>
          <div className="  sm:text-subtitle text-sm leading-snug	">
            Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started
            as a blog and an online community where some of the world's therapists shared their
            research and ideas. We launched the Beginner's Guide to Therapy and our first study, and
            that hub of industry expertise transformed into a small consulting firm and led us to
            create the Online Therapist of today!
          </div>
        </div>
      </div>
    </div>
  );
}