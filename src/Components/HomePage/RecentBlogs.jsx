import React, { useEffect } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Prev from './Images/Prev.svg';
import Next from './Images/Next.svg';

export default function RecentBlogs({ blogs, setBlogs }) {
  const history = useHistory();
  const { t } = useTranslation();

  // Grab the most 6 recent blogs from firebase
  useEffect(() => {
    firebase
      .firestore()
      .collection('articles')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        const newBlogs = blogs;
        data.forEach((blog) => {
          newBlogs.push({ title: blog.title, img: blog.image, blog_id: blog.blog_id });
        });
        setBlogs(newBlogs);
        history.push('/');
      });
  }, []);

  const OpenBlog = (id) => {
    history.push({ pathname: '/Blog', state: id });
  };

  return (
    <div className="flex flex-col justify-evenly h-64 lg:h-section px-sides bg-blue-light">
      <div className="text-2xl lg:text-title uppercase">{t('HomePage.Recent')}</div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            const NewPos = document.getElementById('Menu').scrollLeft - 500;
            document.getElementById('Menu').scrollTo({
              left: NewPos,
              behavior: 'smooth',
            });
          }}
          type="button"
          className="mr-2 lg:mr-4 h-10 lg:h-12 w-10 lg:w-12 px-3 bg-white rounded-lg border-2 border-black hover:bg-blue-dark"
        >
          <img src={Prev} alt="Previous" />
        </button>

        <div className="relative h-40 lg:h-80 w-full overflow-hidden">
          <div
            id="Menu"
            className="h-44 lg:h-96 box-border whitespace-nowrap overflow-x-auto overflow-y-hidden"
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                onClick={(e) => OpenBlog(e.target.closest('.relative').id)}
                aria-hidden="true"
                id={blog.blog_id}
                className="relative inline-block w-11/12 lg:w-2/6 h-40 lg:h-80 box-border mx-2 lg:mx-12"
              >
                <img
                  className="rounded-lg absolute h-full w-full cursor-pointer"
                  src={blog.img}
                  alt="Background"
                />

                <div className="w-24 lg:w-44 p-2 rounded-lg text-center whitespace-normal cursor-pointer absolute bottom-6 left-2 lg:bottom-8 lg:left-4 text-white text-xs lg:text-paragraph bg-black bg-opacity-50">
                  {blog.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            const NewPos = document.getElementById('Menu').scrollLeft + 500;
            document.getElementById('Menu').scrollTo({
              left: NewPos,
              behavior: 'smooth',
            });
          }}
          type="button"
          className="ml-2 lg:ml-4 h-10 lg:h-12 w-10 lg:w-12 px-3 bg-white rounded-lg border-2 border-black hover:bg-blue-dark"
        >
          <img src={Next} alt="Previous" />
        </button>
      </div>
    </div>
  );
}
