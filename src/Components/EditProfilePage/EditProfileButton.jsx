import React from 'react';

const EditProfileButton = ({ text, bgColor, textColor, margin, bgOpacity }) => (
  <button
    type="button"
    className={`${bgColor || 'bg-blue-dark'} ${bgOpacity} ${
      textColor || 'text-black'
    } ${margin} rounded-lg uppercase px-12 py-3 text-subtitle transition duration-300 hover:bg-opacity-100 hover:shadow-lg`}
  >
    {text}
  </button>
);

export default EditProfileButton;
