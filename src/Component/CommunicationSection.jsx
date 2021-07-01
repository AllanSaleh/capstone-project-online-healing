import React from 'react';

const CommunicationSection = ({showSubtitle, subtitleText}) => {
  return (
    <div className="px-48 py-16">
      <h1 className="text-title pb-2">Hello</h1>
      {showSubtitle && (<h3 className="text-subtitle pb-4">{subtitleText}</h3>)}
    </div>
  );
};

export default CommunicationSection;
