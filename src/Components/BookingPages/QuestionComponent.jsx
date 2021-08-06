import React, { useState } from 'react';

const QuestionComponent = ({ question, choices, setParentAnswer }) => {
  // const [selected, setSelected] = useState(false);

  const handleChoiceClick = (event) => {
    // if (!selected) {
    //   setSelected(true);
    //   event.target.className =
    //     'inline-block my-4 p-4 lg:p-6 text-md lg:text-paragraph hover:cursor-pointer text-white bg-blue-dark border rounded-lg';
    // } else {
    //   setSelected(false)
    //   event.target.className =
    //     'inline-block my-4 p-4 lg:p-6 text-md lg:text-paragraph hover:cursor-pointer bg-white border border-black border-opacity-20 rounded-lg';
    // }
    event.preventDefault();
    setParentAnswer(event.target.innerText);
  };
  return (
    <ul>
      {question && <h1 className="text-lg lg:text-subtitle">{question}</h1>}
      {choices &&
        choices.map((choice, index) => (
          <button
            key={index}
            type="button"
            onClick={handleChoiceClick}
            className="w-full my-4 p-4 lg:p-6 text-left text-md lg:text-paragraph hover:cursor-pointer bg-white border border-black border-opacity-20 rounded-lg"
          >
            {choice.content}
          </button>
        ))}
    </ul>
  );
};
export default QuestionComponent;
