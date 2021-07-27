import React, { useState } from 'react';
import Logo from './Logo.svg';
import Arrow from './Polygon1.svg';
import ProfileImage from './Avatar.png';

export default function NavBar({ loggedIn }) {
  const Avatar = ProfileImage;
  const [OpenAbout, setOpenAbout] = useState(false);
  const [OpenProfile, setOpenProfile] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 px-sides flex justify-between items-center bg-blue-light h-navbar z-50">
      <div className="flex justify-between items-center cursor-pointer leading-tight">
        <img src={Logo} alt="logo" />
        <div className="text-title pl-2">Healing</div>
      </div>

      <div className="flex justify-between items-center flex-no-wrap">
        <a
          onClick={() => window.scrollTo(0, 0)}
          className="ml-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Home
        </a>

        <a
          onClick={() => window.scrollTo(0, 0)}
          className="ml-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Blogs
        </a>

        <div
          onMouseLeave={() => setOpenAbout(false)}
          onMouseOver={() => setOpenAbout(true)}
          onFocus={() => setOpenAbout(true)}
          className="ml-4 relative"
        >
          <div className="my-2">
            <a
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-yellow-primary hover:underline text-paragraph"
              href="#"
            >
              About
            </a>
            <img className="inline-block m-1 mb-2" src={Arrow} alt="arrow" />
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
          className="ml-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Contact Us
        </a>

        {loggedIn ? (
          <div
            onMouseLeave={() => setOpenProfile(false)}
            onMouseOver={() => setOpenProfile(true)}
            onFocus={() => setOpenProfile(true)}
            className="ml-4 relative"
          >
            <div className="flex items-center justify-between my-2">
              <img
                className="mr-2 w-10 rounded-full"
                src={Avatar}
                alt="Profile"
              />
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
                className="w-36 bg-white rounded-lg py-1 shadow-md absolute transform translate-x-2"
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
            className="ml-4 rounded-lg h-12 bg-blue-dark text-paragraph hover:text-blue-dark hover:bg-white hover:border-blue-dark border-2 border-transparent"
          >
            Log In
          </button>
        )}
        <div />
      </div>
    </div>
  );
}
