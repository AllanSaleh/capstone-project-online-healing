import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Founding from './Founding';
import Healing from './Healing';

export default function AboutPage() {
  return (
    <div className="h-firstsection">
      {/* <NavBar /> */}
      <Healing />
      <Founding />
      {/* <Footer /> */}
    </div>
  );
}
