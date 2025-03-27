import Link from 'next/link';
import { Navbarr } from './Navbarr';
import { useTranslations } from 'next-intl';
import { getPublicUrl } from '@/common/util/util';

const Masterhead = () => {
  const t = useTranslations('masterhead');

  return (
    <div>
      <div className="masterhead ms-auto">
        <div className="masterhead__background d-lg-block d-none" style={{ height: '750px' }}>
          <picture>
            <img src={getPublicUrl('/assets/img/landing-photo.svg')} alt="landing-photo" />
          </picture>
        </div>
        <div className="masterhead-content">
          <Navbarr isTextLight={false} />
          <div className="container-fluid ms-lg-3">
            <div className="masterhead__mobile-image d-lg-none d-block pt-5 mt-5">
              <picture>
                <img
                  src={getPublicUrl('/assets/img/landing/background-mobile.svg')}
                  className="w-100"
                  alt="bg"
                />
              </picture>
            </div>
            <div className="intro-text">
              <h1 className="text-primary mb-1 font-weight-bold">{t('heading1')}</h1>
              <h3 className="mb-1 font-weight-bold">{t('heading2')}</h3>
              <p className="text-black mt-4 mb-4">{t('description')}</p>
              <div className="d-flex gap-4 align-items-center">
                <Link
                  href="/contact-us"
                  className="btn text-uppercase rounded btn-primary text-white m-0"
                  style={{ fontSize: 16 }}
                >
                  Book a call
                </Link>
                <p className="m-0">Consult With our Tech Executive Experts, Without Obligation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Masterhead;
