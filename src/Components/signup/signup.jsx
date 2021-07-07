import React from 'react';
import SignupImage from './SignupImage.svg'
import SocialMedia from './SocialMedia.svg'
function Signup(){
    return(
            
            <div className=" h-firstsection mt-16 flex flex-row items-center justify-evenly">
                 <div>
                    <img src={SignupImage} alt="SignupImage"  />
                </div>
                <div className="w-auto">
                <div className="text-5xl pb-16">
                 SIGN UP NOW
                </div>
                    <div className=" w-auto h-auto ring-1 bg-white shadow-xl rounded-lg ">
                        <div className="flex flex-col">
                            <div>
                            <input type="text" id="first-name" placeholder="First Name" className="rounded-sm ring-1 pl-2 ml-4 mt-10 mr-2 h-12" />
                            <input type="text" id="last-name" placeholder="Last Name" className="rounded-sm ring-1 pl-2 ml-4 mt-10 mr-5 h-12" />
                            </div>
                            <input type="Email" name="Email" id="email" placeholder="Email" className="rounded-sm ring-1 p-2 ml-4 mt-5 mr-5 h-12" />
                            <input type="Confirm Email" name="Confirm Email" id="Confirm-email" placeholder="Confirm Email" className="rounded-sm ring-1 p-2 ml-4 mt-5 mr-5 h-12" />
                            <div>
                            <input type="password" id="password" placeholder="Password" className="rounded-sm ring-1 pl-2 ml-4 mt-5 mr-2 h-12" />
                            <input type="password" id="confirm-password" placeholder="Confirm Password" className="rounded-sm ring-1 pl-2 ml-4 mt-5 mr-5 h-12" />
                            </div>
                            <div className="flex flex-row items-center mt-10 ml-4">
                                <p className="mr-6">Birth date</p>
                                <input type="text" id="DD" placeholder="DD" className="rounded-sm ring-1 pl-2 ml-4  mr-2 h-12 w-16" />
                                <input type="text" id="MM" placeholder="MM" className="rounded-sm ring-1 pl-2 ml-4  mr-2 h-12 w-24" />
                                <input type="text" id="YYYY" placeholder="YYYY" className="rounded-sm ring-1 pl-2 ml-4  mr-2 h-12 w-28" />
                            </div>
                            <div className="flex flex-row justify-between" >
                            <button className="mt-10 mb-10 ml-4  pt-2 pb-2  px-16 text-subtitle rounded-md bg-blue-dark border hover:bg-white hover:text-blue-dark hover:border-blue-dark">LOG IN</button>
                            <button className="mt-10 mb-10 mr-5 border pt-2 pb-2 px-16 text-subtitle rounded-md border-blue-dark border-opacity-100 bg-white text-blue-dark hover:bg-blue-dark hover:text-black hover:border-blue-dark">SIGN UP</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 ml-12">
                        <img src={SocialMedia} alt="SocialMedia"  />
                    </div>
                </div>
            </div>
        
        
    );
}

export default Signup;