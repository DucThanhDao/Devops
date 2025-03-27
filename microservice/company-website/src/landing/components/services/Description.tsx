import { useTranslations } from 'next-intl';
import React from 'react';

const Description = () => {
  const t = useTranslations('services');

  return <p className="text-black mt-3 mb-4">{t('description')}</p>;
};

export default Description;
