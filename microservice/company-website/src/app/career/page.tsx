import { Navbarr } from '@/landing/components/Navbarr';
import { fetchJobOpportunity } from '@/landing/services/career-service';
import JobItem from './components/JobItem';
import { getTranslations } from 'next-intl/server';
import Masterhead from './components/Masterhead';
import { Metadata, ResolvingMetadata } from 'next';
import { getPublicUrl } from '@/common/util/util';
import SlideinImage from './components/SlideinImage';

type PageProps = {
  params: { locale: string };
  searchParams: {
    key: string;
  };
};

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const t = await getTranslations('metadata');
  const title = `Career | Dayone`;

  return {
    title: title,
    description: t('description'),
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: '/career',
    },
    openGraph: {
      title: title,
      description: t('description'),
      type: 'website',
      url: '/career',
      images: { url: t('image') },
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: t('description'),
      images: { url: t('image') },
    },
  };
}

const CareerPage = async ({ params: { locale }, searchParams: { key } }: PageProps) => {
  const t = await getTranslations('careerPage');
  let { data: listJob } = await fetchJobOpportunity(locale, key);
  return (
    <>
      <div className="container">
        <Navbarr isTextLight={true} />
        <Masterhead />
        <div className="mt-lg-8">
          <div className="container-fluid px-0">
            <div className="row justify-content-center text-center">
              <div className="col-3 px-md-0" />
              <div className="col-12 position-relative px-4">
                <div className="row">
                  <div className="col-xl-3" />
                  <div className="col-xl-5 col-md-8 col-12 text-start">
                    <div className="p-3 text-start border-radius-lg">
                      {/* <WhyJoinUsCard /> */}
                      <h3>{t('whyJoin')}</h3>
                      <p className="text-dark text-lg mt-3">
                        <span
                          className="font-weight-bold"
                          style={{
                            fontSize: '1.125rem',
                          }}
                        >
                          {t('offerMore')}
                        </span>
                        {t('supportCommunity')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="row bg-info-soft bottom-0 mx-0"> */}
                <div
                  className="row"
                  style={{
                    background: 'linear-gradient(to RIGHT, #ffffff, #f6f8fd)',
                  }}
                >
                  <div className="col-xl-3 position-relative">
                    <img
                      className="w-100 border-radius-lg border-top-start-radius-0 border-bottom-start-radius-0 start-0 position-absolute max-width-300 mt-n11 d-xl-block d-none"
                      src={getPublicUrl('/assets/img/image 25.webp')}
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-xl-9">
                    <div className="row">
                      <div className="col-xl-3 col-md-4 py-md-5 py-3">
                        <div className="p-3 text-start border-radius-lg">
                          <div className="icon icon-shape icon-md bg-gradient-info shadow text-center">
                            <svg
                              width="30px"
                              height="18px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              className="mt-3"
                            >
                              <title>{t('creditCard')}</title>
                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g
                                      id="credit-card"
                                      transform="translate(453.000000, 454.000000)"
                                    >
                                      <path
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      />
                                      <path d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="mt-3 h4">{t('challengingProjects')}</p>
                          <p className="mb-4">{t('unlockPotential')}</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 py-md-5 py-3">
                        <div className="p-3 text-start bg-white border-radius-lg shadow-lg">
                          <div className="icon icon-shape icon-md bg-gradient-info shadow text-center">
                            <svg
                              width="30px"
                              height="18px"
                              viewBox="0 0 40 40"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              className="mt-3"
                            >
                              <title>{t('spaceship')}</title>
                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g
                                  transform="translate(-1720.000000, -592.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(4.000000, 301.000000)">
                                      <path d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z" />
                                      <path d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z" />
                                      <path
                                        d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                        opacity="0.598539807"
                                      />
                                      <path
                                        d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                        id="color-3"
                                        opacity="0.598539807"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="mt-3 h4">{t('workWithSmartPeople')}</p>
                          <p className="mb-4">{t('collaborateBrilliantMinds')}</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 py-md-5 py-3">
                        <div className="p-3 text-start border-radius-lg">
                          <div className="icon icon-shape icon-md bg-gradient-info shadow text-center">
                            <svg
                              width="30px"
                              height="18px"
                              viewBox="0 0 42 44"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              className="mt-3"
                            >
                              <title>{t('basket')}</title>
                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g
                                  transform="translate(-1869.000000, -741.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g id="basket" transform="translate(153.000000, 450.000000)">
                                      <path
                                        d="M34.080375,13.125 L27.3748125,1.9490625 C27.1377583,1.53795093 26.6972449,1.28682264 26.222716,1.29218729 C25.748187,1.29772591 25.3135593,1.55890827 25.0860125,1.97535742 C24.8584658,2.39180657 24.8734447,2.89865282 25.1251875,3.3009375 L31.019625,13.125 L10.980375,13.125 L16.8748125,3.3009375 C17.1265553,2.89865282 17.1415342,2.39180657 16.9139875,1.97535742 C16.6864407,1.55890827 16.251813,1.29772591 15.777284,1.29218729 C15.3027551,1.28682264 14.8622417,1.53795093 14.6251875,1.9490625 L7.919625,13.125 L0,13.125 L0,18.375 L42,18.375 L42,13.125 L34.080375,13.125 Z"
                                        opacity="0.595377604"
                                      />
                                      <path d="M3.9375,21 L3.9375,38.0625 C3.9375,40.9619949 6.28800506,43.3125 9.1875,43.3125 L32.8125,43.3125 C35.7119949,43.3125 38.0625,40.9619949 38.0625,38.0625 L38.0625,21 L3.9375,21 Z M14.4375,36.75 L11.8125,36.75 L11.8125,26.25 L14.4375,26.25 L14.4375,36.75 Z M22.3125,36.75 L19.6875,36.75 L19.6875,26.25 L22.3125,26.25 L22.3125,36.75 Z M30.1875,36.75 L27.5625,36.75 L27.5625,26.25 L30.1875,26.25 L30.1875,36.75 Z" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="mt-3 h4">{t('careerAdvancement')}</p>
                          <p className="mb-4">{t('fuelAscent')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1" />
                </div>
                <img
                  className="w-10 end-10 position-absolute mt-n6"
                  src={getPublicUrl('/assets/img/pattern-points.png')}
                  alt="image"
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-lg-8" id="job-list">
          <div className="container py-5">
            {listJob.length === 0 ? (
              <div className="row align-items-center">
                <div className="col-md-6 mb-md-0 mb-4">
                  <h2 className="text-gradient text-info mb-0">{t('noJobOpening')}</h2>
                  <h2>{t('keepInTouch')}</h2>
                  <p className="text-dark text-lg mt-3">{t('connectSocialMedia')}</p>
                  <div className="buttons">
                    <button type="button" className="btn btn-facebook btn-icon-only mx-1">
                      <span className="btn-inner--icon">
                        <i className="fab fa-facebook"></i>
                      </span>
                    </button>
                    <button type="button" className="btn btn-twitter btn-icon-only mx-1">
                      <span className="btn-inner--icon">
                        <i className="fab fa-twitter"></i>
                      </span>
                    </button>
                    <button type="button" className="btn btn-github btn-icon-only mx-1">
                      <span className="btn-inner--icon">
                        <i className="fab fa-github"></i>
                      </span>
                    </button>
                    <button type="button" className="btn btn-linkedin btn-icon-only mx-1">
                      <span className="btn-inner--icon">
                        <i className="fab fa-linkedin"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-0 rounded-3">
                    <div className="blur-shadow-image">
                      <img
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/glass-wall.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow rounded-3"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/buildings.jpg")',
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-6 mb-md-0 mb-4">
                  <h2 className="text-gradient text-info fw-bold display-5">
                    {t('topJobsOpening')}
                  </h2>
                  <div className="my-4"></div>
                  {listJob.map((item, index: number) => (
                    <>
                      <JobItem key={index} job={item} />
                      {index === listJob.length - 1 ? null : (
                        <hr className="horizontal dark my-4"></hr>
                      )}
                    </>
                  ))}
                </div>
                <SlideinImage />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CareerPage;
