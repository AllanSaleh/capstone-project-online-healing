import React from 'react';
import C1 from './C1.svg';
import C2 from './C2.svg';
import C3 from './C3.svg';
import MasterLogo from './MasterLogo.svg';
import VisaLogo from './VisaLogo.svg';

let selectedBackground;
let selectedLogo;
let chosenClass;

export default function CreditCard({
  background,
  logo,
  date,
  number,
  name,
  id,
  setID,
  select,
  deletable,
}) {

  if (background === 1) selectedBackground = C1;
  if (background === 2) selectedBackground = C2;
  if (background === 3) selectedBackground = C3;

  if (logo === 'Master') selectedLogo = MasterLogo;
  if (logo === 'Visa') selectedLogo = VisaLogo;

  if (select)
    chosenClass =
      'border-8 border-blue-dark rounded-lg border-dashed absolute w-full cursor-pointer';
  else
    chosenClass =
      'border-8 border-transparent rounded-lg border-dashed absolute w-full cursor-pointer';

  return (
    <div
      onClick={(e) => setID(e.target.closest('.relative').id)}
      id={id}
      className="relative inline-block w-2/6 h-80 box-border mx-12"
    >
      <img className={chosenClass} src={selectedBackground} alt="Background" />
      <img
        className="cursor-pointer absolute top-11 right-6"
        src={selectedLogo}
        alt="Logo"
      />
      <div className="cursor-pointer absolute top-12 left-12 text-white text-paragraph">
        {date}
      </div>
      <div className="cursor-pointer absolute top-32 left-12 text-white text-paragraph">
        {number}
      </div>
      <div className="cursor-pointer absolute top-52 left-12 text-white text-paragraph">
        {name}
      </div>
      {deletable && (
        <button
          type="button"
          className="absolute bottom-9 right-5 h-12 w-28 text-subtitle text-white bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          DELETE
        </button>
      )}
    </div>
  );
}
