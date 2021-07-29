import React from 'react';

import Hiring from './Hiring';
import OpeningSection from './OpeningSection';

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

function Careers() {
  return (
    <div>
      <div className="lg:h-firstsection pt-navbar">
        <div className="px-sides flex flex-col justify-evenly h-3/5 py-4">
          <div>
            <div className="text-3xl lg:text-title">CAREERS AT HEALING</div>
            <div className="text-xl lg:text-subtitle text-gray-600 mt-4">
              Be a part of making people feel better.
            </div>
          </div>
          <div className="text-lg lg:text-paragraph text-gray-600 mt-4 text-justify">
            Our SEO software cuts through mountains of data to surface critical insights. We build
            and maintain systems that process massive amounts of data (we're talking 36 trillion
            records per day and multiple petabytes of storage.) We model transparent and empathetic
            marketing for the world. We educate our community, making every effort to help them
            improve their skill. And we do it all by fostering a culture that encourages
            accountability, empathy, and transparency.
          </div>
          <div className="self-center lg:self-auto text-lg lg:text-paragraph text-gray-600 mt-4">
            What role will you play?
          </div>
          <button
            onClick={() => {
              const y =
                document.getElementById('Openings').getBoundingClientRect().top +
                window.pageYOffset -
                0.1 * vh;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }}
            type="button"
            className="self-center lg:self-auto w-52 lg:w-64 h-12 text-xl lg:text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          >
            SEE OUR OPEN LIST
          </button>
        </div>
        <Hiring />
      </div>
      <OpeningSection />
    </div>
  );
}

export default Careers;
