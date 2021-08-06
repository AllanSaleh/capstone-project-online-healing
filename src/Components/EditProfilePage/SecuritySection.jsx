import React from 'react';

import { useTranslation } from 'react-i18next';
import ProfileInputField from './ProfileInputField';
import LockIcon from './Images/LockIcon.svg';

export default function SecuritySection() {
  const { t } = useTranslation();
  return (
    <form className="my-16">
      <h1 className="text-3xl lg:text-title uppercase">{t('Edit.Security')}</h1>
      <ProfileInputField title={t('Edit.Pass')} type="password" id="password" icon={LockIcon} />
      <ProfileInputField
        title={t('Edit.Confirm')}
        type="password"
        id="confirm-password"
        icon={LockIcon}
      />
    </form>
  );
}
