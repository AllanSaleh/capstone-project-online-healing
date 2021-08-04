import React from 'react';
import { useHistory } from 'react-router-dom';

import Tech from './Images/Tech.svg';
import Trauma from './Images/Trauma.svg';
import Prev from './Images/Prev.svg';
import Next from './Images/Next.svg';
import Img from '../BlogPage/Images/BlogImg.svg';

export default function RecentBlogs() {
  const history = useHistory();

  // Grab the most 6 recent blogs from firebase
  const blogs = [
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
    { title: 'Mental Health & Technology', img: Tech },
    { title: 'Healing Trauma', img: Trauma },
  ];

  const OpenBlog = (title) => {
    // Firebase code to grab the wanted blog from title!
    const grabbedBlog = {
      img: Img,
      title: 'Mental Health and Whatever',
      intro:
        'Technology and mental well-being might seem like profoundly antagonistic terms. However, there are excellent digital tools to help you reach mindfulness and to practice meditation. You can even use smartphone apps, virtual reality solutions and digital devices as a form of relieving stressing and achieving digital detox – as, after a while, you will be able to practice all types of anti-anxiety skills on your own. So, let The Medical Futurist show you how you can enhance your mental and emotional health with the help of technology.',
      subtitle: 'MENTAL HEALTH AND TECHNOLOGY',
      body:
        '“Just as we observe physical hygiene to stay well, we need to cultivate a kind of emotional hygiene too,” wrote the Dalai Lama on his Twitter-feed. There are three crucial points around His Holiness’ statement. First and foremost, the popularity of health-enhancing, physically active lifestyle is soaring worldwide. Nevertheless, there’s always room for improvement: the WHO says that globally, 23 percent of adults and 81 percent of school-going adolescents are not active enough. According to the organization, adults aged 18-64 should do at least 150 minutes of moderately intense physical activity each week, which is not unaccomplishable. Moreover, the numerically and statistically driven 21st-century mind could take a great inspiration and power from the various fitness trackers and wearables.\n.\nSecondly, emotional hygiene seems to be thrown into the shade nowadays. Somehow, the culture of busyness prevents us from squeezing some time for mental health into our packed schedules. Information is pouring on us from millions of communication channels; we are connecting with hundreds of ‘friends’ on social media, we are obsessed with data due to the fear of missing out and time management slices up our days into meetings and to-do-lists.\n.\nThe pressure to perform and the stress to achieve is the air every busy-bee is breathing. However, turbulent lifestyle comes with a price. No wonder so many people have mental health issues. In the US, that means one in five adults – more than 40 million Americans! On the old continent, 27 percent of the population has to cope with mental disorders, which means 83 million struggling Europeans. In Asia, the prevalence of depression is 20 percent in Thailand, 19.9 percent in Taiwan, 19.4 percent in Korea, 17.5 in Malaysia and 16.5 percent in China.',
    };
    if (title === '') alert("Sorry, seems like the blog can't be found!");
    else history.push({ pathname: '/Blog', state: grabbedBlog });
  };

  return (
    <div className="flex flex-col justify-evenly h-64 lg:h-section px-sides bg-blue-light">
      <div className="text-2xl lg:text-title">RECENT BLOGS</div>

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
                onClick={(e) => OpenBlog(e.target.id)}
                aria-hidden="true"
                id={blog.title}
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
