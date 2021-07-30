import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Blog1 from './Images/Blog1.svg';
import Send from '../Footer/Images/Send.svg';
import Blog2 from './Images/Blog2.svg';

export default function Recommended() {
  const history = useHistory();

  const [email, setEmail] = useState('');

  const subscribe = () => {
    if (email.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]/))
      history.push({
        pathname: '/ThankYou',
        state: 'You email has been added to the mailing list successfully!',
      });
    else alert('Please enter a valid E-Mail!');
  };

  return (
    <div className="px-sides lg:h-section flex flex-col justify-around">
      <div className="flex flex-col justify-between items-start lg:h-40">
        <div>
          <div className="text-3xl lg:text-title leading-tight">Sign Up For The Healing Blog</div>
          <div className="text-lg lg:text-paragraph text-gray-700">
            Weekly, Ad-Free Blogs That Help You Stay In The Know!
          </div>
        </div>

        <div className="flex  border-2 border-gray-600 h-12 rounded-lg">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 p-2 rounded-l-md"
            placeholder="Enter your E-Mail"
            type="email"
          />
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              subscribe();
            }}
            className="border-0 border-l-2 border-gray-600 p-2 bg-blue-dark rounded-r-md"
            type="button"
          >
            <img src={Send} alt="Send" />
          </button>
        </div>
      </div>

      <div>
        <div className="uppercase text-xl lg:text-subtitle mt-8 lg:mt-0 lg:mb-8">
          recommended for you
        </div>

        <div className="h-96 lg:h-auto flex flex-col lg:flex-row justify-evenly lg:justify-between">
          <img
            className="cursor-pointer border-4 border-transparent border-dashed hover:border-blue-dark w-full lg:mr-8"
            src={Blog2}
            alt="blog2"
          />
          <img
            className="cursor-pointer border-4 border-transparent border-dashed hover:border-blue-dark w-full"
            src={Blog1}
            alt="blog1"
          />
        </div>
      </div>
    </div>
  );
}
