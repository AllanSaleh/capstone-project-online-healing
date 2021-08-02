import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

import HpIllustration from './Images/HP_illustration.svg';
import Facebook from './Images/Facebook.svg';
import Google from './Images/Google.svg';
import Or from './Images/or.svg';

export default function LoginPage({ setLoginStatus }) {
  window.scroll(0, 0);
  const usersRef = firebase.firestore().collection('users');
  const [fields, setFields] = useState({ email: '', password: '' });

  const Login = () => {
    usersRef.get().then((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      const loggedUser = users.filter(
        (user) => user.email === fields.email && user.password === fields.password
      );
      if (loggedUser.length > 0) {
        setLoginStatus({
          login: true,
          complete: loggedUser[0].complete,
          user_id: loggedUser[0].user_id,
        });
        console.log(`user: ${loggedUser[0].fullname} is found`);
      } else {
        console.log('no user found');
      }
    });
  };

  return (
    <div className=" flex flex-col lg:flex lg:flex-row items-center justify-evenly h-firstsection">
      <div className="lg:w-auto transform translate-y-44 w-72 lg:transform lg:translate-y-0">
        <div className="lg:text-5xl text-3xl lg:text-left text-center lg:pb-16 ">LOGIN</div>
        <div className="flex flex-col justify-evenly lg:w-96 h-72 bg-white shadow-xl rounded-lg p-4">
          <input
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            type="email"
            id="email"
            placeholder="email"
            className="border border-black border-opacity-40 rounded-lg h-12 p-2"
          />
          <input
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border border-black border-opacity-40 rounded-lg h-12 p-2"
          />
          <div className="h-28 lg:h-auto flex flex-col lg:flex-row justify-between">
            <button
              onClick={Login}
              type="button"
              className="transition-all duration-300 w-full lg:w-40 h-12 lg:text-subtitle text-base rounded-lg bg-blue-dark border border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark"
            >
              LOG IN
            </button>
            <Link className="lg:w-40" to="/SignUp">
              <button
                type="button"
                className="transition-all duration-300 w-full h-12 lg:text-subtitle text-base rounded-lg text-blue-dark bg-white border border-blue-dark hover:bg-blue-dark hover:text-black hover:border-transparent"
              >
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 ">
          <img src={Or} alt="Or" />
          <div className="flex items-center justify-evenly px-16 mt-4">
            <button type="button">
              <img src={Facebook} alt="facebook" />
            </button>
            <button type="button">
              <img src={Google} alt="google" />{' '}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:transform lg:translate-y-0 transform -translate-y-96 lg:w-auto w-48 lg:mt-0 -mt-40">
        <img src={HpIllustration} alt="HP_illustration" />
      </div>
    </div>
  );
}
