import React, { useState } from 'react';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Next from './Next.svg';
import Prev from './Prev.svg';
import CreditCard from '../CreditCard/CreditCard';

let count = 0;

export default function SavedCards() {
  const cards = [
    {
      date: '04/2025',
      number: '1234 1234 1234 1234',
      name: 'John Doe',
      type: 'Master',
    },
    {
      date: '04/2025',
      number: '1234 1234 1234 1234',
      name: 'John Doe',
      type: 'Visa',
    },
    {
      date: '04/2025',
      number: '1234 1234 1234 1234',
      name: 'John Doe',
      type: 'Master',
    },
    {
      date: '04/2025',
      number: '1234 1234 1234 1234',
      name: 'John Doe',
      type: 'Visa',
    },
    {
      date: '04/2025',
      number: '1234 1234 1234 1234',
      name: 'John Doe',
      type: 'Master',
    },
    {
      date: '04/2025',
      number: '1234 1234 1234 1234',
      name: 'John Doe',
      type: 'Master',
    },
  ];

  const [selected, setSelected] = useState('');

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-evenly h-firstsection pt-navbar px-sides">
        <div>
          <div className="text-title">YOUR SAVED CARDS</div>
          <div className="text-subtitle text-gray-700">
            We only support cards as a payment method at the moment!
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              const NewPos = document.getElementById('Menu').scrollLeft - 560;
              document.getElementById('Menu').scrollTo({
                left: NewPos,
                behavior: 'smooth',
              });
            }}
            type="button"
            className="mr-4 h-12 w-12 px-3 text-subtitle bg-white rounded-lg border-2 border-black hover:bg-blue-dark"
          >
            <img src={Prev} alt="Previous" />
          </button>

          <div className="relative h-80 w-full overflow-hidden">
            <div
              id="Menu"
              className="h-96 box-border whitespace-nowrap overflow-x-auto overflow-y-hidden"
            >
              {cards.map((card, i) => {
                count += 1;
                if (count === 4) count = 1;

                return (
                  <CreditCard
                    deletable={true}
                    select={false}
                    setID={(ID) => {
                      if (ID !== selected) setSelected(ID);
                    }}
                    id={i}
                    background={count}
                    logo={card.type}
                    date={card.date}
                    number={card.number}
                    name={card.name}
                  />
                );
              })}
            </div>
          </div>

          <button
            onClick={() => {
              const NewPos = document.getElementById('Menu').scrollLeft + 560;
              document.getElementById('Menu').scrollTo({
                left: NewPos,
                behavior: 'smooth',
              });
            }}
            type="button"
            className="ml-4 h-12 w-12 px-3 text-subtitle bg-white rounded-lg border-2 border-black hover:bg-blue-dark"
          >
            <img src={Next} alt="Previous" />
          </button>
        </div>

        <button
          type="button"
          className="mt-8 w-64 h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
        >
          ADD NEW CARD+
        </button>
      </div>
      <Footer />
    </div>
  );
}
