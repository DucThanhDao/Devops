'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
interface BackButtonProps {
  text: string;
  referer: string | null;
  locale: string;
}

const BackButton = ({ text, referer, locale }: BackButtonProps) => {
  const [backUrl, setBackUrl] = useState<string>('/');

  useEffect(() => {
    function compareUrls(url1: string, url2: string): boolean {
      const langRegex = /\/(vi|en)\//;
      const normalizedUrl1 = url1.replace(langRegex, '/lang/');
      const normalizedUrl2 = url2.replace(langRegex, '/lang/');
      return normalizedUrl1 === normalizedUrl2;
    }

    const handleSetBackReferer = () => {
      if (!referer || !referer.includes(window.location.origin)) {
        sessionStorage.setItem('backReferer', '/portfolio');
        return;
      }
      if (!compareUrls(referer, window.location.href)) {
        sessionStorage.setItem('backReferer', referer);
      }
    };

    const handleGetBackUrl = (locale: string) => {
      let backUrl = '/';
      const backReferer = sessionStorage.getItem('backReferer');
      if (backReferer) {
        const localePattern = /\/(vi|en)(\/|$)/;
        backUrl = backReferer.replace(localePattern, `/${locale}/`);
      }
      return backUrl;
    };
    handleSetBackReferer();
    setBackUrl(handleGetBackUrl(locale));
  }, [locale, referer]);

  return (
    <span className="text-info fw-bold back-button pb-1 w-30 cursor-pointer">
      <Link href={backUrl}>
        <i className="fas fa-arrow-left pe-2"></i>
        {text}
      </Link>
    </span>
  );
};

export default BackButton;
