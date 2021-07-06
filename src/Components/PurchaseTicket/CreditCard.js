import React, { useState } from 'react';
import C1 from './C1.svg';
import C2 from './C2.svg';
import C3 from './C3.svg';
import MasterLogo from './MasterLogo.svg';
import VisaLogo from './VisaLogo.svg';

let backgrounds;
let logos;

export default function CreditCard({ background, logo, date, number, name }) {
  if (background === 1) backgrounds = C1;
  if (background === 2) backgrounds = C2;
  if (background === 3) backgrounds = C3;

  if (logo === 'Master') logos = MasterLogo;
  if (logo === 'Visa') logos = VisaLogo;

  const [selected, setSelected] = useState('');

  return (
    <div className="relative inline-block w-2/6 h-80 box-border mx-12">
      <img
        className="absolute w-full h-full"
        src={backgrounds}
        alt="Background"
      />
      <img className="absolute top-11 right-6" src={logos} alt="Logo" />
      <div className="absolute top-14 left-12 text-white text-paragraph">
        {date}
      </div>
      <div className="absolute top-36 left-12 text-white text-paragraph">
        {number}
      </div>
      <div className="absolute top-56 left-12 text-white text-paragraph">
        {name}
      </div>
      <button
        type="button"
        className="absolute bottom-8 right-4 h-12 w-28 text-subtitle text-white bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
      >
        DELETE
      </button>
    </div>
  );
}
