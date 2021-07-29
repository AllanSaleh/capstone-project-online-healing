import React from 'react';

import Blog1 from './Images/Blog1.svg';
import Send from '../Footer/Images/Send.svg';
import Blog2 from './Images/Blog2.svg';

export default function Recommended() {
  return (
    <div className="px-sides h-section flex flex-col justify-around">
      <div className="flex flex-col justify-between items-start h-40">
        <div>
          <div className="text-title leading-tight">Sign Up For The Healing Blog</div>
          <div className="text-paragraph text-gray-700">
            Weekly, Ad-Free Blogs That Help You Stay In The Know!
          </div>
        </div>

        <div className="flex  border-2 border-gray-600 h-12 rounded-lg">
          <input className="w-64 p-2 rounded-l-md" placeholder="Enter your E-Mail" type="email" />
          <button
            className="border-0 border-l-2 border-gray-600 p-2 bg-blue-dark rounded-r-md"
            type="button"
          >
            <img src={Send} alt="Send" />
          </button>
        </div>
      </div>

      <div>
        <div className="uppercase text-subtitle mb-8">recommended for you</div>

        <div className="flex justify-between">
          <img className="w-full mr-8" src={Blog2} alt="blog2" />
          <img className="w-full" src={Blog1} alt="blog1" />
        </div>
      </div>
    </div>
  );
}
