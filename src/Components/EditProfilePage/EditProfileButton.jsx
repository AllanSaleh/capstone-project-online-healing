import React from 'react';

const EditProfileButton = ({ text, bgColor, color, margin }) => (
  <button
    type="button"
    className={`${bgColor || 'bg-blue-dark'}
     text-xl text-black lg:${margin} my-2 rounded-lg uppercase px-12 py-3 lg:text-subtitle border transition duration-300 hover:bg-white hover:${`border-${color}`}
    hover:${`text-${color}`}`}
  >
    {text}
  </button>
);
export default EditProfileButton;
