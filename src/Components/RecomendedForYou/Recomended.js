import React from 'react';
import Pic from './Pic.svg';
import Send from '../Footer/Send.svg'
import Piccopy from './Piccopy.svg';
export default function Recomended() {  
    return (
        <div className="font-body px-sides pt-20 pb-32">
            <div className="flex flex-col justify-between items-start h-40 ">
    <div>
        <div className="text-title leading-tight">Sign Up For The Healing Blog</div>
        <div className="text-paragraph text-gray-700">Weekly, Ad-Free Blogs That Help You Stay In The Know!</div>
    </div>

    <div className="flex  border-2 border-gray-600 h-12 rounded-lg">
        <input className="w-64 p-2 rounded-l-md" placeholder="Enter your E-Mail" type="email" />
        <button className="border-0 border-l-2 border-gray-600 p-2 bg-blue-dark rounded-r-md" type="button">
            <img src={Send} alt="Send" />
        </button>
    </div>
</div>
            <div className="pt-36">
                <p className="uppercase text-title">recomended for you</p>

             <div className='flex flex-row space-x-4 justify-between pt-6'>
                <img src={Piccopy} alt="image" />
                 <img src={Pic} alt="image" />
              </div>
            </div>
           
             
        </div>
    );}