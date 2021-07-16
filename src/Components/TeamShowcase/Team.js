import React from 'react';
import Pica from './Pica.svg';
import Picb from './Picb.svg';
import Picc from './Picc.svg';
import Picd from './Picd.svg';
import Pice from './Pice.svg';
import Picf from './Picf.svg';


export default function Recomended() {  
    return (
        <div className="font-body px-sides pt-navbar pb-48">
        <div className="text-title leading-tight uppercase ">we are healing, nice to meet you!</div>
        <div className="text-paragraph text-gray-700 pt-20">Meet the Team!</div>
        <div className="flex flex-row justify-between pt-12 space-x-3">
        <img src={Pica} alt="First team member" />
        <img src={Picb} alt="Second team member" />
        <img src={Picc} alt="Third team member" />
        <img src={Picd} alt="Fourth team member" />
        <img src={Pice} alt="Fifth team member" />
        <img src={Picf} alt="Sixth team member" />

        </div>
        
        

        </div>
    )}