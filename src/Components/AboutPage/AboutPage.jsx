import React from 'react';

import Payam from './Images/Payam.svg';

export default function AboutPage() {
  window.scrollTo(0, 0);
  return (
    <div className="lg:h-firstsection pt-navbar">
      <div className="h-1/2 px-sides flex flex-col justify-evenly">
        <div>
          <div className="sm:text-title text-3xl">HEALING</div>
          <div className="sm:text-subtitle mt-4 text-gray-700 mb-8 text-xl">
            We are here to HELP!
          </div>
        </div>
        <div className="sm:text-paragraph text-lg text-justify">
          At Healing, wedd believe there is a better way to do things. A more valuable way where
          customers are earned rather than bought. We're obsessively passionate about it, and our
          mission is to help people achieve it. We focus on search engine optimization. It's one of
          understood and least transparent aspects of great marketing, and we see that as an
          opportunity. We're excited to simplify SEO for everyone through our software, education,
          and community.
        </div>
      </div>
      <div className="py-8 lg:py-0 px-sides h-1/2 flex justify-evenly items-center bg-blue-light sm:flex-row flex-col">
        <img className="lg:w-1/4 mb-4" src={Payam} alt="Payam" />
        <div className="lg:w-3/5 md:bg-blue-light">
          <div className="sm:text-title text-3xl mb-8">Our Founding</div>
          <div className="sm:text-subtitle text-lg text-justify">
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
