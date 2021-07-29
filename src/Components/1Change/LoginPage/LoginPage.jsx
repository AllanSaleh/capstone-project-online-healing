import React from 'react';

import HpIllustration from './Images/HP_illustration.svg';
import Facebook from './Images/Facebook.svg';
import Google from './Images/Google.svg';
import Or from './Images/or.svg';

function LoginPage() {
  return (
    <>
      <div className="px-sides flex flex-row items-center justify-between h-firstsection pt-navbar">
        <div>
          <div className="text-5xl pb-16">LOGIN</div>
          <div className="p-4 w-96 h-72 shadow-xl rounded-lg flex flex-col justify-evenly">
            <input
              type="email"
              id="email"
              placeholder="email"
              className="border border-black border-opacity-40 rounded-lg h-12 p-2"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="border border-black border-opacity-40 rounded-lg h-12 p-2"
            />
            <div className="flex flex-row justify-between">
              <button
                type="button"
                className="w-40 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
              >
                LOG IN
              </button>
              <button
                type="button"
                className="w-40 h-12 text-subtitle rounded-lg border-2 text-blue-dark border-blue-dark hover:bg-blue-dark hover:text-black hover:border-transparent"
              >
                SIGN UP
              </button>
            </div>
          </div>
          <div className="mt-10">
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
        <div>
          <img src={HpIllustration} alt="HpIllustration" />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
