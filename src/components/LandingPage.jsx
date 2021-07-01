import React from 'react';
import HP_illustration from '../media/HP_illustration.svg';

const LandingPage = () => {

  return (
    <div className="h-firstsection">
        <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" width="1921" height="908.63" viewBox="0 0 1921 908.63">
            <path id="Path_100" data-name="Path 100" d="M1967.5,31c-46.37,41.461-119.823,78.565-204.7,106.2-169.755,55.291-378.622,81.4-579.291,111.2S777.737,315.057,638.828,384.762c-131.584,65.992-188.1,153.534-234.673,238.5-46.639,85-89.246,172.89-200.736,245.549C161.888,895.859,107.991,920.42,46.5,939.63V31Z" transform="translate(-46.5 -31)" fill="#9fdde3" opacity="0.22"/>
        </svg>

        <div className="flex justify-between m-56">

        <div className="pt-20 flex flex-col">

            <div>
            <h1 className="text-5xl absolute pl-4">WE ARE HERE TO</h1>
            <h1 className="text-8xl absolute">HELP</h1>
            </div>

            <input type="button" value="BOOK AN APPOINTMENT" className="mt-58 ml-4 pt-4 pb-4 pl-12 pr-12 absolute text-2xl rounded-md bg-primary font-family: 'Poppins', sans-serif;"/>
            
        </div>
        
        <div>
        <img src={HP_illustration} alt="HP_illustration"  />
        </div>
        </div>
  </div>

  );
}

export default LandingPage;