import React from 'react';

const QuestionComponent = ({ question, choices, setParentAnswer }) => {
  // const [selected, setSelected] = useState(false);

  const handleChoiceClick = (event) => {
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
