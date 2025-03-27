import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const PageNotFound = () => {
  const t = useTranslations('pageNotFound');
  return (
    <div className=" container not-found-page">
      <div className="not-found-page-tittle">{t('notFoundTitle')}</div>
      <div className="not-found-page-sub-tittle">{t('notFoundSubTitle')}</div>
      <Link href={'/'} className="text-center btn btn-gradient-primary px-4 py-3">
        {t('returnHome')}
      </Link>
    </div>
  );
};

export default PageNotFound;
