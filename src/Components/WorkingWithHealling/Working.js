import React from 'react';
import Frame from './Frame.svg';

export default function WorkingWithHealing() {
    return(
        <div className="pt-navbar px-sides space-y-6 ">
            <div className="flex space-y-6">
            <div className="flex flex-col">
                <div className="uppercase text-title mt-8">Why work with Healing?</div>
                <div className="text-jusfify space-y-6 w-3/4 mt-8">
                    <p className="text-subtitle text-gray-700">Reliable Income</p>
                    <p  className="text-paragraph text-justify">Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with life’s challenges. BetterHelp can be your main source of income ("full time") or a supplement to your current work.</p>
                </div>
                
                <div className="text-jusfify space-y-6 w-3/4 mt-8">
                    <p className="text-subtitle text-gray-700">Focus on Counseling</p>
                    <p  className="text-paragraph text-justify">No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</p>
                </div>

                <div className="text-jusfify space-y-6 w-3/4 mt-8">
                    <p className="text-subtitle text-gray-700">Focus on Counseling</p>
                    <p  className="text-paragraph text-justify .">No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</p>
                </div>

            </div>
            <img src={Frame} alt="illustration"/>
            </div>
            <div className="space-y-6 mt-8">
               <div>
                   <p className="text-title text-gray-700 space-y-6 " >Requirements</p>
                   <ul className="text-jusfify w-3/4 text-paragraph mt-8 list-disc">
                       <li>Licensed by a State Board to provide counseling</li>
                       <li>Experience in counseling for adults, couples, and/or teens</li>
                       <li>Excellent writing skills</li>
                       <li>Reliable Internet connection</li>
                       <li>Currently residing in the US</li>
                   </ul>
               </div>
               <button className=" h-12 text-subtitle bg-blue-dark rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-dark hovrr:border-blue-dark px-100">Get Started</button>
            </div>

        </div>
    );
}