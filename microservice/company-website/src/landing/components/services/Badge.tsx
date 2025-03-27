import { useTranslations } from 'next-intl';
import React from 'react';

const Badge = () => {
  const t = useTranslations('services');

  return <span className="badge rounded-pill text-bg-primary">{t('badge')}</span>;
};

export default Badge;
