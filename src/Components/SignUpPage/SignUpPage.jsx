import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import SignupImage from './Images/SignupImage.svg';
import Facebook from './Images/Facebook.svg';
import Google from './Images/Google.svg';
import Or from './Images/or.svg';
import firebase from '../../firebase';

export default function SignUpPage() {
  window.scrollTo(0, 0);
  const history = useHistory();

  // states to hold data for signup process
  const [valid, setValid] = useState(false);
  const usersRef = firebase.firestore().collection('users');
  const [brithDateObj, setBirthDateObj] = useState({
    day: '0',
    month: '0',
    year: '0',
  });
  const [fullName, setFullName] = useState({
    first_name: '',
    last_name: '',
  });

  const signupInfo = {
    user_id: '',
    fullname: '',
    complete: false,
    education: '',
    hobbies: [],
    gender: '',
    family_size: 0,
    phone_number: '',
    tickets: 0,
    cards: [],
    email: '',
    password: '',
    birthdate: '',
  };

  const signupConfirmation = {
    confirm_email: '',
    confirm_password: '',
  };

  // handles the entered info by user from input fields
  const handleChange = (event) => {
    signupInfo[event.target.id] = event.target.value;
  };

  // handles only confirm fields info entered by user
  const handleChangeConfirmation = (event) => {
    signupConfirmation[event.target.id] = event.target.value;
  };

  // validate signupInfo for registration
  const validInfo = () => {
    // regular expression for validation
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const nameReg = /^[a-zA-Z]+$/;
    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (nameReg.test(signupInfo.first_name)) setValid(true);
    else setValid(false);
    if (nameReg.test(signupInfo.last_name)) setValid(true);
    else setValid(false);
    if (emailReg.test(signupInfo.email)) setValid(true);
    else setValid(false);
    if (signupConfirmation.confirm_email === signupInfo.email) setValid(true);
    else setValid(false);
    if (passwordReg.test(signupInfo.password)) setValid(true);
    else setValid(false);
    if (signupConfirmation.confirm_password === signupInfo.password)
      setValid(true);
    else setValid(false);
    return valid;
  }; // end of function validateInfo()

  // handle onClick() for Sign Up button
  const handleSignup = () => {
    if (validInfo()) {
      signupInfo.user_id = uuidv4();
      usersRef.doc(signupInfo.user_id).set(signupInfo);
      alert('sign up completed');
      history.push({ pathname: '/Login' });
    } else {
      alert('Please provide valid information and try again');
      // window.location.reload();
    }
  }; // end of function handleSignup()

  // return the component
  return (
    <div className=" flex flex-col lg:flex lg:flex-row items-center justify-evenly max-h-full lg:h-firstsection mt-navbar lg:m-0">
      <div className="lg:w-auto w-48">
        <img src={SignupImage} alt="SignupImage" />
      </div>
      <div className="lg:w-auto w-72">
        <div className="lg:text-5xl text-3xl lg:text-left text-center lg:pb-16 ">
          SIGN UP NOW
        </div>

        <div className="lg:h-3/5  h-auto flex flex-col justify-evenly shadow-xl rounded-lg p-4 ">
          <div className="lg:w-full flex flex-col lg:flex lg:flex-row lg:justify-between">
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              className="rounded-lg ring-1 h-12 p-2 lg:w-52 lg:mr-4 mt-4"
              onChange={(event) => {
                setFullName({ ...fullName, first_name: event.target.value });
              }}
            />
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              className="rounded-lg ring-1 h-12 p-2 lg:w-52 mt-4"
              onChange={(event) => {
                setFullName({ ...fullName, last_name: event.target.value });
              }}
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded-lg ring-1 h-12 p-2 mt-4"
            onChange={handleChange}
          />
          <input
            type="email"
            name="confirm_email"
            id="confirm_email"
            placeholder="Confirm Email"
            className="rounded-lg ring-1 h-12 p-2 mt-4"
            onChange={handleChangeConfirmation}
          />
          <div className="w-full lg:flex flex flex-col lg:flex-row justify-between">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="rounded-lg ring-1 h-12 p-2 lg:w-52 lg:mr-4 mt-4"
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              className="rounded-lg ring-1 h-12 p-2 lg:w-52 mt-4"
              onChange={handleChangeConfirmation}
            />
          </div>
          <div className="flex flex-col lg:flex lg:flex-row lg:items-center justify-evenly w-full mt-6">
            <p>Birth Date:</p>
            <div>
              <input
                id="DD"
                placeholder="DD"
                className="text-center rounded-lg ring-1 h-12 lg:w-16 w-14 p-2 mr-4 mt-4 appearance-none"
                onChange={(event) => {
                  setBirthDateObj({ ...brithDateObj, day: event.target.value });
                }}
              />
              <input
                id="MM"
                placeholder="MM"
                className="text-center rounded-lg ring-1 h-12 lg:w-24 w-16 p-2 mr-4 mt-4 appearance-none"
                onChange={(event) => {
                  setBirthDateObj({
                    ...brithDateObj,
                    month: event.target.value,
                  });
                }}
              />
              <input
                id="YYYY"
                placeholder="YYYY"
                className="text-center rounded-lg ring-1 h-12 lg:w-28 w-16 p-2 mt-4 appearance-none"
                onChange={(event) => {
                  setBirthDateObj({
                    ...brithDateObj,
                    year: event.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-evenly flex flex-col">
            <Link to="/Login">
              <button
                type="button"
                className="lg:w-40 w-auto h-12 text-subtitle rounded-lg border text-blue-dark border-blue-dark hover:bg-blue-dark hover:text-black hover:border-transparent mt-4 transition-all duration-300"
              >
                LOG IN
              </button>
            </Link>
            <button
              type="button"
              className="shadow-xl lg:w-40 w-auto h-12 text-subtitle bg-blue-dark rounded-lg border border-transparent hover:bg-white hover:text-blue-dark hover:border-blue-dark mt-4
              transition-all duration-300"
              onClick={handleSignup}
            >
              SIGN UP
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <img src={Or} alt="Or" />
          <div className="flex items-center justify-evenly px-16 mt-4">
            <button type="button">
              <img src={Facebook} alt="facebook" />
            </button>
            <button type="button">
              <img src={Google} alt="google" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
