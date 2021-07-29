import React from 'react';

import Payam from './Images/Payam.svg';

export default function AboutPage() {
  return (
    <div className="h-firstsection">
      <div className="h-1/2 px-sides pt-navbar">
        <div className="text-title mt-8">HEALING</div>
        <div className="text-subtitle text-gray-700 mb-8">A Cool One Liner!</div>
        <div className="text-paragraph">
          At Healing, wedd believe there is a better way to do things. A more valuable way where
          customers are earned rather than bought. We're obsessively passionate about it, and our
          mission is to help people achieve it. We focus on search engine optimization. It's one of
          the least understood and least transparent aspects of great marketing, and we see that as
          an opportunity. We're excited to simplify SEO for everyone through our software,
          education, and community.
        </div>
      </div>
      <div className="h-1/2 flex justify-around items-center bg-blue-light px-sides">
        <img className="w-1/3" src={Payam} alt="Payam" />
        <div className="w-1/2">
          <div className="text-title">Our Founding</div>
          <div className="text-subtitle">
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
