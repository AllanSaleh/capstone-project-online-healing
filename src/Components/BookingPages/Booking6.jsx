import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Booking6() {
  window.scrollTo(0, 0);
  const history = useHistory();
  const [answer, setAnswer] = useState('');
  console.log(answer);
  const PrevPage = () => {
    // Put firestore code here!
    history.push('/Booking5');
  };
  const NextPage = () => {
    // Put firestore code here!
    history.push('/Booking7');
  };
  return (
    <div className="flex flex-col justify-evenly h-firstsection px-sides pt-navbar">
      <div>
        <h1 className="text-3xl lg:text-title uppercase my-8">What brings you here?</h1>
        <h3 className="text-md lg:text-subtitle opacity-50 text-justify">
          Please specify (in a few sentences) why you'd like counseling.
          <br />
          This will give your counselor a good understanding of where to start.
        </h3>
      </div>

      <textarea
        placeholder="Please explain here..."
        className="text-md lg:text-paragraph outline-none resize-none w-full lg:w-4/5 lg:mx-auto flex flex-col justify-evenly h-1/2 p-8 shadow-lg"
        onChange={(event) => {
          setAnswer(event.target.value);
        }}
      />
      <div className="mx-auto w-full lg:w-1/2 flex justify-between mt-8">
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
  );
}
