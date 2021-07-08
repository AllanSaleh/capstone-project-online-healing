import React from 'react';
import Position from './Position';

export default function OpeningSection() {
  return (
    <div className="h-section flex flex-col justify-around px-sides">
      <div>
        <div className="text-title">CURRENT OPEN POSITIONS</div>
        <div className="text-subtitle text-gray-700">
          Please send us an email with the application title as the subject with
          an attached CV in PDF format at:
        </div>
        <a
          className="text-subtitle text-blue-dark"
          href="mailto:recruitment@healing.com"
        >
          recruitment@healing.com
        </a>
      </div>

      <div className="h-3/5 overflow-y-scroll">
        <Position
          title1="Senior Software Developer | Backend | Remote in the USA"
          subtitle1="Healing is looking for a Senior Software Developer to join our
          Application Development team."
          title2="Engineering"
          subtitle2="Application Development"
        />

        <Position
          title1="Senior Software Developer | Backend | Remote in the USA"
          subtitle1="Healing is looking for a Senior Software Developer to join our
          Application Development team."
          title2="Engineering"
          subtitle2="Application Development"
        />

        <Position
          title1="Senior Software Developer | Backend | Remote in the USA"
          subtitle1="Healing is looking for a Senior Software Developer to join our
          Application Development team."
          title2="Engineering"
          subtitle2="Application Development"
        />

        <Position
          title1="Senior Software Developer | Backend | Remote in the USA"
          subtitle1="Healing is looking for a Senior Software Developer to join our
          Application Development team."
          title2="Engineering"
          subtitle2="Application Development"
        />

        <Position
          title1="Senior Software Developer | Backend | Remote in the USA"
          subtitle1="Healing is looking for a Senior Software Developer to join our
          Application Development team."
          title2="Engineering"
          subtitle2="Application Development"
        />
      </div>
    </div>
  );
}
