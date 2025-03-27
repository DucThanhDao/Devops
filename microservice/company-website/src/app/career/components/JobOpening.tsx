'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const JobOpening = () => {
  const [search, setSearch] = useState('');
  const t = useTranslations('jobOpening');

  const handleOnChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleOnKeyUp = (e: any) => {
    if (e.keyCode == '13') {
      return location.replace(`/career?key=${search}`);
    }
  };

  return (
    <div className="job-opening" id="job-open">
      <h3 className="job-opening-tittle">{t('topJobsOpening')}</h3>
      {/* <div className="job-opening-search">
        <h5>Search job</h5>
        <div className="job-opening-search-form">
      <input type="text" value={search} onChange={handleOnChange} onKeyUp={handleOnKeyUp} />
        <Link href={`/career?key=${search}`}>
          <div className="btn-grad">
            Search
          </div>
        </Link>
        </div>
      </div> */}
    </div>
  );
};

export default JobOpening;
