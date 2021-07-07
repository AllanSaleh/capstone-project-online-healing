import React from 'react';
import QuestionComponent from './QuestionComponent';

const questionData = {
  question: 'What type of coumseling are you looking for?',
  choices: [
    {
      id: 1,
      content: 'Individual counseling',
      selected: true,
    },
    {
      id: 2,
      content: 'Teen counseling (for my child)',
      selected: false,
    },
  ],
};

const Booking = () => (
  <div className="relative h-firstsection px-sides">
    <h1 className="text-title uppercase mb-4"> let’s match you with the right therapist</h1>
    <h3 className="text-subtitle opacity-50 text-justify">
      Please fill out this short questionnaire to provide some general and anonymous background
      about you and the issues you'd like to deal with in online therapy. It would help us match you
      with the most suitable therapist for you.
    </h3>

    <div className="relative h-2/3 max-w-3xl my-16 mx-auto px-8 py-4 shadow-md">
      <QuestionComponent question={questionData.question} choices={questionData.choices} />

      <button className="absolute bottom-4 left-8 uppercase bg-blue-dark px-6 py-3 text-subtitle rounded-md border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition duration-300">
        next
      </button>
    </div>
  </div>
);

export default Booking;
