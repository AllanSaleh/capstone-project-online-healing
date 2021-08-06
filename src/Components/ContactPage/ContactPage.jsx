import React, { useState } from 'react';

import RadioButtons from './RadioButtons';
import Form from './Form';

export default function ContactPage({ loginStatus }) {
  const [selectedChoice, setChoice] = useState('');

  return (
    <>
      <RadioButtons
        choiceCheck={(choice) => {
          if (choice !== selectedChoice) setChoice(choice);
        }}
      />
      <Form selectedChoice={selectedChoice} loginStatus={loginStatus} />
    </>
  );
}
