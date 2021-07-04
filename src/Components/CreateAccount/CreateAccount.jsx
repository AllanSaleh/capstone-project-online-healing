import React from 'react';
import InputField from './InputField';

const CreateAccount = () => {
  return (
    <div className="px-sides">
      <h1 className="text-title uppercase">create an account</h1>
      <form className="flex flex-col lg:w-2/5">
        <InputField title="user name" inputType="text" placeholder="Exp: John" />
        <InputField title="email" inputType="email" placeholder="Exp: someone@something.com" />
        <InputField title="city" inputType="text" placeholder="Exp: Erbil" />
        <InputField title="license number" inputType="text" placeholder="Exp: 123456789" />
        <InputField title="password" inputType="password" placeholder="type your password" />
        <InputField
          title="confirm password"
          inputType="password"
          placeholder="re-type your password"
        />
      </form>
      <button className="text-btn bg-blue-dark px-4 py-2 my-16 lg:w-48 border rounded-md uppercase hover:bg-transparent hover:border-blue-dark hover:text-blue-dark hover:shadow-xl transition-all duration-300">
        create
      </button>
    </div>
  );
};

export default CreateAccount;
