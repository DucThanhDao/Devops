import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';

const GotProject = async () => {
  const t = await getTranslations('howWeWork');

  return (
    <div className="portfolio-collaborate container pt-6 pb-lg-6 px-3">
      <div className="pb-1">{t('contactSection.collaborateText')}</div>
      <div className="d-flex justify-content-between flex-column flex-lg-row">
        <h2 className="fs-1 mb-0">{t('contactSection.heading')}</h2>
        <Link href="/contact-us" className="my-3 my-lg-auto">
          <span className="btn bg-gradient-info text-uppercase fs-6 rounded px-3 py-2 text-white my-0">
            {t('contactSection.button')}
          </span>
        </Link>
      </div>
      <hr className="my-3 d-none d-lg-block"></hr>
      <p className="text-lg text-dark">{t('contactSection.description')}</p>
    </div>
  );
};

export default GotProject;
