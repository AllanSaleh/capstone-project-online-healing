import React, { useState } from 'react';
import Logo from './Logo.svg';
import Arrow from './Polygon1.svg';
import ProfileImage from './Avatar.png';

export default function NavBar({ loggedIn }) {
  const Avatar = ProfileImage;
  const [Open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 px-sides flex justify-between items-center bg-blue-light h-navbar z-50">
      <div className="flex justify-between items-center cursor-pointer leading-tight">
        <img src={Logo} alt="logo" />
        <div className="text-title pl-2">Healing</div>
      </div>

      <div className="flex justify-between items-center flex-no-wrap">
        <a
          onClick={() => window.scrollTo(0, 0)}
          className="w-28 mx-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Home
        </a>

        <a
          onClick={() => window.scrollTo(0, 0)}
          className="w-28 mx-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Blogs
        </a>

        <div
          onMouseLeave={() => setOpen(false)}
          onMouseOver={() => setOpen(true)}
          onFocus={() => setOpen(true)}
          className="w-28 relative justify-between place-items-center mx-4"
        >
          <div>
            <a
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-yellow-primary hover:underline text-paragraph"
              href="#"
            >
              About
            </a>
            <img className="inline-block m-1 mb-2" src={Arrow} alt="arrow" />
          </div>

          {Open && (
            <div
              onMouseLeave={() => setOpen(false)}
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
          className="w-28 mx-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Contact Us
        </a>

        {loggedIn ? (
          <div className="w-28 flex justify-between items-center">
            <img className="w-8 rounded-full" src={Avatar} alt="Profile" />
            <div>Ahmed M.</div>
          </div>
        ) : (
          <button
            type="button"
            className="w-28 ml-4 rounded-lg h-12 bg-blue-dark text-paragraph hover:text-blue-dark hover:bg-white hover:border-blue-dark border-2 border-transparent"
          >
            Log In
          </button>
        )}
        <div />
      </div>
    </div>
  );
}
