import React from 'react';
import ContactPic from './ContactPic.svg';
export default function FirstSection() {
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
            <div className="flex ml-4 my-2 ">
              <input
                name="ContactRadio"
                className="my-2 mr-4"
                type="radio"
                value="ServiceQuestion"
              />
              <div className="text-paragraph">
                I have a question about the service.
              </div>
            </div>

            <div className="flex ml-4 my-2">
              <input
                name="ContactRadio"
                className="my-2 mr-4"
                type="radio"
                value="ClientSupport"
              />
              <div className="text-paragraph">
                I'm a registered client and I need support.{' '}
              </div>
            </div>

            <div className="flex ml-4 my-2">
              <input
                name="ContactRadio"
                className="my-2 mr-4 "
                type="radio"
                value="CouncelorInterest"
              />
              <div className="text-paragraph">
                I'm a counselor interested in joining.{' '}
              </div>
            </div>

            <div className="flex ml-4 my-2">
              <input
                name="ContactRadio"
                className="my-2 mr-4"
                type="radio"
                value="CounselorSupport"
              />
              <div className="text-paragraph">
                I'm a registered counselor and I need support.{' '}
              </div>
            </div>

            <div className="flex ml-4 my-2">
              <input
                name="ContactRadio"
                className="my-2 mr-4"
                type="radio"
                value="BusinessInquiry"
              />
              <div className="text-paragraph">
                I have a business-related inquiry.{' '}
              </div>
            </div>

            <div className="flex ml-4 my-2">
              <input
                name="ContactRadio"
                className="my-2 mr-4"
                type="radio"
                value="OrganizationInterest"
              />
              <div className="text-paragraph">
                I'm interested in Healing Online for my organization.{' '}
              </div>
            </div>

            <div className="flex ml-4 my-2">
              <input
                name="ContactRadio"
                className="my-2 mr-4"
                type="radio"
                value="BillingQuestion"
              />
              <div className="text-paragraph">
                I have a billing related question.{' '}
              </div>
            </div>
          </div>
        </div>
        <img src={ContactPic} alt="contact pic" />
      </div>
    </div>
  );
}
