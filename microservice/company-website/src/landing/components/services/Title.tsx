import { useTranslations } from 'next-intl';
import React from 'react';

const Title = () => {
  const t = useTranslations('services');

  return <h2 className="text-primary mb-1 font-weight-bold">{t('heading')}</h2>;
};

export default Title;
