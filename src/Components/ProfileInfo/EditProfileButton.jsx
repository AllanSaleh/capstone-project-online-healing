import React from 'react';

const EditProfileButton = ({ text, bgColor, textColor, margin, bgOpacity }) => (
  <button
    className={`${bgColor} ${bgOpacity} ${textColor} ${margin} rounded-lg uppercase w-1/3 py-3 text-subtitle transition duration-300 hover:bg-opacity-100 hover:shadow-lg`}
  >
    {text}
  </button>
);

export default EditProfileButton;
