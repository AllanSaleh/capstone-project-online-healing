import React from 'react';

const ProfileInputField = ({ title, id, type, icon }) => (
  <div className="flex items-center my-6">
    <label htmlFor={id} className="text-subtitle capitalize inline-block w-1/3">{title}</label>
    <div className="w-2/3 inline-flex items-center border border-black border-opacity-20 rounded-lg pl-4">
      <input type={type} id={id} name={id} className="w-11/12 h-full outline-none py-3" />
      {icon && (
        <button>
          <img src={icon} alt="icon" />
        </button>
      )}
    </div>
  </div>
);

export default ProfileInputField;
