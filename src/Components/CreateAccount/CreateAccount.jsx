import React from 'react';
import InputField from './InputField';

const CreateAccount = () => (
  <div className="px-sides">
    <h1 className="text-title uppercase">create an account</h1>
    <form className="flex flex-col md:w-2/5">
      <InputField id="user-name" title="user name" inputType="text" placeholder="Exp: John" />
      <InputField
        id="email"
        title="email"
        inputType="email"
        placeholder="Exp: someone@something.com"
      />
      <InputField id="city" title="city" inputType="text" placeholder="Exp: Erbil" />
      <InputField
        id="license"
        title="license number"
        inputType="text"
        placeholder="Exp: 123456789"
      />
      <InputField
        id="password"
        title="password"
        inputType="password"
        placeholder="type your password"
      />
      <InputField
        id="confirm-password"
        title="confirm password"
        inputType="password"
        placeholder="re-type your password"
      />
    </form>
    <button className="text-btn bg-blue-dark px-4 py-2 my-16 w-full md:w-48 border rounded-lg uppercase hover:bg-transparent hover:border-blue-dark hover:text-blue-dark hover:shadow-xl transition-all duration-300">
      create
    </button>
  </div>
);

export default CreateAccount;