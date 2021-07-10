import React from 'react';

const ProfileInputField = ({ title, id, type, description, icon }) => (
  <div className="flex items-center my-2">
    <span className="text-subtitle capitalize inline-block w-1/4">{title}</span>
    <div className="w-3/4 inline-flex items-center border border-black border-opacity-20 rounded-lg pl-4">
      <input type={type} id={id} name={id} className="w-11/12 h-full outline-none py-3" />
      {icon && (
        <button
          onClick={() => console.log('img clicked')}
        >
          <img src={icon} alt="icon" />
        </button>
      )}
    </div>
  </div>
);

export default ProfileInputField;
