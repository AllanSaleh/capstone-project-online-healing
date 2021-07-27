import React from 'react';
import ContactPic from './ContactPic.svg';

export default function FirstSection() {
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
    <div className="h-firstsection pt-navbar px-sides flex flex-col justify-evenly">
      <div>
        <div className="text-title">SEND US YOUR REQUEST!</div>
        <div className="text-subtitle text-gray-700">
          Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we'd be happy to
          help!
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="text-subtitle mb-4">Type of Contact</div>
          <div className="flex flex-col justify-between">
            {radios.map((radio) => (
              <div className="flex ml-4 my-2 ">
                <input name="ContactRadio" className="my-2 mr-4" type="radio" value={radio.vlaue} />
                <div className="text-paragraph">{radio.text}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={ContactPic} alt="contact pic" />
      </div>
    </div>
  );
}
