import { getPublicUrl } from '@/common/util/util';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
const Masterhead = async () => {
  const t = await getTranslations('careerPage');
  return (
    <div className="page-header min-vh-75">
      <div className="oblique position-absolute top-10 h-100 d-md-block d-none">
        <div
          className={`oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 border-radius-lg border-top-start-radius-0 ms-n6 `}
        >
          <img
            className="img-fluid object-fit-cover"
            alt="why-join-us"
            src={getPublicUrl("/assets/img/why-join-us.webp")}
            loading="eager"
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 d-flex justify-content-center text-md-start text-center flex-column  mt-6">
            {/* <IntroCard /> */}
            <h3 className="text-gradient text-info mb-1">{t('joinTeams')}</h3>
            <h4 className='fs-2'>{t('unleashProgress')}</h4>
            <p className="text-dark text-lg mt-3 mb-4 me-3">{t('journeyDescription')}</p>
            <div>
              <a
                href="#job-list"
                className="btn text-uppercase fs-6 rounded px-3 py-2 btn-primary text-white my-0"
              >
                {t('goToJobs')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Masterhead;
