import React, { useState } from 'react';

import Logo from './Images/Logo.svg';
import ProfileImage from './Images/Avatar.png';

export default function NavBar({ loggedIn }) {
  const Avatar = ProfileImage;
  const [OpenAbout, setOpenAbout] = useState(false);
  const [OpenProfile, setOpenProfile] = useState(false);

  return (
    <div>
      <div className="fixed inset-x-0 top-0 px-sides flex justify-between items-center bg-blue-light h-navbar z-50">
        <div className="flex justify-between items-center cursor-pointer leading-tight">
          <img className="w-8 lg:w-12" src={Logo} alt="logo" />
          <div className="text-3xl lg:text-title ml-2">Healing</div>
        </div>

        {/* HamburgerButton */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
            type="button"
            className="outline-none mobile-menu-button"
          >
            <svg
              className=" w-6 h-6 hover:text-blue-dark "
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex justify-between items-center flex-no-wrap">
          <a
            onClick={() => window.scrollTo(0, 0)}
            className="ml-8 hover:text-yellow-primary hover:underline text-paragraph"
            href="#"
          >
            Home
          </a>

          <a
            onClick={() => window.scrollTo(0, 0)}
            className="ml-8 hover:text-yellow-primary hover:underline text-paragraph"
            href="#"
          >
            Blogs
          </a>

          <div
            onMouseLeave={() => setOpenAbout(false)}
            onMouseOver={() => setOpenAbout(true)}
            onFocus={() => setOpenAbout(true)}
            className="ml-8 relative"
          >
            <div className="my-2">
              <a
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-primary hover:underline text-paragraph"
                href="#"
              >
                About ᐁ
              </a>
            </div>

            {OpenAbout && (
              <div
                onMouseLeave={() => setOpenAbout(false)}
                className="w-48 bg-white rounded-lg py-1 shadow-md absolute transform -translate-x-12"
              >
                <a
                  onClick={() => window.scrollTo(0, 0)}
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                  href="#"
                >
                  Our Story
                </a>

                <a
                  onClick={() => window.scrollTo(0, 0)}
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                  href="#"
                >
                  Our Founding
                </a>

                <a
                  onClick={() => window.scrollTo(0, 0)}
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                  href="#"
                >
                  Open Careers
                </a>
              </div>
            )}
          </div>

          <a
            onClick={() => window.scrollTo(0, 0)}
            className="ml-8 hover:text-yellow-primary hover:underline text-paragraph"
            href="#"
          >
            Contact Us
          </a>

          {loggedIn ? (
            <div
              onMouseLeave={() => setOpenProfile(false)}
              onMouseOver={() => setOpenProfile(true)}
              onFocus={() => setOpenProfile(true)}
              className="ml-8 relative"
            >
              <div className="flex items-center justify-between my-2">
                <img className="mr-2 w-10 rounded-full" src={Avatar} alt="Profile" />
                <a
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-yellow-primary hover:underline text-paragraph"
                  href="#"
                >
                  Ahmed M.
                </a>
              </div>

              {OpenProfile && (
                <div
                  onMouseLeave={() => setOpenProfile(false)}
                  className="w-36 bg-white rounded-lg py-1 shadow-md absolute transform translate-x-1"
                >
                  <a
                    onClick={() => window.scrollTo(0, 0)}
                    className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                    href="#"
                  >
                    Settings
                  </a>

                  <a
                    onClick={() => window.scrollTo(0, 0)}
                    className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                    href="#"
                  >
                    Log Out!
                  </a>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              className="w-28 ml-8 rounded-lg h-12 bg-blue-dark text-paragraph hover:text-blue-dark hover:bg-white hover:border-blue-dark border-2 border-transparent"
            >
              Log In
            </button>
          )}
          <div />
        </div>
      </div>

      {/* MobileNav */}
      <div id="mobile-menu" className="hidden flex justify-end transition duration-500">
        <div
          onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
          className="fixed inset-0 opacity-75 bg-black z-10"
        />
        <div className="fixed w-3/4 h-screen flex flex-col justify-evenly items-center mt-navbar bg-white py-4 z-20">
          {loggedIn ? (
            <div
              onClick={() => {
                if (OpenProfile) setOpenProfile(false);
                else setOpenProfile(true);
              }}
            >
              <div className="flex items-center justify-between my-2">
                <img className="mr-2 w-10 rounded-full" src={Avatar} alt="Profile" />
                <a className="hover:text-yellow-primary hover:underline text-paragraph" href="#">
                  Ahmed M.
                </a>
              </div>

              {OpenProfile && (
                <div className="w-36 bg-white rounded-lg py-1 shadow-md transform translate-x-1">
                  <a
                    onClick={() => window.scrollTo(0, 0)}
                    className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                    href="#"
                  >
                    Settings
                  </a>

                  <a
                    onClick={() => window.scrollTo(0, 0)}
                    className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                    href="#"
                  >
                    Log Out!
                  </a>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              className="w-28 rounded-lg h-12 bg-blue-dark text-paragraph hover:text-blue-dark hover:bg-white hover:border-blue-dark border-2 border-transparent"
            >
              Log In
            </button>
          )}
          <a
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-yellow-primary hover:underline text-paragraph"
            href="#"
          >
            Home
          </a>

          <a
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-yellow-primary hover:underline text-paragraph"
            href="#"
          >
            Blogs
          </a>

          <div>
            <div
              onClick={() => {
                if (OpenAbout) setOpenAbout(false);
                else setOpenAbout(true);
              }}
              className="my-2 text-center"
            >
              <a className="hover:text-yellow-primary hover:underline text-paragraph" href="#">
                About ᐁ
              </a>
            </div>

            {OpenAbout && (
              <div
                onMouseLeave={() => setOpenAbout(false)}
                className="w-48 bg-white rounded-lg py-1 shadow-md transform -translate-x-1"
              >
                <a
                  onClick={() => window.scrollTo(0, 0)}
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                  href="#"
                >
                  Our Story
                </a>

                <a
                  onClick={() => window.scrollTo(0, 0)}
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                  href="#"
                >
                  Our Founding
                </a>

                <a
                  onClick={() => window.scrollTo(0, 0)}
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                  href="#"
                >
                  Open Careers
                </a>
              </div>
            )}
          </div>

          <a
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-yellow-primary hover:underline text-paragraph"
            href="#"
          >
            Contact Us
          </a>
          <div />
        </div>
      </div>
    </div>
  );
}
