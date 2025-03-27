import React from 'react';
import { getPublicUrl } from '@/common/util/util';
import { Navbarr } from '@/landing/components/Navbarr';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const MasterHead = async () => {
  const t = await getTranslations('howWeWork');

  return (
    <div className="masterhead ms-auto">
      <div className="position-relative">
        <img
          src={getPublicUrl('/assets/img/how-we-work/how-we-work-background.webp')}
          alt="how-we-work background"
          className="w-100 object-fit-cover"
          loading="eager"
        />
      </div>
      <div className={`masterhead-content `}>
        <Navbarr isTextLight={true} />
        <div className="container-fluid ms-md-3">
          <div className="mt-0 mt-lg-8 mt-xxl-11  text-center how-we-work-title">
            <h1 className="fw-bolder display-4 mb-1">{t('masterhead.heading2')}</h1>
            {/* <h2 className="fw-bold display-6 mb-1">{t('masterhead.heading2')}</h2> */}
            <div>
              <Link
                href="/contact-us"
                className="btn fs-6 fw-bolder rounded px-4 py-2 mt-4 how-we-work-button"
              >
                {t('masterhead.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterHead;
