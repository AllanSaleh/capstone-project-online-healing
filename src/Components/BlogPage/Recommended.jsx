import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import Send from '../Footer/Images/Send.svg';

export default function Recommended({ blog1, blog2 }) {
  const history = useHistory();
  const { t } = useTranslation();

  const [email, setEmail] = useState('');

  const subscribe = () => {
    if (email.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]/)) {
      window.scrollTo(0, 0);
      history.push({
        pathname: '/ThankYou',
        state: t('Recommend.ThankYouSub'),
      });
    } else alert(t('Recommend.SubEmailAlert'));
  };

  const OpenBlog = (blogID) => {
    if (blogID === '') alert(t('Recommend.BlogApology'));
    else {
      history.push({ pathname: '/Blog', state: blogID });
      window.location.reload();
    }
  };

  return (
    <div className="px-sides lg:h-section flex flex-col justify-around">
      <div className="flex flex-col justify-between items-start lg:h-40">
        <div>
          <div className="text-3xl lg:text-title leading-tight">{t('Recommend.SubSign')}</div>
          <div className="text-lg lg:text-paragraph text-gray-700">{t('Recommend.Weekly')}</div>
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
          {t('Recommend.ForYou')}
        </div>
        <div className="h-96 lg:h-auto flex flex-col lg:flex-row justify-evenly lg:justify-between">
          <img
            onClick={() => OpenBlog(blog1.blog_id)}
            className="cursor-pointer border-4 border-transparent border-dashed hover:border-blue-dark w-full lg:mr-8"
            src={blog1.image}
            alt="blog2"
          />
          <img
            onClick={() => OpenBlog(blog2.blog_id)}
            className="cursor-pointer border-4 border-transparent border-dashed hover:border-blue-dark w-full"
            src={blog2.image}
            alt="blog1"
          />
        </div>
      </div>
    </div>
  );
}
