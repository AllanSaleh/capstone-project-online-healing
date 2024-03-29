import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';

import Card1 from './Images/Card1.svg';
import Card2 from './Images/Card2.svg';

export default function AddNewCardPage({ loginStatus }) {
  window.scrollTo(0, 0);
  const history = useHistory();
  const { t } = useTranslation();

  const [countryList, setCountries] = useState([]);
  const [cityList, setCities] = useState([]);

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries')
      .then((response) => response.json())
      .then((json) => {
        json.data.forEach((item) => setCountries((prevState) => [...prevState, item.country]));
        json.data[0].cities.forEach((city) => setCities((prevState) => [...prevState, city]));
      });
  }, []);

  const UpdateCities = (country) => {
    fetch('https://countriesnow.space/api/v0.1/countries')
      .then((response) => response.json())
      .then((json) => {
        setCities([]);
        json.data.forEach((item) => {
          if (item.country === country)
            item.cities.forEach((city) => setCities((prevState) => [...prevState, city]));
        });
      });
  };

  const [inputs, setInputs] = useState({
    number: '',
    date: '',
    cvv: '',
    name: '',
    country: '',
    zip: '',
    city: '',
    address: '',
    type: 'Master',
  });

  const GoToRoute = () => {
    const verify = [false, false, false, false, false, false];

    if (inputs.number.match(/[0-9]/) && inputs.number.length === 19) verify[0] = true;
    else {
      verify[0] = false;
      alert(t('AddNewCard.NumberAlert'));
    }
    if (inputs.date.match(/[0-9]+[/]+[0-9]/) && inputs.date.length === 5) verify[1] = true;
    else {
      verify[1] = false;
      alert(t('AddNewCard.DateAlert'));
    }
    if (inputs.cvv.match(/[0-9]/) && inputs.cvv.length === 3) verify[2] = true;
    else {
      verify[2] = false;
      alert(t('AddNewCard.CvvAlert'));
    }
    if (inputs.name.match(/[a-zA-Z]/)) verify[3] = true;
    else {
      verify[3] = false;
      alert(t('AddNewCard.NameAlert'));
    }
    if (inputs.zip.match(/[0-9]+[-]+[0-9]/) || inputs.zip.match(/[0-9]/)) verify[4] = true;
    else {
      verify[4] = false;
      alert(t('AddNewCard.ZipAlert'));
    }
    if (inputs.address.match(/[a-zA-Z0-9.,]/)) verify[5] = true;
    else {
      verify[5] = false;
      alert(t('AddNewCard.AddressAlert'));
    }

    let AllVerified = true;
    for (let i = 0; i < verify.length; i += 1) if (!verify[i]) AllVerified = false;
    if (AllVerified) {
      firebase
        .firestore()
        .collection('users')
        .doc(loginStatus.user_id)
        .update({
          cards: firebase.firestore.FieldValue.arrayUnion({
            number: inputs.number,
            date: inputs.date,
            cvv: inputs.cvv,
            name: inputs.name,
            country: inputs.country,
            zip: inputs.zip,
            city: inputs.city,
            address: inputs.address,
            type: inputs.type,
          }),
        });
      history.push({
        pathname: '/ThankYou',
        state: [t('AddNewCard.CardThankYou1'), t('AddNewCard.CardThankYou2')],
      });
    }
  };

  return (
    <div className="my-4 flex flex-col justify-evenly px-sides pt-navbar lg:h-firstsection">
      <div>
        <div className="text-3xl lg:text-title uppercase">{t('AddNewCard.AddNew')}</div>
        <div className="text-lg lg:text-subtitle lg:mt-4 text-gray-700">
          {t('AddNewCard.CardSure')}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center  ">
        <div className="flex flex-col justify-start h-full">
          <div className="my-4">
            <div className="text-paragraph text-gray-700">{t('AddNewCard.Supported')}</div>
            <div className="flex">
              <div className="leading-snug h-12 px-1 py-2 text-paragraph text-blue-dark border-2 border-r-0 border-blue-dark w-36 text-center rounded-lg rounded-r-none">
                MasterCard
              </div>
              <div className="leading-snug h-12 px-1 py-2 text-paragraph text-blue-dark border-2 border-blue-dark w-36 text-center rounded-lg rounded-l-none">
                VisaCard
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="text-paragraph text-gray-700">{t('AddNewCard.Number')}</div>
            <input
              onBlur={(e) => setInputs({ ...inputs, number: e.target.value })}
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-72 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
          <div className="flex justify-between w-64 my-4">
            <div>
              <div className="text-paragraph text-gray-700">{t('AddNewCard.Date')}</div>
              <input
                onBlur={(e) => setInputs({ ...inputs, date: e.target.value })}
                placeholder="MM / YY"
                className="w-36 h-12 mr-1 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
              />
            </div>
            <div>
              <div className="text-paragraph text-gray-700">{t('AddNewCard.Cvv')}</div>
              <input
                onBlur={(e) => setInputs({ ...inputs, cvv: e.target.value })}
                placeholder="XXX"
                className="w-36 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="my-4">
            <div className="w-72 text-paragraph text-gray-700">{t('AddNewCard.Name')}</div>
            <input
              onBlur={(e) => setInputs({ ...inputs, name: e.target.value })}
              placeholder="John Doe"
              className="w-72 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start h-full">
          <div className="my-4">
            <div className="text-paragraph text-gray-700">{t('AddNewCard.Country')}</div>
            <select
              onChange={(e) => {
                UpdateCities(e.target.value);
                setInputs({ ...inputs, country: e.target.value });
              }}
              className="w-72 h-12 p-2 border-gray-700 border-2 rounded-lg"
            >
              {countryList.map((country) => (
                <option value={country} className="py-1 text-paragraph text-gray-700">
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="my-4">
            <div className="text-paragraph text-gray-700">{t('AddNewCard.Zip')}</div>
            <input
              onBlur={(e) => setInputs({ ...inputs, zip: e.target.value })}
              placeholder="XXXXX or XXXXX-XXXX"
              className="w-72 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>

          <div className="my-4">
            <div className="text-paragraph text-gray-700">{t('AddNewCard.City')}</div>
            <select
              onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
              className="w-72 h-12 p-2 border-gray-700 border-2 rounded-lg"
            >
              {cityList.map((city) => (
                <option value={city} className="py-1 text-paragraph text-gray-700">
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="my-4">
            <div className="text-paragraph text-gray-700">{t('AddNewCard.Address')}</div>
            <input
              onBlur={(e) => setInputs({ ...inputs, address: e.target.value })}
              placeholder="House, Street"
              className="w-72 h-12 text-paragraph text-gray-700 border-2 border-gray-700 p-2 rounded-lg"
            />
          </div>
        </div>

        <div className="flex lg:flex-col justify-center h-full w-full lg:w-auto lg:mr-56">
          <img className="w-1/2 lg:w-auto lg:mt-3 lg:h-56" src={Card1} alt="MasterCard" />
          <img className="w-1/2 lg:w-auto lg:mt-3 lg:h-56" src={Card2} alt="VisaCard" />
        </div>
      </div>

      <button
        onClick={() => GoToRoute()}
        type="submit"
        className="uppercase self-center h-12 w-32 lg:w-48 text-lg lg:text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
      >
        {t('AddNewCard.AddCard')}
      </button>
    </div>
  );
}
