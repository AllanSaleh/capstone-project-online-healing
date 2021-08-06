import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export default function Booking4() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  const questionData = {
    question: t('Booking.Subtitle1'),
    choices: [
      {
        id: 1,
        content: t('Booking.Choice41'),
      },
      {
        id: 2,
        content: t('Booking.Choice42'),
      },
      {
        id: 3,
        content: t('Booking.Choice43'),
      },
      {
        id: 4,
        content: t('Booking.Choice44'),
      },
      {
        id: 5,
        content: t('Booking.Choice45'),
      },
    ],
  };

  const history = useHistory();
  const [userAnswer, setUserAnswer] = useState('');
  const handleRadioChange = (event) => {
    setUserAnswer(event.target.value);
  };
  console.log(userAnswer);

  const booking = JSON.parse(localStorage.getItem('userBooking'));
  const PrevPage = () => {
    booking.choices.pop();
    localStorage.setItem('userBooking', JSON.stringify(booking));
    history.push('/Booking2');
  };
  const NextPage = () => {
    if (!userAnswer) {
      alert(t('Booking.ChoiceAlert'));
      return;
    }
    const choice = {
      question: questionData.question,
      answer: userAnswer,
    };
    booking.choices.push(choice);
    localStorage.setItem('userBooking', JSON.stringify(booking));
    history.push('/Booking5');
  };

  return (
    <div className="lg:h-firstsection px-sides pt-navbar">
      <h1 className="text-3xl lg:text-title uppercase my-8">{t('Booking.Title1')}</h1>
      <h3 className="text-md lg:text-subtitle opacity-50 text-justify">{questionData.question}</h3>

      <div className="flex flex-col justify-evenly w-full md:max-w-md lg:max-w-2xl my-16 mx-auto px-8 py-4 shadow-md">
        <div className="text-md lg:text-subtitle">{t('Booking.Q4')}</div>

        <div className="flex flex-col justify-around my-8">
          {questionData.choices.map((choice) => (
            <div className="flex items-center my-2" key={choice.id}>
              <input
                type="radio"
                id={choice.id}
                name="counselor_options"
                value={choice.content}
                onChange={handleRadioChange}
              />
              <label className="text-sm lg:text-paragraph ml-2" htmlFor={choice.id}>
                {choice.content}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
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
    </div>
  );
}
