import React from 'react';
import HP_illustration from './HP_illustration.svg';
import Loginwith from './loginwith.svg';
function Login(){
    return(
        <div>
            
            <div className="h-firstsection flex flex-row items-center justify-evenly">
                <div className="w-auto">
                <div className="text-5xl pb-16">
                 LOGIN
                </div>
                    <div className=" w-96 h-72 ring-1 bg-white shadow-xl rounded-lg ">
                        <div className="flex flex-col">
                            <input type="email" id="email" placeholder="email" className="rounded-sm ring-1 pl-2 ml-4 mt-10 mr-5 h-12" />
                            <input type="password" name="password" id="password" placeholder="password" className="rounded-sm ring-1 p-2 ml-4 mt-5 mr-5 h-12" />
                            <div className="flex flex-row justify-between" >
                            <button className="mt-10 ml-4  pt-2 pb-2 pl-10 pr-10 text-subtitle rounded-md bg-blue-dark border hover:bg-white hover:text-blue-dark hover:border-blue-dark">LOG IN</button>
                            <button className="mt-10 mr-5 border pt-2 pb-2 pl-10 pr-10 text-subtitle rounded-md border-blue-dark border-opacity-100 bg-white text-blue-dark hover:bg-blue-dark hover:text-black hover:border-blue-dark">SIGN UP</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <img src={Loginwith} alt="loginwith"  />
                    </div>
                </div>
                <div>
                    <img src={HP_illustration} alt="HP_illustration"  />
                </div>
            </div>
        </div>
        
    );
}

export default Login;