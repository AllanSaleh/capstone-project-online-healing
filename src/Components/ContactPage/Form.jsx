import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Form({ selectedChoice }) {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    details: '',
  });

  const GoToRoute = () => {
    const verify = [false, false, false, false];

    if (selectedChoice !== '') verify[3] = true;
    else {
      verify[3] = false;
      alert('Please choose a type of contact!');
    }
    if (inputs.name.match(/[a-zA-Z]/)) verify[0] = true;
    else {
      verify[0] = false;
      alert('Incorrect Name Format');
    }
    if (inputs.email.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]/))
      verify[1] = true;
    else {
      verify[1] = false;
      alert('Incorrect E-Mail Format');
    }
    if (inputs.details !== '') verify[2] = true;
    else {
      verify[2] = false;
      alert('Please provide details!');
    }

    let AllVerified = true;
    for (let i = 0; i < verify.length; i += 1) if (!verify[i]) AllVerified = false;
    if (AllVerified) {
      window.scrollTo(0, 0);
      history.push({
        pathname: '/ThankYou',
        state:
          'Your request has been sent, a member of the support team will get in contact with you through the email you provided as soon as possible.',
      });
    }
  };

  return (
    <div className="flex flex-col px-sides sm:mt-0 mt-20 h-section items-center sm:flex-row w-full">
      <form className="flex flex-col sm:w-1/2 w-full">
        <div className="mb-8">
          <label className="mb-2  block text-paragraph">Full Name:</label>
          <input
            onBlur={(e) => setInputs({ ...inputs, name: e.target.value })}
            className="p-2 w-3/4 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Email:</label>
          <input
            onBlur={(e) => setInputs({ ...inputs, email: e.target.value })}
            className="p-2 w-3/4 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">Details:</label>
          <textarea
            onBlur={(e) => setInputs({ ...inputs, details: e.target.value })}
            className="p-2 w-3/4 h-52 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your details here..."
          />
        </div>
        <button
          onClick={() => GoToRoute()}
          className="w-32 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          type="button"
        >
          Submit
        </button>
      </form>
      <div className="sm:w-1/2 w-full flex justify-center ">
        <div className="bg-blue-light rounded-lg p-6 sm:w-72 w-56 h-64  ">
          <div className="text-subtitle mb-4">Find Us At:</div>
          <div className="text-paragraph text-gray-700">Nergiz Plaza</div>
          <div className="text-paragraph text-gray-700">3rd Floor</div>
          <div className="text-paragraph text-gray-700">Bakhtiyari Street 40m</div>
          <div className="text-paragraph text-gray-700">Erbil, Iraq</div>
          <div className="text-paragraph text-gray-700">44001</div>
        </div>
      </div>
    </div>
  );
}
