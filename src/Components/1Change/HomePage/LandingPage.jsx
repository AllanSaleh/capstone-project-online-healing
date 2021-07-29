import React from 'react';
import HpIllustration from './Images/HP_illustration.svg';
import Background from './Images/background.svg';

function LandingPage() {
  return (
    <div className="h-firstsection">
      {/* background pattern */}
      <div className="absolute top-0 left-0 z-0">
        <img src={Background} alt="Background" />
      </div>

      {/* content */}
      <div className="flex justify-between m-56 relative z-40">
        <div className="pt-20 flex flex-col">
          <div className="text-5xl  pl-4">WE ARE HERE TO</div>
          <div className="text-10xl  pl-4">HELP</div>
          <div>
            <button
              type="button"
              className="mt-58 ml-4  pt-4 pb-4 pl-12 pr-12 text-subtitle rounded-md bg-blue-dark border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
            >
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>

        <div>
          <img src={HpIllustration} alt="HP_illustration" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
