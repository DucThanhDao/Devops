import { getPublicUrl } from '@/common/util/util';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const Service = async () => {
  const t = await getTranslations('howWeWork');

  return (
    <section className="container py-0 py-lg-6">
      <div className="col-lg-8 mx-auto text-center pb-4 mb-lg-6">
        <h2>{t('serviceSection.heading')}</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 justify-content-center d-flex flex-column">
                <img
                  src={getPublicUrl('/assets/img/how-we-work/3.webp')}
                  alt="img-blur-shadow-blog-2"
                  className="img-fluid shadow rounded-3 custom-height"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 ">
                <h3 className="mt-md-3 mt-3">{t('serviceSection.service1.title')}</h3>
                <p style={{ fontSize: '1.3rem' }}>{t('serviceSection.service1.description')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-5">
            <div className="row flex-row-reverse">
              <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5">
                <img
                  src={getPublicUrl('/assets/img/how-we-work/4.webp')}
                  alt="img-blur-shadow-blog-2"
                  className="img-fluid shadow rounded-3"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
                <h3 className="mt-md-3 mt-3">{t('serviceSection.service2.title')}</h3>
                <p style={{ fontSize: '1.3rem' }}>{t('serviceSection.service2.description')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-5">
            <div className="row">
              <div className="col-lg-6 justify-content-center d-flex flex-column">
                <img
                  src={getPublicUrl('/assets/img/how-we-work/5.webp')}
                  alt="img-blur-shadow-blog-3"
                  className="img-fluid shadow rounded-3 custom-height"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 pt-3">
                <h3 className="mt-md-3 mt-3">{t('serviceSection.service3.title')}</h3>
                <p style={{ fontSize: '1.3rem' }}>{t('serviceSection.service3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
