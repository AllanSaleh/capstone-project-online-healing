import React from 'react';
import Payam from './Payam.svg';

export default function Founding() {
  return (
    <div className="flex justify-around items-center bg-blue-light px-sides">
      <img src={Payam} alt="Payam" />
      <div>
        <div className="text-title">Our Founding</div>
        <div className="text-subtitle">
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
