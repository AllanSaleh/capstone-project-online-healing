import React from 'react';

export default function Booking4() {
  const choices = [
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
  ];

  return (
    <div className="h-firstsection px-sides pt-navbar">
      <h1 className="text-title uppercase mb-4">
        {' '}
        let’s match you with the right therapist
      </h1>
      <h3 className="text-subtitle opacity-50 text-justify">
        Please fill out this short questionnaire to provide some general and
        anonymous background about you and the issues you'd like to deal with in
        online therapy. It would help us match you with the most suitable
        therapist for you.
      </h3>

      <div className="flex flex-col justify-evenly h-2/3 max-w-3xl my-16 mx-auto px-8 py-4 shadow-md">
        <div>
          Are there any specific quality that you would prefer in a counselor?
        </div>

        {choices.map((choice) => (
          <div>
            <input
              type="radio"
              id={choice.id}
              name="counselor_options"
              value={choice.content}
            />
            <label className="ml-2" htmlFor={choice.id}>
              {choice.content}
            </label>
          </div>
        ))}

        <div className="flex justify-between">
          <button
            type="button"
            className="uppercase bg-blue-dark h-12 w-32 text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition duration-300"
          >
            back
          </button>
          <button
            type="button"
            className="uppercase bg-blue-dark h-12 w-32 text-subtitle rounded-lg border hover:bg-transparent hover:border-blue-dark hover:text-blue-dark transition duration-300"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
