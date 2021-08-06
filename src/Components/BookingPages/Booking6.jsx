import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export default function Booking6() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  const question = t('Booking.Title2');

  const history = useHistory();
  const [userAnswer, setUserAnswer] = useState('');
  console.log(userAnswer);

  const booking = JSON.parse(localStorage.getItem('userBooking'));
  const PrevPage = () => {
    booking.choices.pop();
    localStorage.setItem('userBooking', JSON.stringify(booking));
    history.push('/Booking5');
  };
  const NextPage = () => {
    if (!userAnswer) {
      alert('please provide an answer');
      return;
    }
    const choice = {
      question,
      answer: userAnswer,
    };
    booking.choices.push(choice);
    localStorage.setItem('userBooking', JSON.stringify(booking));
    history.push('/Booking7');
  };
  return (
    <div className="flex flex-col justify-evenly lg:h-firstsection px-sides pt-navbar">
      <div>
        <h1 className="text-3xl lg:text-title uppercase my-8">{question}</h1>
        <h3 className="text-md lg:text-subtitle opacity-50 text-justify">
          {t('Booking.Subtitle2')}
        </h3>
      </div>

      <textarea
        placeholder={t('Booking.Explain')}
        className="text-md lg:text-paragraph outline-none resize-none w-full lg:w-4/5 lg:mx-auto flex flex-col justify-evenly h-1/2 p-8 shadow-lg"
        onChange={(event) => {
          setUserAnswer(event.target.value);
        }}
      />
      <div className="mx-auto w-full lg:w-1/2 flex justify-between mt-8 mb-4">
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
          {t('Booking.Next')}
        </button>
      </div>
    </div>
  );
}
