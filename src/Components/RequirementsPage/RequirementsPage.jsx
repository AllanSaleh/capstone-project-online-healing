import React from 'react';
import { Link } from 'react-router-dom';

import Frame from './Images/Frame.svg';

export default function RequirementsPage() {
  window.scrollTo(0, 0);
  return (
    <div className="pt-navbar px-sides  pb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <div className="uppercase text-2xl lg:text-title mt-8 whitespace-nowrap">
            Why work
            <br />
            with Healing?
          </div>
          <div className="text-jusfify space-y-6 w-3/4 mt-8">
            <p className="lg:text-subtitle text-lg">Reliable Income</p>
            <p className="lg:text-paragraph text-justify text-gray-700">
              Over 10,000 people sign up on BetterHelp every day looking for a counselor to help
              with life’s challenges. BetterHelp can be your main source of income ("full time") or
              a supplement to your current work.
            </p>
          </div>
          <div className="text-jusfify space-y-6 w-3/4 mt-8">
            <p className="lg:text-subtitle text-lg">Focus on Counseling</p>
            <p className="lg:text-paragraph text-justify text-gray-700">
              No need to worry about costs from acquiring clients, billing, support or operations.
              Let us handle the fees and paperwork so you can focus on what you do best!
            </p>
          </div>
        </div>
        <img src={Frame} alt="illustration" className="my-8 lg:h-60 w-full lg:mt-60" />
      </div>
      <div className="mt-8 flex flex-col items-center lg:items-start">
        <div>
          <p className="lg:text-title text-3xl">Requirements</p>
          <ul className="text-jusfify w-3/4 lg:text-paragraph mt-8 list-disc px pl-12 text-gray-700">
            <li>Licensed by a State Board to provide counseling</li>
            <li>Experience in counseling for adults, couples, and/or teens</li>
            <li>Excellent writing skills</li>
            <li>Reliable Internet connection</li>
            <li>Currently residing in the US</li>
          </ul>
        </div>
        <Link to="/TherapistCreate">
          <button
            type="button"
            className="mt-6 w-48 h-12 text-lg lg:text-subtitle bg-blue-dark rounded-lg border border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark uppercase"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
