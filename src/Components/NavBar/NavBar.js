import React, { useState } from 'react';
import Logo from './Logo.svg';
import Arrow from './Polygon1.svg';

export default function NavBar() {
  const [Open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 px-sides flex justify-between items-center bg-blue-light h-navbar">
      <div className="flex justify-between items-center cursor-pointer leading-tight">
        <img src={Logo} alt="logo" />
        <div className="text-title pl-2">Healing</div>
      </div>

      <div className="flex justify-between items-center flex-no-wrap">
        <a
          onClick={() => window.scrollTo(0, 0)}
          className="mx-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Home
        </a>

        <a
          onClick={() => window.scrollTo(0, 0)}
          className="mx-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Blogs
        </a>

        <div
          onMouseLeave={() => setOpen(false)}
          onMouseOver={() => setOpen(true)}
          onFocus={() => setOpen(true)}
          className="relative justify-between place-items-center mx-4"
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
          className="mx-4 hover:text-yellow-primary hover:underline text-paragraph"
          href="#"
        >
          Contact Us
        </a>

        <button
          type="button"
          className="mx-4 rounded-lg h-12 bg-blue-dark w-32 text-paragraph hover:text-blue-dark hover:bg-white hover:border-blue-dark border-2 border-transparent"
        >
          Log In
        </button>
        <div />
      </div>
    </div>
  );
}
