import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { getPublicUrl } from '@/common/util/util';

const DesignContainer = () => {
  const t = useTranslations('services');
  const iconPath = getPublicUrl('/assets/img/services/star-blue.svg');

  return (
    <div className="services-container-right-card color-blue-gradient">
      <div>
        <img
          src="/assets/img/landing/service/design.svg"
          loading="eager"
          alt="design_logo"
          style={{ width: 53, height: 50 }}
        />
        <h4 className="services-container-right-card-title h6">{t('design.heading')}</h4>
        <ul className="list-unstyled text-start">
          <li>
            <img src={iconPath} alt="star icon" />
            {t('design.description1')}
          </li>
          <li>
            <img src={iconPath} alt="star icon" />
            {t('design.description2')}
          </li>
        </ul>
        <Link href="/portfolio" className="view-more py-1 text-primary align-self-start">
          {t('design.link')}
          <svg
            className="ps-2"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default DesignContainer;
