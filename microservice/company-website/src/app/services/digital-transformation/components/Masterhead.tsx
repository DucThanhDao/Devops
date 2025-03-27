import { getPublicUrl } from '@/common/util/util';
import Link from 'next/link';
import { Navbarr } from '@/landing/components/Navbarr';
import { getTranslations } from 'next-intl/server';
const Masterhead = async () => {
  const t = await getTranslations('newDigitalTransformation');

  return (
    <div className="masterhead ms-auto">
      <div className="digital__background position-relative">
        <picture>
          <img
            className="w-100 object-fit-cover"
            src={getPublicUrl('/assets/img/digital-transformation/digital-background.webp')}
            alt="digital background photo"
            loading="eager"
          />
        </picture>
      </div>
      <div className={`masterhead-content`}>
        <Navbarr isTextLight={false} />
        <div className="container-fluid ms-md-3">
          <div className="intro-text mt-0 mt-lg-10">
            <h1 className="text-uppercase fw-bold display-5 mb-1 heading_color">
              {t('masterhead.heading1')}
            </h1>
            <h2 className="fw-bold display-6 mb-1 heading_color">{t('masterhead.heading2')}</h2>
            <div>
              <Link
                href="/contact-us"
                className="btn text-uppercase fs-6 rounded px-4 py-2 btn-primary text-white mt-5"
              >
                {t('masterhead.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`container mt-5 mt-lg-2 px-4 `}>
        <h2 className="text-primary text-uppercase fw-bold display-5 mb-3">{t('hero.heading1')}</h2>
        <p className="fw-bold display-6 mb-1 d-lg-block d-none">{t('hero.heading2')}</p>
        <p className="fw-bold display-7 mb-1 d-lg-none d-block">{t('hero.heading2')}</p>
      </div>
    </div>
  );
};
export default Masterhead;
