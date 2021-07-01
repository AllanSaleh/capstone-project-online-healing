import React from 'react';

export default function AddNewCard() {
  return (
    <div className="flex flex-col justify-around px-sides pt-navbar h-firstsection">
      <div>
        <div className="text-title leading-tight">ADD CARD DETAILS</div>
        <div className="text-subtitle text-gray-700">
          Please make sure all of the info you enter are the same as your card
          registration info.
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-between">
          <div className="my-4">
            <div className="text-paragraph text-gray-700">
              Supported Card Types
            </div>
            <div className="flex">
              <div className="text-paragraph text-blue-dark border-2 border-r-0 border-blue-dark w-40 text-center rounded-lg rounded-r-none">
                Mastercard
              </div>
              <div className="text-paragraph text-blue-dark border-2 border-blue-dark w-40 text-center rounded-lg rounded-l-none">
                Visa
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="text-paragraph text-gray-700">Card Number</div>
            <input
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-64 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
          <div className="flex justify-between w-64 my-4">
            <div>
              <div className="text-paragraph text-gray-700">Expiry Date</div>
              <input
                placeholder="MM / YY"
                className="w-32 mr-1 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
              />
            </div>
            <div>
              <div className="text-paragraph text-gray-700">CVV Code</div>
              <input
                placeholder="XXX"
                className="w-32 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="my-4">
            <div className="w-64 text-paragraph text-gray-700">
              Name on Card
            </div>
            <input
              placeholder="John Doe"
              className="w-64 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
