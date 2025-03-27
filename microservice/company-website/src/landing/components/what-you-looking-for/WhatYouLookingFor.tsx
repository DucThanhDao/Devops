import { getPublicUrl } from '@/common/util/util';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import StepItem from './StepItem';

const WhatYouLookingFor = () => {
  const t = useTranslations('whatYouLookingFor');
  return (
    <section className="mt-6 mt-lg-10 py-5 what-you-looking-for">
      <div className="container">
        <div className="d-flex flex-column-reverse flex-lg-row">
          <div className="col-lg-6 d-flex flex-column justify-content-center gap-5 pb-lg-4 pt-lg-2 pe-xl-5">
            <StepItem title={t('step1.title')} description={t('step1.description')} icon="icon-6" />
            <StepItem title={t('step2.title')} description={t('step2.description')} icon="icon-2" />
            <StepItem title={t('step3.title')} description={t('step3.description')} icon="icon-3" />
            <StepItem title={t('step4.title')} description={t('step4.description')} icon="icon-5" />
          </div>
          <div className="col-lg-6 ps-lg-6 text-center text-lg-start">
            <h3 className="text-white mb-1">{t('heading')}</h3>
            <h5
              className="font-weight-bold"
              style={{
                color: '#aeebfe',
              }}
            >
              {t('heading2')}
            </h5>
            <p className="text-white description mb-2">{t('subHeading')}</p>
            <Link
              href="/contact-us"
              className="btn btn-light btn-lg rounded px-4 py-2 mt-3 mt-lg-2"
            >
              {t('button')}
            </Link>
            <div className="what-you-looking-for-image">
              <img
                style={{
                  height: 'auto',
                }}
                src={getPublicUrl('/assets/img/landing/what-you-looking-for.webp')}
                alt="what-you-looking-for"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatYouLookingFor;
