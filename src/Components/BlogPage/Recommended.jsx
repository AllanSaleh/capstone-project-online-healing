import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Img from './Images/BlogImg.svg';
import Send from '../Footer/Images/Send.svg';

export default function Recommended({ blog1, blog2 }) {
  const history = useHistory();

  const [email, setEmail] = useState('');

  const subscribe = () => {
    if (email.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]/)) {
      window.scrollTo(0, 0);
      history.push({
        pathname: '/ThankYou',
        state: 'You email has been added to the mailing list successfully!',
      });
    } else alert('Please enter a valid E-Mail!');
  };

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
    <div className="px-sides lg:h-section flex flex-col justify-around">
      <div className="flex flex-col justify-between items-start lg:h-40">
        <div>
          <div className="text-3xl lg:text-title leading-tight">Sign Up For The Healing Blog</div>
          <div className="text-lg lg:text-paragraph text-gray-700">
            Weekly, Ad-Free Blogs That Help You Stay In The Know!
          </div>
        </div>

        <div className="flex  border-2 border-gray-600 h-12 rounded-lg">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 p-2 rounded-l-md"
            placeholder="Enter your E-Mail"
            type="email"
          />
          <button
            onClick={() => subscribe()}
            className="border-0 border-l-2 border-gray-600 p-2 bg-blue-dark rounded-r-md"
            type="button"
          >
            <img src={Send} alt="Send" />
          </button>
        </div>
      </div>

      <div>
        <div className="uppercase text-xl lg:text-subtitle mt-8 lg:mt-0 lg:mb-8">
          recommended for you
        </div>

        <div className="h-96 lg:h-auto flex flex-col lg:flex-row justify-evenly lg:justify-between">
          <img
            onClick={() => OpenBlog(blog1.title)}
            className="cursor-pointer border-4 border-transparent border-dashed hover:border-blue-dark w-full lg:mr-8"
            src={blog1.img}
            alt="blog2"
          />
          <img
            onClick={() => OpenBlog(blog2.title)}
            className="cursor-pointer border-4 border-transparent border-dashed hover:border-blue-dark w-full"
            src={blog2.img}
            alt="blog1"
          />
        </div>
      </div>
    </div>
  );
}
