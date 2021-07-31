import React from 'react';
import { Link } from 'react-router-dom';

import SignupImage from './Images/SignupImage.svg';
import Facebook from './Images/Facebook.svg';
import Google from './Images/Google.svg';
import Or from './Images/or.svg';

export default function SignUpPage() {
  window.scrollTo(0, 0);
  return (
    <div className=" flex flex-col lg:flex lg:flex-row items-center justify-evenly max-h-full lg:-mt-20 mt-20 lg:h-firstsection">
      <div className="lg:w-auto w-48">
        <img src={SignupImage} alt="SignupImage" />
      </div>
      <div className="lg:w-auto transform translate-y-9 w-72 lg:transform lg:translate-y-0">
        <div className="lg:text-5xl text-3xl lg:text-left text-center lg:pb-16 ">SIGN UP NOW</div>

        <div className="lg:h-3/5  h-auto flex flex-col justify-evenly shadow-xl rounded-lg p-4 ">
          <div className="lg:w-full flex flex-col lg:flex lg:flex-row lg:justify-between">
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              className="rounded-lg ring-1 h-12 p-2 lg:w-52 lg:mr-4 mt-4"
            />
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              className="rounded-lg ring-1 h-12 p-2 lg:w-52 mt-4"
            />
          </div>
          <input
            type="Email"
            name="Email"
            id="email"
            placeholder="Email"
            className="rounded-lg ring-1 h-12 p-2 mt-4"
          />
          <input
            type="Confirm Email"
            name="Confirm Email"
            id="Confirm-email"
            placeholder="Confirm Email"
            className="rounded-lg ring-1 h-12 p-2 mt-4"
          />
          <div className="w-full lg:flex flex flex-col lg:flex-row justify-between">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="rounded-lg ring-1 h-12 p-2 lg:w-52 lg:mr-4 mt-4"
            />
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="rounded-lg ring-1 h-12 p-2 lg:w-52 mt-4"
            />
          </div>
          <div className="flex flex-col lg:flex lg:flex-row lg:items-center justify-evenly w-full mt-6">
            <p>Birth Date:</p>
            <div>
              <input
                type="text"
                id="DD"
                placeholder="DD"
                className="text-center rounded-lg ring-1 h-12 lg:w-16 w-14 p-2 mr-4 mt-4"
              />
              <input
                type="text"
                id="MM"
                placeholder="MM"
                className="text-center rounded-lg ring-1 h-12 lg:w-24 w-16 p-2 mr-4 mt-4"
              />
              <input
                type="text"
                id="YYYY"
                placeholder="YYYY"
                className="text-center rounded-lg ring-1 h-12 lg:w-28 w-16 p-2 mt-4"
              />
            </div>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-evenly flex flex-col">
            <Link to="/Login">
              <button
                type="button"
                className="lg:w-40 w-auto h-12 text-subtitle rounded-lg border-2 text-blue-dark border-blue-dark hover:bg-blue-dark hover:text-black hover:border-transparent mt-4"
              >
                LOG IN
              </button>
            </Link>
            <button
              type="button"
              className="shadow-2xl lg:w-40 w-auto h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark mt-4"
            >
              SIGN UP
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <img src={Or} alt="Or" />
          <div className="flex items-center justify-evenly px-16 mt-4">
            <button type="button">
              <img src={Facebook} alt="facebook" />
            </button>
            <button type="button">
              <img src={Google} alt="google" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
