import React from 'react';

import TeamCard from './TeamCard';

import AllanImg from './Images/AllanImg.svg';
import PayamImg from './Images/PayamImg.svg';
import AhmedImg from './Images/AhmedImg.svg';
import AbdulmajeedImg from './Images/AbdulmajeedImg.svg';
import SnoorImg from './Images/SnoorImg.svg';
import AvrazImg from './Images/AvrazImg.svg';

export default function TeamPage() {
  window.scrollTo(0, 0);
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
    <div className="flex flex-col justify-evenly px-sides pt-navbar lg:h-firstsection">
      <div className="text-3xl lg:text-title uppercase">we are healing, nice to meet you!</div>

      <div className="flex flex-col justify-between">
        <div className="text-lg lg:text-subtitle text-gray-700 mb-8">Meet the Team!</div>

        <div className="flex justify-between flex-col lg:flex-row">
          {Team.map((member) => (
            <TeamCard img={member.img} name={member.name} position={member.position} />
          ))}
        </div>
      </div>
    </div>
  );
}
