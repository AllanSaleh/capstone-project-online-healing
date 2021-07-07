import React from 'react';

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
  </div>
);

export default Booking;
