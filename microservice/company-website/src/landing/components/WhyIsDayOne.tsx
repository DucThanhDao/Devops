import { getPublicUrl } from '@/common/util/util';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const WhyIsDayOne = () => {
  const t = useTranslations('whyIsDayOne');
  return (
    <section
      className="py-4 py-lg-6 px-2 px-lg-4"
      style={{
        background: 'rgb(179 181 181 / 14%)',
      }}
    >
      <div className="container">
        <div className="d-flex flex-column-reverse flex-lg-row">
          <div className="col-xl-5 col-lg-5 col-md-12 pe-lg-3  mt-3 lt-lg-0 d-none d-lg-block">
            <div className="row justify-content-between">
              <div
                className="overflow-hidden ratio ratio-1x1 p-0"
                style={{
                  borderRadius: '12px',
                  width: '50%',
                }}
              >
                <img
                  src={getPublicUrl('/assets/img/landing/image-4.webp')}
                  alt="image-1"
                  className="w-100 object-fit-cover"
                />
              </div>
              <div
                className="p-0 d-flex flex-row align-items-end ps-3"
                style={{
                  width: '48%',
                }}
              >
                <div
                  className="ratio ratio-1x1 overflow-hidden p-0"
                  style={{
                    borderRadius: '12px',
                  }}
                >
                  <img
                    src={getPublicUrl('/assets/img/landing/image-2.webp')}
                    alt="image-2"
                    className="object-fit-cover"
                  />
                </div>
              </div>
            </div>
            <div
              className="row overflow-hidden p-0 mx-2 mt-4 mx-lg-3 mt-lg-4"
              style={{
                borderRadius: '12px',
              }}
            >
              <img
                src={getPublicUrl('/assets/img/landing/image-3.webp')}
                alt="image-3"
                className="w-100 h-100 object-fit-cover p-0"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 ps-lg-6 align-self-end">
            <h6 className="text-black m-0 text-uppercase">Dayone is your</h6>
            <h3 className="text-primary display-3 fw-bold">{t('subTitle')}</h3>
            <div
              className="d-block d-lg-none"
              style={{
                padding: '0.75rem',
              }}
            >
              <div className="row justify-content-between">
                <div
                  className="overflow-hidden p-0"
                  style={{
                    borderRadius: '12px',
                    width: '50%',
                  }}
                >
                  <img
                    src={getPublicUrl('/assets/img/landing/image-4.webp')}
                    alt="image-1"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div
                  className="p-0 d-flex flex-row align-items-end ps-3"
                  style={{
                    width: '48%',
                  }}
                >
                  <div
                    className="ratio ratio-1x1 overflow-hidden p-0"
                    style={{
                      borderRadius: '12px',
                    }}
                  >
                    <img
                      src={getPublicUrl('/assets/img/landing/image-2.webp')}
                      alt="image-2"
                      className="object-fit-cover"
                    />
                  </div>
                </div>
              </div>
              <div
                className="row overflow-hidden p-0 mx-2 mt-4 mx-lg-3 mt-lg-4"
                style={{
                  borderRadius: '12px',
                }}
              >
                <img
                  src={getPublicUrl('/assets/img/landing/image-3.webp')}
                  alt="image-3"
                  className="w-100 h-100 object-fit-cover p-0"
                />
              </div>
            </div>
            <p className="text-black text-lg py-3 py-lg-2 text-justify">{t('content')}</p>
            <div className="row text-center">
              <div className="col-4 px-lg-5">
                <img
                  className={getPublicUrl('object-fit-cover ratio ratio-1x1')}
                  src="/assets/img/landing/teamwork.png"
                  alt="teamwork"
                />
                <p className="fs-6 text-black">{t('teamwork')}</p>
              </div>
              <div className="col-4 px-lg-5">
                <img
                  className={getPublicUrl('object-fit-cover ratio ratio-1x1')}
                  src="/assets/img/landing/excellence.png"
                  alt="excellence"
                />
                <p className="fs-6 text-black">{t('excellence')}</p>
              </div>
              <div className="col-4 px-lg-5">
                <img
                  src={getPublicUrl('/assets/img/landing/passion.png')}
                  className="object-fit-cover ratio ratio-1x1"
                  alt="passion"
                />
                <p className="fs-6 text-black">{t('passion')}</p>
              </div>
            </div>
            {/* <div className="d-flex justify-content-end mt-4">
              <Link
                href="/how-we-work"
                className="view-more py-2 text-primary my-0 fw-bold"
                style={{
                  display: 'inline-block',
                  width: 'auto',
                  alignSelf: 'flex-start',
                }}
              >
                {t('explore')}
                <i className="fas fa-arrow-right ps-2"></i>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyIsDayOne;
