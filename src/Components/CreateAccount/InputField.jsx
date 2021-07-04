import React from 'react';

const InputField = ({ title, inputType, placeholder }) => {
  return (
    <div className="my-4">
      <label htmlFor={title} className="text-subtitle capitalize text-black text-opacity-50">
        {title}
      </label>
      <br />
      <input
        className="max-h-8 py-5 px-4 mt-2 w-full border border-black border-opacity-12 rounded-md"
        placeholder={placeholder}
        type={inputType}
        id={inputType}
        name={inputType}
        required
      />
    </div>
  );
};

export default InputField;
