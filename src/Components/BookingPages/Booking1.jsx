import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import QuestionComponent from './QuestionComponent';

export default function Booking1({ loginStatus }) {
  window.scrollTo(0, 0);
  localStorage.removeItem('booking');
  const history = useHistory();
  const { t } = useTranslation();

  const [select, setSelect] = useState([false, false]);
  const [userAnswer, setUserAnswer] = useState('');

  const questionData = {
    question: t('Booking.Q1'),
    choices: [
      {
        id: 0,
        content: t('Booking.Choice11'),
      },
      {
        id: 1,
        content: t('Booking.Choice12'),
      },
    ],
  };

  const handleSetAnswer = (childAnswer) => {
    setUserAnswer(childAnswer);
  };

  const NextPage = () => {
    if (!userAnswer) {
      alert(t('Booking.ChoiceAlert'));
      localStorage.removeItem('userBooking');
      return;
    }

    const bookingID = uuidv4();
    const booking = {
      booking_id: bookingID,
      user_id: loginStatus.user_id,
      choices: [
        {
          question: questionData.question,
          answer: userAnswer,
        },
      ],
    };

    localStorage.setItem('userBooking', JSON.stringify(booking));
    history.push('/Booking2');
  };

  return (
    <div className="lg:h-firstsection px-sides pt-navbar">
      <h1 className="text-3xl lg:text-title uppercase my-8">
        {t('Booking.Title1')}
      </h1>
      <h3 className="text-md lg:text-subtitle opacity-50 text-justify">
        {t('Booking.Subtitle1')}
      </h3>

      <div className="flex flex-col justify-between w-full md:max-w-md lg:max-w-2xl my-16 mx-auto px-8 py-4 shadow-md">
        <QuestionComponent
          select={select}
          setSelect={(id) => setSelect(id)}
          question={questionData.question}
          choices={questionData.choices}
          setParentAnswer={handleSetAnswer}
        />

        <div className="flex justify-end mt-16">
          <button
            onClick={() => NextPage()}
            type="button"
            className=" uppercase bg-blue-dark h-12 w-32 text-md lg:text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition duration-300"
          >
            {t('Booking.Next')}
          </button>
        </div>
      </div>
    </div>
  );
}
