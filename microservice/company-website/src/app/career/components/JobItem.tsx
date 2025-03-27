import React from 'react';

import { FC } from 'react';
import { Job } from '@/landing/services/career-service';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
const removeMd = require('remove-markdown');

interface JobItemProps {
  job: Job;
}

const JobItem: FC<JobItemProps> = ({ job }) => {
  const t = useTranslations('jobItem');
  return (
    <>
      <div>
        <Link href={`/career/${job.slug}`}>
          <p className="h4">{job.name}</p>
        </Link>
        <p className="font-weight-light">
          {job.location} | {job.typeWorking}
        </p>
        <p className="mb-4">
          {job.description.slice(0, job.description.lastIndexOf(' ', 150)) + '...'}
        </p>
        <Link href={`/career/${job.slug}`}>
          {t('jobDetail')}
          <i className="fas fa-arrow-right text-sm ps-1" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
};

export default JobItem;
