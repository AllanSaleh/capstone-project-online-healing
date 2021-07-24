import React, { useState } from 'react';
import Position from './Position';

export default function OpeningSection() {
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
    <div className="h-section flex flex-col justify-around px-sides">
      <div>
        <div className="text-3xl lg:text-title">CURRENT OPEN POSITIONS</div>
        <div className="text-xl lg:text-subtitle text-gray-700">
          Please send us an email with the application title as the subject with
          an attached CV in PDF format at:
        </div>
        <a
          className="text-xl lg:text-subtitle text-blue-dark hover:underline"
          href="mailto:recruitment@healing.com"
        >
          recruitment@healing.com
        </a>
      </div>

      <div className="h-3/5 overflow-y-scroll">
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
