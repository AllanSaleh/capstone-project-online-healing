import React from 'react';

const QuestionComponent = ({
  question,
  choices,
  setParentAnswer,
  select,
  setSelect,
}) => {
  // const [selected, setSelected] = useState(false);

  const handleChoiceClick = (event) => {
    event.preventDefault();
    setParentAnswer(event.target.innerText);
  };
  return (
    <ul>
      {question && <h1 className="text-lg lg:text-subtitle">{question}</h1>}
      {choices &&
        choices.map((choice, index) => (
          <button
            id={choice.id}
            key={index}
            type="button"
            onClick={(e) => {
              handleChoiceClick(e);
              let newChoice = select;
              newChoice = newChoice.map((element) => (element = false));
              newChoice[e.target.id] = true;
              setSelect(newChoice);
            }}
            className={`w-full my-4 p-4 lg:p-6 text-left text-md lg:text-paragraph hover:cursor-pointer border rounded-lg ${
              select[index]
                ? 'bg-blue-dark border-blue-dark'
                : 'bg-white border-black border-opacity-20'
            }`}
          >
            {choice.content}
          </button>
        ))}
    </ul>
  );
};
export default QuestionComponent;
