import React from 'react';
import Tech from './Tech.svg';
import Trauma from './Trauma.svg';
import Prev from './Prev.svg';
import Next from './Next.svg';

export default function RecentBlogs() {
  const blogs=[
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
  ]

  return (
    <div className="flex flex-col justify-evenly h-section px-sides bg-blue-light">
      <div className="text-title">RECENT BLOGS</div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            const NewPos = document.getElementById('Menu').scrollLeft - 560;
            document.getElementById('Menu').scrollTo({
              left: NewPos,
              behavior: 'smooth',
            });
          }}
          type="button"
          className="mr-4 h-12 w-12 px-3 text-subtitle bg-blue-light rounded-lg border-2 border-black hover:bg-blue-dark"
        >
          <img src={Prev} alt="Previous" />
        </button>

        <div className="relative h-80 w-full overflow-hidden">
          <div
            id="Menu"
            className="h-96 box-border whitespace-nowrap overflow-x-auto overflow-y-hidden"
          >
            {blogs.map((blog, i) => (
              <div
                onClick={(e) =>
                  alert(`Open blog number ${e.target.closest('.relative').id}`)
                }
                id={i}
                className="relative inline-block w-2/6 h-80 box-border mx-12"
              >
                <img
                  className="rounded-lg absolute w-full cursor-pointer"
                  src={blog.img}
                  alt="Background"
                />

                <div className="w-44 p-2 rounded-lg text-center whitespace-normal cursor-pointer absolute bottom-8 left-4 text-white text-paragraph bg-black bg-opacity-50">
                  {blog.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            const NewPos = document.getElementById('Menu').scrollLeft + 560;
            document.getElementById('Menu').scrollTo({
              left: NewPos,
              behavior: 'smooth',
            });
          }}
          type="button"
          className="ml-4 h-12 w-12 px-3 text-subtitle bg-blue-light rounded-lg border-2 border-black hover:bg-blue-dark"
        >
          <img src={Next} alt="Previous" />
        </button>
      </div>
    </div>
  );
}
