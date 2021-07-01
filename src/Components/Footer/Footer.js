import React from 'react';
import Send from './Send.svg';
import Twitter from './Twitter.svg';
import Facebook from './Facebook.svg';
import Google from './Google.svg';

export default function Footer() {
  return (
    <div className="flex justify-between px-sides items-center h-footer bg-yellow-primary">

      <div className="flex flex-col justify-between items-start h-40">
          
        <div className="text-title">Subscribe</div>
        <div className="text-paragraph text-gray-700">
          We'll never try to spam you or share your e-mail
        </div>

        <div className="flex border-gr">
          <input placeholder="Enter your E-Mail" type="email" />
          <button type="button">
            <img src={Send} alt="Send" />
          </button>
        </div>

      </div>

      <div>

        <div className="flex justify-between items-center text-gray-700 text-paragraph">
          <div className="px-4">Home</div>
          <div className="px-4">Blogs</div>
          <div className="px-4">About</div>
          <div className="px-4">Contact Us</div>
        </div>

        <div className="flex justify-center items-center">
          <img className="px-4" src={Twitter} alt="Twitter" />
          <img className="px-4" src={Facebook} alt="Facebook" />
          <img className="px-4" src={Google} alt="Google" />
        </div>

      </div>

    </div>
  );
}
