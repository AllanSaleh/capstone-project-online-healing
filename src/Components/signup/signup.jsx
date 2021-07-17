import React from 'react';
import SignupImage from './SignupImage.svg';
import Facebook from './Facebook.svg';
import Google from './Google.svg';
import Or from './or.svg';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Signup() {
  return (
    <div>
      <NavBar />
      <div className="h-firstsection flex flex-row items-center justify-between px-sides pt-navbar">
        <div>
          <img src={SignupImage} alt="SignupImage" />
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center">
          <div className="text-title mb-4">SIGN UP NOW</div>
          <div className="h-3/5 flex flex-col justify-evenly shadow-xl rounded-lg p-4">
            <div className="w-full flex justify-between">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                className="rounded-lg ring-1 h-12 p-2 w-52"
              />
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                className="rounded-lg ring-1 h-12 p-2 w-52"
              />
            </div>
            <input
              type="Email"
              name="Email"
              id="email"
              placeholder="Email"
              className="rounded-lg ring-1 h-12 p-2"
            />
            <input
              type="Confirm Email"
              name="Confirm Email"
              id="Confirm-email"
              placeholder="Confirm Email"
              className="rounded-lg ring-1 h-12 p-2"
            />
            <div className="w-full flex justify-between">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="rounded-lg ring-1 h-12 p-2 w-52"
              />
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="rounded-lg ring-1 h-12 p-2 w-52"
              />
            </div>
            <div className="flex items-center justify-evenly w-full">
              <p>Birth Date:</p>
              <div>
                <input
                  type="text"
                  id="DD"
                  placeholder="DD"
                  className="text-center rounded-lg ring-1 h-12 w-16 p-2 mr-4"
                />
                <input
                  type="text"
                  id="MM"
                  placeholder="MM"
                  className="text-center rounded-lg ring-1 h-12 w-24 p-2 mr-4"
                />
                <input
                  type="text"
                  id="YYYY"
                  placeholder="YYYY"
                  className="text-center rounded-lg ring-1 h-12 w-28 p-2"
                />
              </div>
            </div>
            <div className="flex flex-row justify-evenly">
              <button
                type="button"
                className="w-40 h-12 text-subtitle rounded-lg border-2 text-blue-dark border-blue-dark hover:bg-blue-dark hover:text-black hover:border-transparent"
              >
                LOG IN
              </button>
              <button
                type="button"
                className="shadow-2xl w-40 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
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
      <Footer />
    </div>
  );
}

export default Signup;
