import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Next from './Next.svg';
import Prev from './Prev.svg';
import CreditCard from './CreditCard';

let i = 0;

export default function Purchase() {
  const cards = [
    { date: '04/2025', number: '123456789', name: 'John Doe', type: 'Master' },
    { date: '04/2025', number: '123456789', name: 'John Doe', type: 'Visa' },
    { date: '04/2025', number: '123456789', name: 'John Doe', type: 'Master' },
    { date: '04/2025', number: '123456789', name: 'John Doe', type: 'Visa' },
    { date: '04/2025', number: '123456789', name: 'John Doe', type: 'Master' },
  ];

  const [selected, setSelected] = useState('');

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-evenly h-firstsection px-sides">
        <div>
          <div className="text-title">SELECT CARD</div>
          <div className="text-subtitle text-gray-700">
            Please select the card you want to buy the tickets with
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              document.getElementById('Menu').scrollLeft = 68;
            }}
            type="button"
            className="h-12 w-12 px-3 text-subtitle bg-white rounded-lg border-2 border-black hover:bg-blue-dark"
          >
            <img src={Prev} alt="Previous" />
          </button>

          <div className="relative h-80 w-full border-2 border-black overflow-hidden">
            <ul
              id="Menu"
              className="h-96 bg-red-300 box-border whitespace-nowrap overflow-x-auto overflow-y-hidden"
            >
              {cards.map((card) => {
                i += 1;
                if (i === 4) i = 1;
                return (
                  <CreditCard
                    background={i}
                    logo={card.type}
                    date={card.date}
                    number={card.number}
                    name={card.name}
                  />
                );
              })}
            </ul>
          </div>

          {/* <div className="border-2 border-black w-full overflow-hidden">
            <div className="flex w-full h-64 bg-red-300 box-border whitespace-nowrap overflow-x-scroll overflow-y-hidden">
              {cards.map((card) => {
                i += 1;
                if (i === 4) i = 1;
                return (
                  <CreditCard
                    background={`C${i}`}
                    Logo={`${card.type}Logo`}
                    date={card.date}
                    number={card.number}
                    name={card.name}
                  />
                );
              })}
            </div>
          </div> */}

          <button
            type="button"
            className="h-12 w-12 px-3 text-subtitle bg-white rounded-lg border-2 border-black hover:bg-blue-dark"
          >
            <img src={Next} alt="Previous" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
