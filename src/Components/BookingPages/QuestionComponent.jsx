import React from 'react';

const QuestionComponent = ({ question, choices }) => (
  <ul>
    {question && <h1 className="text-lg lg:text-subtitle">{question}</h1>}
    {choices &&
      choices.map((choice) => (
        <li
          className={`my-4 p-4 lg:p-6 text-md lg:text-paragraph cursor-pointer ${
            choice.selected
              ? 'bg-blue-dark text-white'
              : 'bg-white border border-black border-opacity-20'
          } rounded-lg `}
          value={choice.id}
        >
          {choice.content}
        </li>
      ))}
  </ul>
);
export default QuestionComponent;
