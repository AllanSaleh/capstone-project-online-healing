import React from 'react';
import HP_illustration from './HP_illustration.svg';
import Background from './Group 117.svg'
function LandingPage() {

  return (
    <div className="h-firstsection  lg:-mt-0 mt-32">
        {/* background pattern */}
        <div className="absolute lg:top-2 top-16 left-0 z-0" >
            <img src={Background} alt="Background" className="h-auto w-auto" />
        </div>

        {/* content */}
      <div className="flex lg:flex-row flex-col lg:justify-between lg:m-56 relative z-40">

          <div className="pt-20 pb-28 flex flex-col lg:transform lg:translate-y-0 transform translate-y-56">

            <div className="lg:text-4xl text-base pl-4">
            WE ARE HERE TO
            </div>
            <div className="lg:text-9xl  text-6xl pl-4">
            HELP
            </div>
            <div>
            <button className="mt-6 ml-4  py-2 px-6 lg:py-4 lg:px-6 lg:text-subtitle text-base rounded-md bg-blue-dark border hover:bg-white hover:text-blue-dark hover:border-blue-dark">BOOK AN APPOINTMENT</button>
            </div>
            </div>
            <div className="transform -translate-y-72 w-64 lg:transform lg:-translate-y-0 lg:w-auto lg:ml-0 ml-16">
            <img src={HP_illustration} alt="HP_illustration" />
           </div>
    </div>
        
        
    </div>

  );
}

export default LandingPage;