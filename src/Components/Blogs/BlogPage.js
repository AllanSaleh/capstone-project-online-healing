import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import BlogBody from './BlogBody';
import BlogImage from './BlogImage';
import BlogImg from './BlogImg.svg';
import Recommended from './Recommended';

export default function BlogPage() {
  return (
    <div>
      <NavBar />
      <BlogImage image={BlogImg} />
      <BlogBody />
      <Recommended />
      <Footer />
    </div>
  );
}
