import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/main.css';

import AboutPage from './Components/AboutPage/AboutPage';
import AddNewCardPage from './Components/AddNewCardPage/AddNewCardPage';
import BlogPage from './Components/BlogPage/BlogPage';
import BookingPage1 from './Components/BookingPages/Booking1';
import BookingPage2 from './Components/BookingPages/Booking2';
import BookingPage3 from './Components/BookingPages/Booking3';
import BookingPage4 from './Components/BookingPages/Booking4';
import BookingPage5 from './Components/BookingPages/Booking5';
import BookingPage6 from './Components/BookingPages/Booking6';
import BookingPage7 from './Components/BookingPages/Booking7';
import BookingPage8 from './Components/BookingPages/Booking8';
import CareersPage from './Components/CareersPage/CareersPage';
import ContactPage from './Components/ContactPage/ContactPage';
import EditProfilePage from './Components/EditProfilePage/EditProfilePage';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import PurchasePage from './Components/PurchasePage/PurchasePage';
import RequirementsPage from './Components/RequirementsPage/RequirementsPage';
import SavedCardsPage from './Components/SavedCardsPage/SavedCardsPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import TeamPage from './Components/TeamPage/TeamPage';
import ThankYouPage from './Components/ThankYouPage/ThankYouPage';
import TherapistCreatePage from './Components/TherapistCreatePage/TherapistCreatePage';
// import TherapistProfilePage from './Components/TherapistProfilePage/TherapistProfilePage';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const [loginStatus, setLoginStatus] = useState({
    login: false,
    complete: false,
    user_id: '',
  });

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('loginStatus'));
    if (loggedIn !== null) setLoginStatus(loggedIn);
  }, []);

  return (
    <Router>
      <NavBar loginStatus={loginStatus} />
      <Switch>
        <Route exact path="/">
          <HomePage loginStatus={loginStatus} />
        </Route>
        <Route path="/About">
          <AboutPage />
        </Route>
        <Route path="/AddNewCard">
          <AddNewCardPage loginStatus={loginStatus} />
        </Route>
        <Route path="/Blog">
          <BlogPage />
        </Route>
        <Route path="/Booking1">
          <BookingPage1 loginStatus={loginStatus} />
        </Route>
        <Route path="/Booking2">
          <BookingPage2 loginStatus={loginStatus} />
        </Route>
        <Route path="/Booking3">
          <BookingPage3 loginStatus={loginStatus} />
        </Route>
        <Route path="/Booking4">
          <BookingPage4 loginStatus={loginStatus} />
        </Route>
        <Route path="/Booking5">
          <BookingPage5 loginStatus={loginStatus} />
        </Route>
        <Route path="/Booking6">
          <BookingPage6 loginStatus={loginStatus} />
        </Route>
        <Route path="/Booking7">
          <BookingPage7 loginStatus={loginStatus} />
        </Route>
        <Route path="/Booking8">
          <BookingPage8 loginStatus={loginStatus} />
        </Route>
        <Route path="/Careers">
          <CareersPage />
        </Route>
        <Route path="/Contact">
          <ContactPage loginStatus={loginStatus} />
        </Route>
        <Route path="/EditProfile">
          <EditProfilePage loginStatus={loginStatus} />
        </Route>
        <Route path="/Login">
          <LoginPage setLoginStatus={(status) => setLoginStatus(status)} />
        </Route>
        <Route path="/Purchase">
          <PurchasePage loginStatus={loginStatus} />
        </Route>
        <Route path="/Requirements">
          <RequirementsPage />
        </Route>
        <Route path="/SavedCards">
          <SavedCardsPage loginStatus={loginStatus} />
        </Route>
        <Route path="/SignUp">
          <SignUpPage />
        </Route>
        <Route path="/Team">
          <TeamPage />
        </Route>
        <Route path="/ThankYou">
          <ThankYouPage />
        </Route>
        <Route path="/TherapistCreate">
          <TherapistCreatePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
