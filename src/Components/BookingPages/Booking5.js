import React from 'react';

const Booking5 = () => {
  const choices = [
    {
      id: 1,
      content: 'Depression',
    },
    {
      id: 2,
      content: 'Stress and Anxiety',
    },
    {
      id: 3,
      content: 'Relationship Issues',
    },
    {
      id: 4,
      content: 'Family Conflicts',
    },
    {
      id: 5,
      content: 'Trauma and Abuse',
    },
    {
      id: 6,
      content: 'Eating Disorders',
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
        <div className="text-subtitle">
          Are there any issue that you would like to focus on?
        </div>

        <div className="h-1/2 flex flex-col justify-around">
          {choices.map((choice) => (
            <div className="flex items-center">
              <input
                type="radio"
                id={choice.id}
                name="counselor_options"
                value={choice.content}
              />
              <label className="text-paragraph ml-2" htmlFor={choice.id}>
                {choice.content}
              </label>
            </div>
          ))}
        </div>
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
};

export default Booking5;
