import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

export default function Card({ title, content, showIcon, icon, buttonText, showButton, user }) {
  const history = useHistory();

  const GoToRoute = (user) => {
    let cardsNo;
    firebase
      .firestore()
      .collection('users')
      .doc(user.user_id)
      .get()
      .then((doc) => {
        cardsNo = doc.data().cards.length;
      });
    if (user.login && user.complete && cardsNo !== 0)
      history.push({
        pathname: '/Purchase',
        state: { ticket: title, price: content },
      });
    else if (!user.login) alert('Please LogIn First!');
    else if (cardsNo === 0) alert('Please Add a Payment Method in Profile Settings First!');
    else alert('Please Complete Your Profile in Profile Settings First!');
  };

  return (
    <div className="h-full w-full my-4 flex flex-col items-center justify-evenly shadow-lg rounded-lg md:w-1/4 p-4">
      {showIcon && <img src={icon} alt="" className="flex-initial mb-4" />}
      <h3 className="text-center text-xl lg:text-3xl 2xl:text-title pb-1 capitalize">
        {title} {showButton && 'Tickets'}
      </h3>
      <p className="text-opacity-50 text-black text-center text-sm md:text-md lg:text-paragraph py-4">
        {content}
      </p>
      {showButton && (
        <button
          onClick={() => GoToRoute(user)}
          type="button"
          className="bg-blue-dark py-2 px-4 uppercase text-paragraph border text-black hover:bg-transparent hover:border-blue-dark hover:text-blue-dark  transition-all duration-200 rounded-md"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
