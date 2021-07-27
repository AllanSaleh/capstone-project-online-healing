import React from 'react';
import ProfileInputField from './ProfileInputField';
import LockIcon from './LockIcon.svg';

const SecuritySection = () => (
  <form className="my-16">
    <h1 className="text-title uppercase">security</h1>
    <ProfileInputField title="password" type="password" id="password" icon={LockIcon} />
    <ProfileInputField
      title="confirm password"
      type="password"
      id="confirm-password"
      icon={LockIcon}
    />
  </form>
);

export default SecuritySection;
