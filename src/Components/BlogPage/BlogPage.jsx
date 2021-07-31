import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from '../../firebase';

import BlogBody from './BlogBody';
import BlogImage from './BlogImage';
import Recommended from './Recommended';

const blogInfo = [
  {
    blog_id: 'Temp',
    image: 'Loading...',
    title: 'Loading...',
    intro: 'Loading...',
    subtitle: 'Loading...',
    body: ['Loading...'],
  },
];

export default function BlogPage() {
  window.scrollTo(0, 0);
  const location = useLocation();

  const [mainBlog, setMainBlog] = useState(blogInfo[0]);
  const [randomBlogs, setRandom] = useState({
    blog1: blogInfo[Math.floor(Math.random() * blogInfo.length)],
    blog2: blogInfo[Math.floor(Math.random() * blogInfo.length)],
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection('articles')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        if (location.state !== undefined)
          data.forEach((blog) => {
            if (blog.blog_id === location.state) setMainBlog(blog);
          });
        else setMainBlog(data[0]);
        setRandom({
          blog1: data[Math.floor(Math.random() * data.length)],
          blog2: data[Math.floor(Math.random() * data.length)],
        });
      });
  }, []);

  return (
    <>
      <BlogImage image={mainBlog.image} />
      <BlogBody
        title={mainBlog.title}
        intro={mainBlog.intro}
        subtitle={mainBlog.subtitle}
        body={mainBlog.body}
      />
      <Recommended blog1={randomBlogs.blog1} blog2={randomBlogs.blog2} />
    </>
  );
}
