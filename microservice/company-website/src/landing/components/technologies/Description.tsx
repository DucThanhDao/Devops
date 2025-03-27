import { useTranslations } from 'next-intl';
import React from 'react';

const Description = () => {
  const t = useTranslations('technologies');

  return <p className="mb-4">{t('description')}</p>;
};

export default Description;
