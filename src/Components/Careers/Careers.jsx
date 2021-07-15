import React from 'react';
import Hiring from './Hiring';

function Careers() {
  return (
    <div className="h-firstsection pt-navbar">
      <div className="px-sides flex flex-col justify-evenly h-3/4">
        <div>
          <div className="text-title">CAREERS AT HEALING</div>
          <div className="opacity-80">Be a part of making people feel better.</div>
        </div>
        <div className="text-paragraph w-1/2 opacity-80">
          Our SEO software cuts through mountains of data to surface critical insights. We build and
          maintain systems that process massive amounts of data (we're talking 36 trillion records
          per day and multiple petabytes of storage.) We model transparent and empathetic marketing
          for the world. We educate our community, making every effort to help them improve their
          skill. And we do it all by fostering a culture that encourages accountability, empathy,
          and transparency.
        </div>
        <div className="text-paragraph opacity-80">What role will you play?</div>
        <button
          type="button"
          className="w-64 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          SEE OUR OPEN LIST
        </button>
      </div>
      <Hiring />
    </div>
  );
}

export default Careers;
