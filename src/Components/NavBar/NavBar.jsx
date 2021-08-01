import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Images/Logo.svg';
import ProfileImage from './Images/Avatar.png';

export default function NavBar({ userLogin }) {
  const Avatar = ProfileImage;
  const [OpenAbout, setOpenAbout] = useState(false);
  const [OpenProfile, setOpenProfile] = useState(false);

  const LogOut = () => {
    // Firebase code to LogOut!
    alert('You Logged Out!');
  };
  return (
    <div>
      <div className="fixed inset-x-0 top-0 px-sides flex justify-between items-center bg-blue-light h-navbar z-50">
        <Link to="/">
          <div className="flex justify-between items-center cursor-pointer leading-tight">
            <img className="w-8 lg:w-12" src={Logo} alt="logo" />
            <div className="text-3xl lg:text-title ml-2">Healing</div>
          </div>
        </Link>

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
          <Link to="/" className="ml-8 hover:text-yellow-primary hover:underline text-paragraph">
            Home
          </Link>

          <Link
            to="/Blog"
            className="ml-8 hover:text-yellow-primary hover:underline text-paragraph"
          >
            Blogs
          </Link>

          <div
            onMouseLeave={() => setOpenAbout(false)}
            onMouseOver={() => setOpenAbout(true)}
            onFocus={() => setOpenAbout(true)}
            className="ml-8 relative"
          >
            <div className="my-2">
              <Link
                to="/About"
                className="hover:text-yellow-primary hover:underline text-paragraph"
                href="#"
              >
                About ᐁ
              </Link>
            </div>

            {OpenAbout && (
              <div
                onMouseLeave={() => setOpenAbout(false)}
                className="w-48 bg-white rounded-lg py-1 shadow-md absolute transform -translate-x-12"
              >
                <Link
                  to="/About"
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                >
                  Our Story
                </Link>

                <Link
                  to="/Team"
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                >
                  Our Team
                </Link>

                <Link
                  to="/Careers"
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                >
                  Open Careers
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/Contact"
            className="ml-8 hover:text-yellow-primary hover:underline text-paragraph"
          >
            Contact Us
          </Link>

          {userLogin.login ? (
            <div
              onMouseLeave={() => setOpenProfile(false)}
              onMouseOver={() => setOpenProfile(true)}
              onFocus={() => setOpenProfile(true)}
              className="ml-8 relative"
            >
              <div className="flex items-center justify-between my-2">
                <img className="mr-2 w-10 rounded-full" src={Avatar} alt="Profile" />
                <Link
                  to="/EditProfile"
                  className="hover:text-yellow-primary hover:underline text-paragraph"
                >
                  Ahmed M.
                </Link>
              </div>

              {OpenProfile && (
                <div
                  onMouseLeave={() => setOpenProfile(false)}
                  className="w-36 bg-white rounded-lg py-1 shadow-md absolute transform translate-x-1"
                >
                  <Link
                    to="/EditProfile"
                    className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                  >
                    Settings
                  </Link>

                  <div
                    onClick={() => LogOut()}
                    className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph cursor-pointer"
                  >
                    Log Out!
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/Login">
              <button
                type="button"
                className="w-28 ml-8 rounded-lg h-12 bg-blue-dark text-paragraph hover:text-blue-dark hover:bg-white hover:border-blue-dark border-2 border-transparent"
              >
                Log In
              </button>
            </Link>
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
          {userLogin.login ? (
            <div
              onClick={() => {
                if (OpenProfile) setOpenProfile(false);
                else setOpenProfile(true);
              }}
            >
              <div className="flex items-center justify-between my-2">
                <img className="mr-2 w-10 rounded-full" src={Avatar} alt="Profile" />
                <Link
                  to="/EditProfile"
                  className="hover:text-yellow-primary hover:underline text-paragraph"
                >
                  Ahmed M.
                </Link>
              </div>

              {OpenProfile && (
                <div className="w-36 bg-white rounded-lg py-1 shadow-md transform translate-x-1">
                  <Link
                    to="/EditProfile"
                    className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                  >
                    Settings
                  </Link>

                  <div
                    onClick={() => LogOut()}
                    className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph cursor-pointer"
                  >
                    Log Out!
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="Login">
              <button
                type="button"
                className="w-28 rounded-lg h-12 bg-blue-dark text-paragraph hover:text-blue-dark hover:bg-white hover:border-blue-dark border-2 border-transparent"
              >
                Log In
              </button>
            </Link>
          )}
          <Link to="/" className="hover:text-yellow-primary hover:underline text-paragraph">
            Home
          </Link>

          <Link to="/Blog" className="hover:text-yellow-primary hover:underline text-paragraph">
            Blogs
          </Link>

          <div>
            <div
              onClick={() => {
                if (OpenAbout) setOpenAbout(false);
                else setOpenAbout(true);
              }}
              className="my-2 text-center"
            >
              <Link
                to="/About"
                className="hover:text-yellow-primary hover:underline text-paragraph"
              >
                About ᐁ
              </Link>
            </div>

            {OpenAbout && (
              <div
                onMouseLeave={() => setOpenAbout(false)}
                className="w-48 bg-white rounded-lg py-1 shadow-md transform -translate-x-1"
              >
                <Link
                  to="/About"
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                >
                  Our Story
                </Link>

                <Link
                  to="/Team"
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                >
                  Our Team
                </Link>

                <Link
                  to="/Careers"
                  className="block px-4 my-2 hover:text-yellow-primary hover:underline text-center text-paragraph"
                >
                  Open Careers
                </Link>
              </div>
            )}
          </div>

          <Link to="/Contact" className="hover:text-yellow-primary hover:underline text-paragraph">
            Contact Us
          </Link>
          <div />
        </div>
      </div>
    </div>
  );
}
