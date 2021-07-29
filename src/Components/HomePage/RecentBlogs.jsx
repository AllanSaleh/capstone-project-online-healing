import React from 'react';

import Tech from './Images/Tech.svg';
import Trauma from './Images/Trauma.svg';
import Prev from './Images/Prev.svg';
import Next from './Images/Next.svg';

export default function RecentBlogs() {
  const blogs = [
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
  ];

  return (
    <div className="flex flex-col justify-evenly h-64 lg:h-section px-sides bg-blue-light">
      <div className="text-3xl lg:text-title">RECENT BLOGS</div>

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
            {blogs.map((blog, i) => (
              <div
                onClick={(e) => alert(`Open blog number ${e.target.closest('.relative').id}`)}
                id={i}
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
