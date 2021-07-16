import React from 'react';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import AllanImg from './AllanImg.svg';
import PayamImg from './PayamImg.svg';
import AhmedImg from './AhmedImg.svg';
import AbdulmajeedImg from './AbdulmajeedImg.svg';
import SnoorImg from './SnoorImg.svg';
import AvrazImg from './AvrazImg.svg';

export default function Recomended() {
  const Team = [
    {
      img: AllanImg,
      name: 'Allan Saleh',
      position: 'Lead Engineer & Web Developer',
    },
    {
      img: PayamImg,
      name: 'Payam Abubakr',
      position: 'Lead Engineer & Web Developer',
    },
    {
      img: AhmedImg,
      name: 'Ahmed Mohammed',
      position: 'Lead Engineer & Web Developer',
    },
    {
      img: AbdulmajeedImg,
      name: 'Abdulmajeed Jaafer',
      position: 'Lead Engineer & Web Developer',
    },
    {
      img: SnoorImg,
      name: 'Snoor Madih',
      position: 'Lead Engineer & Web Developer',
    },
    {
      img: AvrazImg,
      name: 'Avraz Zebary',
      position: 'Lead Engineer & Web Developer',
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-evenly px-sides pt-navbar h-firstsection">
        <div className="text-title uppercase">we are healing, nice to meet you!</div>

        <div className="flex flex-col justify-between">
          <div className="text-subtitle text-gray-700 mb-8">Meet the Team!</div>

          <div className="flex justify-between">
            {Team.map((member) => (
              <div className="flex flex-col w-52 bg-blue-light rounded-3xl justify-between">
                <div className="h-60">
                  <img className="w-full" src={member.img} alt="MemberImage" />
                  <div className="h-2 w-full bg-green-300" />
                </div>
                <div className="h-44 flex flex-col justify-evenly">
                  <div className="text-gray-700 text-subtitle text-center">{member.name}</div>
                  <div className="text-gray-700 text-paragraph text-center">{member.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
