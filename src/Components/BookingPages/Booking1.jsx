import React from 'react';
import { useHistory } from 'react-router-dom';

import QuestionComponent from './QuestionComponent';

const questionData = {
  question: 'What type of counseling are you looking for?',
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

export default function Booking1() {
  const history = useHistory();

  const NextPage = () => {
    // Put firestore code here!
    window.scrollTo(0, 0);
    history.push('/Booking2');
  };

  return (
    <div className="h-firstsection px-sides pt-navbar">
      <h1 className="text-3xl lg:text-title uppercase my-8">
        let’s match you with the right therapist
      </h1>
      <h3 className="text-md lg:text-subtitle opacity-50 text-justify">
        Please fill out this short questionnaire to provide some general and anonymous background
        about you and the issues you'd like to deal with in online therapy. It would help us match
        you with the most suitable therapist for you.
      </h3>

      <div className="flex flex-col justify-between w-full md:max-w-md lg:max-w-2xl my-16 mx-auto px-8 py-4 shadow-md">
        <QuestionComponent question={questionData.question} choices={questionData.choices} />

        <div className="flex justify-end mt-16">
          <button
            onClick={() => NextPage()}
            type="button"
            className="uppercase bg-blue-dark h-12 w-32 text-md lg:text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition duration-300"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
