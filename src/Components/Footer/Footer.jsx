import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Send from './Images/Send.svg';
import Twitter from './Images/Twitter.svg';
import Facebook from './Images/Facebook.svg';
import Google from './Images/Google.svg';

export default function Footer() {
  const history = useHistory();

  const [email, setEmail] = useState('');

  const subscribe = () => {
    if (email.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]/)) {
      window.scrollTo(0, 0);
      history.push({
        pathname: '/ThankYou',
        state: 'You email has been added to the mailing list successfully!',
      });
    } else alert('Please enter a valid E-Mail!');
  };
  return (
    <div className="py-4 flex flex-col lg:flex-row justify-between px-sides items-center lg:h-footer bg-yellow-primary">
      <div className="flex flex-col justify-between items-center text-center lg:text-left lg:items-start h-40">
        <div>
          <div className="text-3xl lg:text-title">Subscribe</div>
          <div className="text-xl lg:text-paragraph lg:mt-4 text-gray-700">
            We'll never try to spam you or share your e-mail
          </div>
        </div>

        <div className="flex border-gray-700 border-2 h-12 rounded-lg">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 p-2 rounded-l-md"
            placeholder="Enter your E-Mail"
            type="email"
          />
          <button
            onClick={() => subscribe()}
            className="border-0 border-l-2 border-gray-600 p-2 bg-blue-dark rounded-r-md"
            type="button"
          >
            <img src={Send} alt="Send" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center h-40">
        <div className="w-72 lg:w-96 flex justify-between items-center text-gray-700 text-lg lg:text-paragraph">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline hover:text-blue-dark"
          >
            Home
          </Link>
          <Link
            to="/Blog"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline hover:text-blue-dark"
          >
            Blogs
          </Link>
          <Link
            to="/About"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline hover:text-blue-dark"
          >
            About
          </Link>
          <Link
            to="/Contact"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:underline hover:text-blue-dark"
          >
            Contact Us
          </Link>
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

        <div className="flex justify-center items-center">
          <label className="w-24">Language:</label>
          <select className="w-24 p-1 border-gray-700 border-2 rounded-lg">
            <option value="En" className="py-1 text-paragraph text-gray-700">
              English
            </option>
            <option value="Ku" className="py-1 text-paragraph text-gray-700">
              كوردى
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
