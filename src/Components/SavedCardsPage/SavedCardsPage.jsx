import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import firebase from '../../firebase';

import Next from './Images/Next.svg';
import Prev from './Images/Prev.svg';
import CreditCard from '../CreditCard/CreditCard';

export default function SavedCardsPage({ loginStatus }) {
  window.scrollTo(0, 0);
  const { t } = useTranslation();
  let count = 0;

  const [cards, setCards] = useState([
    {
      date: 'XX/XX',
      number: 'XXXX XXXX XXXX XXXX',
      name: 'Loading...',
      type: 'Master',
    },
  ]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(loginStatus.user_id)
      .get()
      .then((doc) => {
        setCards(doc.data().cards);
      });
  }, []);

  const [selected, setSelected] = useState('');

  return (
    <div className="flex flex-col justify-evenly lg:h-firstsection pt-navbar px-sides">
      <div>
        <div className="text-3xl lg:text-title">{t('Cards.Saved')}</div>
        <div className="text-xl lg:text-subtitle text-gray-700">{t('Cards.Support')}</div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            const NewPos = document.getElementById('Menu').scrollLeft - 500;
            document.getElementById('Menu').scrollTo({
              left: NewPos,
              behavior: 'smooth',
            });
          }}
          type="button"
          className="mr-2 lg:mr-4 h-10 lg:h-12 w-10 lg:w-12 px-3 bg-white rounded-lg border-2 border-black hover:bg-blue-dark"
        >
          <img src={Prev} alt="Previous" />
        </button>

        <div className="relative h-40 lg:h-80 w-full overflow-hidden">
          <div
            id="Menu"
            className="h-44 lg:h-96 box-border whitespace-nowrap overflow-x-auto overflow-y-hidden"
          >
            {cards.map((card) => {
              count += 1;
              if (count === 4) count = 1;

              return (
                <CreditCard
                  deletable
                  select={selected === card.number}
                  setID={(ID) => {
                    if (ID !== selected) setSelected(ID);
                  }}
                  id={card.number}
                  background={count}
                  logo={card.type}
                  date={card.date}
                  number={card.number}
                  name={card.name}
                  loginStatus={loginStatus}
                />
              );
            })}
          </div>
        </div>

        <button
          onClick={() => {
            const NewPos = document.getElementById('Menu').scrollLeft + 500;
            document.getElementById('Menu').scrollTo({
              left: NewPos,
              behavior: 'smooth',
            });
          }}
          type="button"
          className="ml-2 lg:ml-4 h-10 lg:h-12 w-10 lg:w-12 px-3 bg-white rounded-lg border-2 border-black hover:bg-blue-dark"
        >
          <img src={Next} alt="Previous" />
        </button>
      </div>

      <Link to="/AddNewCard">
        <button
          type="button"
          className="mt-8 w-64 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          {t('Cards.Add')}
        </button>
      </Link>
    </div>
  );
}
