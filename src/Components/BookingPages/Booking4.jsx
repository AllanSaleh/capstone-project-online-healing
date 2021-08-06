import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Booking4() {
  window.scrollTo(0, 0);
  const questionData = {
    question: 'Are there any specific quality that you would prefer in a counselor?',
    choices: [
      {
        id: 1,
        content: 'I prefer a Male counselor',
      },
      {
        id: 2,
        content: 'I prefer a Female counselor',
      },
      {
        id: 3,
        content: 'I prefer an Older(45+) counselor',
      },
      {
        id: 4,
        content: 'I prefer a Non-Religious counselor',
      },
      {
        id: 5,
        content: 'I prefer a Younger(30-) counselor',
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
      alert('Please choose an answer');
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
      <h1 className="text-3xl lg:text-title uppercase my-8">
        let’s match you with the right therapist
      </h1>
      <h3 className="text-md lg:text-subtitle opacity-50 text-justify">
        Please fill out this short questionnaire to provide some general and anonymous background
        about you and the issues you'd like to deal with in online therapy. It would help us match
        you with the most suitable therapist for you.
      </h3>

      <div className="flex flex-col justify-evenly w-full md:max-w-md lg:max-w-2xl my-16 mx-auto px-8 py-4 shadow-md">
        <div className="text-md lg:text-subtitle">{questionData.question}</div>

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
            back
          </button>
          <button
            onClick={() => NextPage()}
            type="button"
            className="uppercase bg-blue-dark h-12 w-32 text-md lg:text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition-all duration-300"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
