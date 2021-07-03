import React from 'react';
import HP_illustration from './HP_illustration.svg';
import Background from './background.svg'
const LandingPage = () => {

  return (
    <div className="h-firstsection">
      <img className="absolute top-0 left-0" src={Background} alt="background" />


      <div className="flex justify-between m-56">

        <div className="pt-20 flex flex-col">

          <div>
            <h1 className="text-5xl absolute pl-4">WE ARE HERE TO</h1>
            <h1 className="text-8xl absolute">HELP</h1>
          </div>

          <button type="button" value="BOOK AN APPOINTMENT" className="mt-58 ml-4 pt-4 pb-4 pl-12 pr-12 absolute text-2xl rounded-md bg-primary font-family: 'Poppins', sans-serif;" >BOOK AN APPOINTMENT</button>


        </div>

        <div>
          <img src={HP_illustration} alt="HP_illustration" />
        </div>
      </div>
    </div>

  );
}

export default LandingPage;