import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import QuestionComponent from './QuestionComponent';

export default function Booking2() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  const questionData = {
    question: t('Booking.Q3'),
    choices: [
      {
        content: t('Booking.Choice31'),
      },
      {
        content: t('Booking.Choice32'),
      },
    ],
  };

  const history = useHistory();
  const [answer, setAnswer] = useState('');
  const handleSetAnswer = (childAnswer) => {
    setAnswer(childAnswer);
    console.log(answer);
  };

  const PrevPage = () => {
    // Put firestore code here!
    history.push('/Booking2');
  };
  const NextPage = () => {
    // Put firestore code here!
    history.push('/Booking4');
  };

  return (
    <div className="lg:h-firstsection px-sides pt-navbar">
      <h1 className="text-3xl lg:text-title uppercase my-8">{t('Booking.Title1')}</h1>
      <h3 className="text-md lg:text-subtitle opacity-50 text-justify">{t('Booking.Subtitle1')}</h3>

      <div className="flex flex-col justify-between w-full md:max-w-md lg:max-w-2xl my-16 mx-auto px-8 py-4 shadow-md">
        <QuestionComponent
          question={questionData.question}
          choices={questionData.choices}
          setParentAnswer={handleSetAnswer}
        />

        <div className="flex justify-between mt-16">
          <button
            onClick={() => PrevPage()}
            type="button"
            className="uppercase bg-blue-dark h-12 w-32 text-md lg:text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition duration-300"
          >{t('Booking.Back')}</button>
          <button
            onClick={() => NextPage()}
            type="button"
            className="uppercase bg-blue-dark h-12 w-32 text-md lg:text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition-all duration-300"
          >{t('Booking.Next')}</button>
        </div>
      </div>
    </div>
  );
}
