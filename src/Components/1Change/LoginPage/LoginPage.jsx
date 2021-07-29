import React from 'react';

import HpIllustration from './Images/HP_illustration.svg';
import Facebook from './Images/Facebook.svg';
import Google from './Images/Google.svg';
import Or from './Images/or.svg';

function LoginPage() {
  return (
    <div className=" flex flex-col lg:flex lg:flex-row items-center justify-evenly h-firstsection">
      <div className="lg:w-auto transform translate-y-44 w-72 lg:transform lg:translate-y-0">
        <div className="lg:text-5xl text-3xl lg:text-left text-center lg:pb-16 ">LOGIN</div>
        <div className=" lg:w-96 lg:h-72 h-72 bg-white shadow-xl rounded-lg ">
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              placeholder="email"
              className="border border-black border-opacity-40 rounded-sm pl-4 ml-4 mt-10 mr-5 h-12"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="border border-black border-opacity-40 rounded-sm pl-4 ml-4 mt-5 mr-5 h-12"
            />
            <div className="lg:flex lg:flex-row lg:justify-evenly flex flex-col">
              <button
                type="button"
                className="mt-6 lg:mt-6 lg:mx-0 mx-5 lg:py-4 lg:px-10  py-2 px-6 lg:text-subtitle text-base rounded-md bg-blue-dark border hover:bg-white hover:text-blue-dark hover:border-blue-dark"
              >
                LOG IN
              </button>
              <button
                type="button"
                className="mt-4 lg:mt-6 lg:mx-0 mx-5 lg:py-4 lg:px-10  py-2 px-6 lg:text-subtitle text-base rounded-md text-blue-dark bg-white border hover:bg-blue-dark hover:text-black hover:border-blue-dark"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <img src={Or} alt="Or" />
          <div className="flex items-center justify-evenly px-16 mt-4">
            <button type="button">
              <img src={Facebook} alt="facebook" />
            </button>
            <button type="button">
              <img src={Google} alt="google" />{' '}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:transform lg:translate-y-0 transform -translate-y-96 lg:w-auto w-48 lg:mt-0 -mt-40">
        <img src={HpIllustration} alt="HP_illustration" />
      </div>
    </div>
  );
}

export default LoginPage;
