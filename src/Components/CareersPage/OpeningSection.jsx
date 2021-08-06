import React from 'react';
import { useTranslation } from 'react-i18next';

import Position from './Position';

export default function OpeningSection() {
  const { t } = useTranslation();

  const positions = [
    {
      title1: 'Senior Software Developer | Backend | Remote in the USA',
      subtitle1:
        'Healing is looking for a Senior Software Developer to join our Application Development team.',
      title2: 'Engineering',
      subtitle2: 'Application Development',
    },
    {
      title1: 'Senior Software Developer | Backend | Remote in the USA',
      subtitle1:
        'Healing is looking for a Senior Software Developer to join our Application Development team.',
      title2: 'Engineering',
      subtitle2: 'Application Development',
    },
    {
      title1: 'Senior Software Developer | Backend | Remote in the USA',
      subtitle1:
        'Healing is looking for a Senior Software Developer to join our Application Development team.',
      title2: 'Engineering',
      subtitle2: 'Application Development',
    },
    {
      title1: 'Senior Software Developer | Backend | Remote in the USA',
      subtitle1:
        'Healing is looking for a Senior Software Developer to join our Application Development team.',
      title2: 'Engineering',
      subtitle2: 'Application Development',
    },
    {
      title1: 'Senior Software Developer | Backend | Remote in the USA',
      subtitle1:
        'Healing is looking for a Senior Software Developer to join our Application Development team.',
      title2: 'Engineering',
      subtitle2: 'Application Development',
    },
  ];

  return (
    <div id="Openings" className="h-section flex flex-col justify-around px-sides py-8">
      <div>
        <div className="text-3xl lg:text-title">{t('Open.Positions')}</div>
        <div className="text-xl lg:text-subtitle text-gray-700 mt-4">{t('Open.Instruct')}</div>
        <a
          className="text-xl lg:text-subtitle text-blue-dark hover:underline"
          href="mailto:recruitment@healing.com"
        >
          recruitment@healing.com
        </a>
      </div>

      <div className="h-3/4 overflow-y-scroll my-4 lg:my-0">
        {positions.map((position) => (
          <Position
            title1={position.title1}
            subtitle1={position.subtitle1}
            title2={position.title2}
            subtitle2={position.subtitle2}
          />
        ))}
      </div>
    </div>
  );
}
