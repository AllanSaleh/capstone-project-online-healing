import React from 'react';

export default function AddNewCard() {
  return (
    <div className="flex flex-col justify-around px-sides pt-navbar h-firstsection">
      <div>
        <div className="text-title leading-tight">ADD CARD DETAILS</div>
        <div className="text-subtitle text-gray-700">
          Please make sure all of the info you enter are the same as your card registration info.
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-between mr-32">
          <div className="my-4">
            <div className="text-paragraph text-gray-700">Supported Card Types</div>
            <div className="flex">
              <div className="h-12 p-2 text-paragraph text-blue-dark border-2 border-r-0 border-blue-dark w-40 text-center rounded-lg rounded-r-none">
                Mastercard
              </div>
              <div className="h-12 p-2 text-paragraph text-blue-dark border-2 border-blue-dark w-40 text-center rounded-lg rounded-l-none">
                Visa
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="text-paragraph text-gray-700">Card Number</div>
            <input
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-64 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
          <div className="flex justify-between w-64 my-4">
            <div>
              <div className="text-paragraph text-gray-700">Expiry Date</div>
              <input
                placeholder="MM / YY"
                className="w-32 h-12 mr-1 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
              />
            </div>
            <div>
              <div className="text-paragraph text-gray-700">CVV Code</div>
              <input
                placeholder="XXX"
                className="w-32 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="my-4">
            <div className="w-64 text-paragraph text-gray-700">
              Name on Card
            </div>
            <input
              placeholder="John Doe"
              className="w-64 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between ml-32">
          <div className="my-4">
            <div className="text-paragraph text-gray-700">Country</div>
            <select className="w-64 h-12 p-2 border-gray-700 border-2 rounded-lg">
              <option className="py-1 text-paragraph text-gray-700">
                United States
              </option>
              <option className="py-1 text-paragraph text-gray-700">
                Iraq
              </option>
              <option className="py-1 text-paragraph text-gray-700">
                United Kingdom
              </option>
            </select>
          </div>

          <div className="my-4">
            <div className="text-paragraph text-gray-700">ZIP Code</div>
            <input
              placeholder="XXXXX or XXXXX-XXXX"
              className="w-64 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>

          <div className="my-4">
            <div className="text-paragraph text-gray-700">City</div>
            <select className="w-64 h-12 p-2 border-gray-700 border-2 rounded-lg">
              <option className="py-1 text-paragraph text-gray-700">
                Sulaymaniyah
              </option>
              <option className="py-1 text-paragraph text-gray-700">
                Erbil
              </option>
              <option className="py-1 text-paragraph text-gray-700">
                Dohuk
              </option>
            </select>
          </div>

          <div className="my-4">
            <div className="text-paragraph text-gray-700">Address</div>
            <input
              placeholder="House, Street"
              className="w-64 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="h-12 w-48 text-btn bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
      >
        ADD CARD
      </button>
    </div>
  );
}
