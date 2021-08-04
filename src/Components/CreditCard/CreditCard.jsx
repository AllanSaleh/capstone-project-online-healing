import React from 'react';
import firebase from 'firebase';

import C1 from './Images/C1.svg';
import C2 from './Images/C2.svg';
import C3 from './Images/C3.svg';
import MasterLogo from './Images/MasterLogo.svg';
import VisaLogo from './Images/VisaLogo.svg';

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
  loginStatus,
}) {
  const DeleteCard = (cardID) => {
    let selectedCard;
    firebase
      .firestore()
      .collection('users')
      .doc('cUld5Z0ytjTuTrbeu95n')
      .get()
      .then((doc) => {
        doc.data().cards.forEach((card) => {
          if (card.number === cardID) selectedCard = card;
        });
        firebase
          .firestore()
          .collection('users')
          .doc(loginStatus.user_id)
          .update({
            cards: firebase.firestore.FieldValue.arrayRemove(selectedCard),
          });
        window.location.reload();
      });
  };

  return (
    <div
      onClick={(e) => setID(e.target.closest('.relative').id)}
      id={id}
      className="relative inline-block w-full lg:w-1/3 h-40 lg:h-80 box-border mx-2 lg:mx-12"
    >
      <img
        className={`border-8 rounded-lg border-dashed absolute top-4 lg:top-0 w-full cursor-pointer ${
          select ? 'border-blue-dark' : 'border-transparent'
        }`}
        src={background === 1 ? C1 : background === 2 ? C2 : C3}
        alt="Background"
      />
      <img
        className="w-8 lg:w-auto cursor-pointer absolute top-8 right-4 lg:top-11 lg:right-6"
        src={logo === 'Master' ? MasterLogo : VisaLogo}
        alt="Logo"
      />
      <div className="cursor-pointer absolute top-8 left-4 lg:top-12 lg:left-12 text-white text-sm lg:text-paragraph">
        {date}
      </div>
      <div className="cursor-pointer absolute top-16 left-4 lg:top-32 lg:left-12 text-white text-sm lg:text-paragraph">
        {number}
      </div>
      <div className="cursor-pointer absolute top-24 left-4 lg:top-52 lg:left-12 text-white text-sm lg:text-paragraph">
        {name}
      </div>
      {deletable && (
        <button
          onClick={(e) => DeleteCard(e.target.closest('.relative').id)}
          type="button"
          className="absolute bottom-7 right-4 h-6 w-12 lg:bottom-9 lg:right-4 lg:h-12 lg:w-28 text-xs lg:text-subtitle text-white bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          DELETE
        </button>
      )}
    </div>
  );
}
