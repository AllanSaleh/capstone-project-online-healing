import React from 'react';

const InputField = ({ id, title, inputType, placeholder }) => (
  <div className="my-4">
    <label
      htmlFor={id}
      className="text-md md:text-subtitle capitalize text-black text-opacity-50"
    >
      {title}
    </label>
    <br />
    <input
      className="text-sm md:text-md lg:text-xl max-h-8 py-3 px-2 md:py-6 md:px-4 mt-2 w-full border border-black border-opacity-20 rounded-lg outline-none focus:border-blue-dark transition duration-200"
      placeholder={placeholder}
      type={inputType}
      id={id}
      name={id}
      required
    />
  </div>
);

export default InputField;
