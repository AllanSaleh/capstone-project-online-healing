import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';

export default function Booking() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();
  const bookingsRef = firebase.firestore().collection('bookings');
  const history = useHistory();

  const booking = JSON.parse(localStorage.getItem('userBooking'));

  const PrevPage = () => {
    booking.choices.pop();
    localStorage.setItem('userBooking', JSON.stringify(booking));
    history.push('/Booking6');
  };

  const [tickets, setTickets] = useState(0);
  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(booking.user_id)
      .get()
      .then((doc) => {
        setTickets(parseInt(doc.data().tickets));
      });
  }, []);

  const NextPage = () => {
    firebase
      .firestore()
      .collection('users')
      .doc(booking.user_id)
      .update({ tickets: tickets - 1 });

    bookingsRef.doc(booking.booking_id).set(booking);
    history.push('/Booking8');
  };
  return (
    <div className="lg:h-firstsection px-sides pt-navbar">
      <h1 className="text-2xl lg:text-title uppercase my-8">{t('Booking.Title3')}</h1>
      <h3 className="text-md lg:text-subtitle opacity-50 text-justify">{t('Booking.Subtitle3')}</h3>
      <div className="flex flex-col justify-evenly items-center h-1/2 lg:h-2/3 w-full lg:max-w-3xl my-16 mx-auto p-8 shadow-md">
        <h3 className="text-xl lg:text-3xl capitalize">{t('Booking.Submit')}</h3>
        <p className="text-sm lg:text-subtitle text-center">{t('Booking.Aware')}</p>
        <div className="flex justify-evenly mt-16 w-full">
          <button
            onClick={() => PrevPage()}
            type="button"
            className="uppercase bg-blue-dark h-12 w-32 text-md lg:text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition duration-300"
          >
            {t('Booking.Back')}
          </button>
          <button
            onClick={() => NextPage()}
            type="button"
            className="uppercase bg-blue-dark h-12 w-32 text-md lg:text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition-all duration-300"
          >
            {t('Booking.SubmitBtn')}
          </button>
        </div>
      </div>
    </div>
  );
}
