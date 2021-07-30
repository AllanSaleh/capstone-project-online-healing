import React from 'react';

import ContactPic from './Images/ContactPic.svg';

export default function RadioButtons() {
  const radios = [
    { value: 'ServiceQuestion', text: 'I have a question about the service.' },
    {
      value: 'ClientSupport',
      text: "I'm a registered client and I need support.",
    },
    {
      value: 'CouncelorInterest',
      text: "I'm a counselor interested in joining.",
    },
    {
      value: 'CounselorSupport',
      text: "I'm a counselor interested in joining.",
    },
    {
      value: 'BusinessInquiry',
      text: "I'm a registered counselor and I need support.",
    },
    {
      value: 'OrganizationInterest',
      text: "I'm interested in Healing Online for my organization.",
    },
    { value: 'BillingQuestion', text: 'I have a billing related question.' },
  ];
  return (
    <div className="h-firstsection pt-navbar px-sides flex flex-col justify-evenly w-full">
      <div>
        <div className="text-2xl sm:text-title sm:mb-0 mb-3">
          SEND US YOUR REQUEST!
        </div>
        <div className="sm:text-subtitle sm:mb-0 mb-10  text-gray-700 md:text-sm lg:text-xl lg:text-gray-700 lg:text-subtitle md:mt-5 md:flex-col md:justify-evenly md:flex">
          Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we'd be happy to
          help!
        </div>
      </div>

      <div className="flex justify-between sm:flex-row flex-col">
        <div>
          <div className="text-subtitle mb-4 text-sm sm:text-lg">Type of Contact</div>
          <div className="flex flex-col justify-between">
            {radios.map((radio) => (
              <div className="flex ml-4 my-2 ">
                <input
                  name="ContactRadio"
                  className="my-2 mr-4"
                  type="radio"
                  value={radio.vlaue}
                />
                <div className="text-paragraph sm:text-lg text-xm">{radio.text}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={ContactPic} className="sm:block hidden" alt="contact pic" />
      </div>
    </div>
  );
}
