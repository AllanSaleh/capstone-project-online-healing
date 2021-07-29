import React from 'react';

import Hiring from './Hiring';
import OpeningSection from './OpeningSection';

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

function Careers() {
  return (
    <>
      <div className="h-firstsection pt-navbar">
        <div className="px-sides flex flex-col justify-evenly h-3/5">
          <div>
            <div className="text-title">CAREERS AT HEALING</div>
            <div className="text-gray-600">Be a part of making people feel better.</div>
          </div>
          <div className="text-paragraph text-gray-600">
            Our SEO software cuts through mountains of data to surface critical insights. We build
            and maintain systems that process massive amounts of data (we're talking 36 trillion
            records per day and multiple petabytes of storage.) We model transparent and empathetic
            marketing for the world. We educate our community, making every effort to help them
            improve their skill. And we do it all by fostering a culture that encourages
            accountability, empathy, and transparency.
          </div>
          <div className="text-paragraph text-gray-600">What role will you play?</div>
          <button
            onClick={() => {
              const y =
                document.getElementById('Openings').getBoundingClientRect().top +
                window.pageYOffset -
                0.1 * vh;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }}
            type="button"
            className="w-64 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          >
            SEE OUR OPEN LIST
          </button>
        </div>
        <Hiring />
      </div>
      <OpeningSection />
    </>
  );
}

export default Careers;
