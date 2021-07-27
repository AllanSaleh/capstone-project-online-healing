import React from 'react';
import Send from './Send.svg';
import Twitter from './Twitter.svg';
import Facebook from './Facebook.svg';
import Google from './Google.svg';

export default function Footer() {
  return (
    <div className="flex justify-between px-sides items-center h-footer bg-yellow-primary md:text-sm">
      <div className="flex flex-col justify-between items-start h-40">
        <div>
          <div className="text-title leading-tight">Subscribe</div>
          <div className="text-paragraph text-gray-700">
            We'll never try to spam you or share your e-mail
          </div>
        </div>

        <div className="flex border-gray-700 border-2 h-12 rounded-lg">
          <input
            className="w-64 p-2 rounded-l-md"
            placeholder="Enter your E-Mail"
            type="email"
          />
          <button
            className="border-0 border-l-2 border-gray-700 p-2 bg-blue-dark rounded-r-md"
            type="button"
          >
            <img src={Send} alt="Send" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center h-40">
        <div className="flex justify-between items-center text-gray-700 text-paragraph">
          <a
            onClick={() => window.scrollTo(0, 0)}
            href="#"
            className="mx-4 hover:underline hover:text-blue-dark"
          >
            Home
          </a>
          <a
            onClick={() => window.scrollTo(0, 0)}
            href="#"
            className="mx-4 hover:underline hover:text-blue-dark"
          >
            Blogs
          </a>
          <a
            onClick={() => window.scrollTo(0, 0)}
            href="#"
            className="mx-4 hover:underline hover:text-blue-dark"
          >
            About
          </a>
          <a
            onClick={() => window.scrollTo(0, 0)}
            href="#"
            className="mx-4 hover:underline hover:text-blue-dark"
          >
            Contact Us
          </a>
        </div>

        <div className="flex justify-center items-center">
          <a href="#" target="_blank" className="mx-4">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="#" target="_blank" className="mx-4">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="#" target="_blank" className="mx-4">
            <img src={Google} alt="Google" />
          </a>
        </div>
      </div>
    </div>
  );
}
