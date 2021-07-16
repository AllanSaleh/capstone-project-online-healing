import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import './styles/main.css';
import Description from './Components/Description/Description';
import LandingPage from './Components/landing page/landingpage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AddNewCard from './Components/AddNewCard/AddNewCard';
import EditProfile from './Components/ProfileInfo/EditProfile';
import TherapistProfileInfo from './Components/TherapistProfile/ThrapistProfileInfo';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <CreateAccount />
      <NavBar />
      <LandingPage />
      <EditProfile />
      <TherapistProfileInfo />
      <Description />
      <AddNewCard />
      <div className="text-center bg-blue-dark h-section w-full px-sides">Other Sections!</div>
      <Footer />
    </div>
  );
}

export default App;
