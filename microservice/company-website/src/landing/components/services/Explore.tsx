import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const Explore = () => {
  const t = useTranslations('services');

  return (
    <Link href="/portfolio" className="view-more py-2 text-primary mb-4 my-0 align-self-start">
      {t('button')}
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
  );
};

export default Explore;
