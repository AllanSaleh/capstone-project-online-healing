import React, { useState } from 'react';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Next from './Next.svg';
import Prev from './Prev.svg';
import CreditCard from '../CreditCard/CreditCard';

let count = 0;

export default function Purchase() {
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
      type: 'Visa',
    },
  ];

  const [selected, setSelected] = useState('');

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-evenly h-firstsection pt-navbar px-sides">
        <div>
          <div className="text-3xl lg:text-title">SELECT CARD</div>
          <div className="text-xl lg:text-subtitle text-gray-700">
            Please select the card you want to buy the tickets with
          </div>
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
              {cards.map((card, i) => {
                count += 1;
                if (count === 4) count = 1;

                return (
                  <CreditCard
                    select={parseInt(selected) === i}
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

        <div className="text-center self-center">
          <div className="text-xl lg:text-subtitle self-center">
            Click confirm to use the selected card to purchase 5 tickets for 10$
          </div>
          <button
            onClick={() => {
              if (selected === '') alert('Please choose a Credit Card!');
              else alert(`Used Card ${selected}, Purchase Successful!`);
            }}
            type="button"
            className="mt-8 w-52 lg:w-72 h-12 text-lg lg:text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
          >
            CONFIRM PURCHASE
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
