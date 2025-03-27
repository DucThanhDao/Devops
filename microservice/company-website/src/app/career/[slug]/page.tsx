import PageNotFound from '@/common/components/PageNotFound';
import { Navbarr } from '@/landing/components/Navbarr';
import { HRContact, Job, fetchHRContact, fetchOneJob } from '@/landing/services/career-service';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getTranslations } from 'next-intl/server';
import { Metadata, ResolvingMetadata } from 'next';

type PageProps = {
  params: {
    slug: string;
    locale: string;
  };
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const job = await fetchOneJob((await params).locale, slug);
  if (!job)
    return {
      title: 'Dayone',
    };
  const t = await getTranslations('metadata');
  const title = `${job.name} | Dayone`;

  return {
    title: title,
    description: t('description'),
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: `/career/${slug}`,
    },
    openGraph: {
      title: title,
      description: t('description'),
      type: 'website',
      url: `/career/${slug}`,
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
const DetailJob = async ({ params: { locale, slug } }: PageProps) => {
  const t = await getTranslations('jobDetail');
  const [job, hRContact]: [Job | null, HRContact] = await Promise.all([
    fetchOneJob(locale, slug),
    fetchHRContact(),
  ]);
  return (
    <>
      <Navbarr isTextLight={true} />
      {!job ? (
        <PageNotFound />
      ) : (
        <div>
          <div className="container job-detail-page">
            <div className="row position-relative">
              <div className="col-sm-12 col-md-12 col-lg-9">
                <div className="card">
                  <div className="card-header text-white bg-gradient-info p-5 pb-6 position-relative ">
                    <h3 className="mb-0 text-white">{job.name}</h3>
                    <div className="mt-3">
                      <i className="fas fa-map-marker-alt" />
                      &nbsp;
                      <span>{job.location}</span>
                    </div>
                    <div className="mt-2">
                      <i className="fas fa-briefcase" />
                      &nbsp;
                      <span>{job.typeWorking}</span>
                    </div>
                    <div className="position-absolute w-100 z-index-1 bottom-0 ms-n5">
                      <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 40"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                        style={{ height: '7vh', minHeight: 50 }}
                      >
                        <defs>
                          <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                          />
                        </defs>
                        <g className="moving-waves">
                          <use
                            xlinkHref="#gentle-wave"
                            x={48}
                            y={-1}
                            fill="rgba(255,255,255,0.40"
                          />
                          <use
                            xlinkHref="#gentle-wave"
                            x={48}
                            y={3}
                            fill="rgba(255,255,255,0.35)"
                          />
                          <use
                            xlinkHref="#gentle-wave"
                            x={48}
                            y={5}
                            fill="rgba(255,255,255,0.25)"
                          />
                          <use
                            xlinkHref="#gentle-wave"
                            x={48}
                            y={8}
                            fill="rgba(255,255,255,0.20)"
                          />
                          <use
                            xlinkHref="#gentle-wave"
                            x={48}
                            y={13}
                            fill="rgba(255,255,255,0.15)"
                          />
                          <use
                            xlinkHref="#gentle-wave"
                            x={48}
                            y={16}
                            fill="rgba(255,255,255,0.95"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* <div className="job-detail-page-location">
                    <div className="icon">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div>{job?.salary ? job.salary : "Negotiation"}</div>
                  </div> */}
                    {/* <div className="h5 mt-3">About This Job</div> */}
                    <div className="job-detail-page-description">
                      <ReactMarkdown>{job.description}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3 px-2 ps-lg-3 ps-xl-4 end-0 position-relative">
                {/* <div className="card mt-2 position-fixed"> */}
                <div className="card mt-2 apply-card">
                  <div className="card-body">
                    <p className="h6">{t('applyNow')}</p>
                    <p>{t('applyDescription')}</p>
                    <div className="text-bold">
                      <i className="fas fa-envelope"></i>
                      &nbsp;
                      <a href={'mailto:' + hRContact.email}>{hRContact.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailJob;
