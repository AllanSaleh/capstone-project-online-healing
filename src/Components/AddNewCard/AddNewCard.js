import React, { useState } from 'react';
import Card1 from './Card1.svg';
import Card2 from './Card2.svg';

export default function AddNewCard() {
  const [countryList, setCountries] = useState(['United States', 'Iraq', 'United Kingdom']);
  const [cityList, setCities] = useState(['Sulaymaniyah', 'Erbil', 'Dohuk']);

  return (
    <div className="flex flex-col justify-evenly px-sides pt-navbar h-firstsection">
      <div>
        <div className="text-title leading-tight">ADD CARD DETAILS</div>
        <div className="text-subtitle text-gray-700">
          Please make sure all of the info you enter are the same as your card registration info.
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col justify-start h-full">
          <div className="my-4">
            <div className="text-paragraph text-gray-700">Supported Card Types</div>
            <div className="flex">
              <div className="leading-snug h-12 px-1 py-2 text-paragraph text-blue-dark border-2 border-r-0 border-blue-dark w-32 text-center rounded-lg rounded-r-none">
                MasterCard
              </div>
              <div className="leading-snug h-12 px-1 py-2 text-paragraph text-blue-dark border-2 border-blue-dark w-32 text-center rounded-lg rounded-l-none">
                VisaCard
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
            <div className="w-64 text-paragraph text-gray-700">Name on Card</div>
            <input
              placeholder="John Doe"
              className="w-64 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start h-full">
          <div className="my-4">
            <div className="text-paragraph text-gray-700">Country</div>
            <select className="w-64 h-12 p-2 border-gray-700 border-2 rounded-lg">
              {countryList.map((country) => (
                <option value={country} className="py-1 text-paragraph text-gray-700">
                  {country}
                </option>
              ))}
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
              {cityList.map((city) => (
                <option value={city} className="py-1 text-paragraph text-gray-700">
                  {city}
                </option>
              ))}
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

        <div className="flex flex-col justify-center h-full mr-64">
          <img className="mt-3 h-56" src={Card1} alt="MasterCard" />
          <img className="mt-3 h-56" src={Card2} alt="VisaCard" />
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
