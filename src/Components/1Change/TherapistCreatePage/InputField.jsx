import React from 'react';

const InputField = ({ id, title, inputType, placeholder }) => (
  <div className="my-4">
    <label htmlFor={id} className="text-subtitle capitalize text-black text-opacity-50">
      {title}
    </label>
    <br />
    <input
      className="max-h-8 py-6 px-4 mt-2 w-full border border-black border-opacity-20 rounded-lg outline-none focus:border-blue-dark transition duration-200"
      placeholder={placeholder}
      type={inputType}
      id={id}
      name={id}
      required
    />
  </div>
);

export default InputField;
