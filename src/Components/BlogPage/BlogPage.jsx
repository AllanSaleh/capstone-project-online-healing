import React from 'react';

import BlogBody from './BlogBody';
import BlogImage from './BlogImage';
import Img from './Images/BlogImg.svg';
import Recommended from './Recommended';

export default function BlogPage() {
  const BlogImg = Img;
  return (
    <>
      <BlogImage image={BlogImg} />
      <BlogBody />
      <Recommended />
    </>
  );
}
