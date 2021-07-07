import React from 'react';

const QuestionComponent = ({ question, choices }) => (
  <div>
    {question && <h1 className="text-2xl">{question}</h1>}
    {choices &&
      choices.map((choice) => (
        <option
          className={`my-4 p-6 text-2xl mr-16 hover:cursor-pointer ${
            choice.selected
              ? 'bg-blue-dark text-white'
              : 'bg-white border border-black border-opacity-20'
          } rounded-md `}
          value={choice.id}
        >
          {choice.content}
        </option>
      ))}
  </div>
);
export default QuestionComponent;
