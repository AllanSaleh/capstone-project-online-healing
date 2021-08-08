import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { useTranslation } from 'react-i18next';

export default function Form({ selectedChoice, loginStatus }) {
  const history = useHistory();
  const { t } = useTranslation();

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
      alert(t('Contact.ChoiceAlert'));
    }
    if (inputs.name.match(/[a-zA-Z]/)) verify[0] = true;
    else {
      verify[0] = false;
      alert(t('Contact.NameAlert'));
    }
    if (inputs.email.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]/))
      verify[1] = true;
    else {
      verify[1] = false;
      alert(t('Contact.EmailAlert'));
    }
    if (inputs.details !== '') verify[2] = true;
    else {
      verify[2] = false;
      alert(t('Contact.DetailsAlert'));
    }

    let AllVerified = true;
    for (let i = 0; i < verify.length; i += 1) if (!verify[i]) AllVerified = false;
    if (AllVerified) {
      firebase.firestore().collection('Contacts').doc(loginStatus.user_id).set({
        user_id: loginStatus.user_id,
        choice: selectedChoice,
        name: inputs.name,
        email: inputs.email,
        details: inputs.details,
      });

      history.push({
        pathname: '/ThankYou',
        state: [t('Contact.ThankYou')],
      });
    }
  };

  return (
    <div className="flex flex-col px-sides sm:mt-0 mt-20 lg:h-section items-center sm:flex-row w-full">
      <form className="flex flex-col sm:w-1/2 w-full">
        <div className="mb-8">
          <label className="mb-2  block text-paragraph">{t('Contact.Name')}</label>
          <input
            onBlur={(e) => setInputs({ ...inputs, name: e.target.value })}
            className="p-2 w-3/4 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">{t('Contact.Email')}</label>
          <input
            onBlur={(e) => setInputs({ ...inputs, email: e.target.value })}
            className="p-2 w-3/4 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-8">
          <label className="mb-2 block text-paragraph">{t('Contact.Details')}</label>
          <textarea
            onBlur={(e) => setInputs({ ...inputs, details: e.target.value })}
            className="h-80 resize-none p-2 w-3/4 h-52 text-paragraph text-gray-700 rounded-lg border-2 border-gray-400 shadow-lg"
            placeholder="Enter your details here..."
          />
        </div>
        <button
          onClick={() => GoToRoute()}
          className="w-48 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          type="button"
        >
          {t('Booking.SubmitBtn')}
        </button>
      </form>
      <div className="sm:w-1/2 w-full my-8">
        <div className="bg-blue-light rounded-lg p-6 sm:w-72 w-56 h-64  ">
          <div className="text-subtitle mb-4">{t('Contact.Find')}</div>
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
