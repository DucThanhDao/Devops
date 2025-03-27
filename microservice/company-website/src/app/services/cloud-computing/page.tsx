import { Navbarr } from '@/landing/components/Navbarr';
import React, { FC } from 'react';
import { fetchProjects, Project } from '@/landing/services/portfolio';
import Link from 'next/link';
import { getPublicUrl, slugify, sortProjectsByPriority } from '@/common/util/util';
import { getTranslations } from 'next-intl/server';
import { Metadata, ResolvingMetadata } from 'next';
import * as process from 'node:process';

interface PageProps {
  params: { locale: string };
}

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = `Services: Cloud Computing | Dayone`;
  const t = await getTranslations('metadata');
  const relativeUrl = '/services/cloud-computing';
  return {
    title: title,
    description: t('description'),
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: relativeUrl,
    },
    openGraph: {
      title: title,
      description: t('description'),
      type: 'website',
      url: relativeUrl,
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

const Page: FC<PageProps> = async () => {
  const locale = process.env.DEFAULT_LOCALE! as 'en'
  const t = await getTranslations('cloudComputing');
  const projects: Project[] = await fetchProjects(locale, 'Web');
  const displayProjects = projects.slice(0, 9);

  const priorityArray = [
    'Skymate',
    'USC Card Stablecoin',
    'DEX',
    'Nanaya',
    'Herenow',
    'CBA Advantage',
  ];

  const features = [
    {
      title: t('feature1.title'),
      description: t('feature1.description'),
      bgColor: '#f7f8f9',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          fill="none"
          viewBox="0 0 72 72"
        >
          <rect width="48" height="48" fill="#E6F1FE" rx="36"></rect>
          <path
            fill="#0070F4"
            d="M18 24c0-2.188 1.75-4 4-4h10v8c0 1.125.875 2 2 2h8v7.875l-5.438 5.438a4.326 4.326 0 0 0-1.312 2.312l-1.188 4.688c-.124.562-.124 1.187.063 1.75H22c-2.25 0-4-1.813-4-4V24Zm24 4h-8v-8l8 8Zm10.313 6.75.937.938c.938.937.938 2.5 0 3.5l-1.875 1.874-4.438-4.437 1.876-1.875c.937-.938 2.562-.938 3.5 0ZM37.437 46.063 45.563 38 50 42.438 41.875 50.5c-.25.25-.563.438-.875.563L37.187 52c-.312.063-.687 0-.937-.25s-.313-.625-.25-1l.938-3.75c.062-.313.25-.688.5-.938Z"
          ></path>
        </svg>
      ),
    },
    {
      title: t('feature2.title'),
      description: t('feature2.description'),
      bgColor: '#f2f8fe',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          fill="none"
          viewBox="0 0 72 72"
        >
          <rect width="48" height="48" fill="#FFF3E6" rx="36"></rect>
          <path
            fill="#F80"
            d="M28 20h10v8c0 1.125.875 2 2 2h8v18c0 2.25-1.813 4-4 4H28c-2.25 0-4-1.75-4-4V24c0-2.188 1.75-4 4-4Zm12 0 8 8h-8v-8Zm1 19c0-3.313-2.688-6-6-6-3.313 0-6 2.688-6 6 0 3.313 2.688 6 6 6 1.063 0 2.125-.25 3-.813l2.438 2.438c.562.563 1.5.563 2.124 0 .563-.625.563-1.563 0-2.125l-2.437-2.438A5.66 5.66 0 0 0 41 39Zm-6 3c-1.125 0-2.063-.563-2.625-1.5-.563-.875-.563-2.063 0-3 .563-.875 1.5-1.5 2.625-1.5 1.063 0 2 .625 2.563 1.5.562.938.562 2.125 0 3C37 41.438 36.063 42 35 42Z"
          ></path>
        </svg>
      ),
    },
    {
      title: t('feature3.title'),
      description: t('feature3.description'),
      bgColor: '#fff2f2',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          fill="none"
          viewBox="0 0 72 72"
        >
          <rect width="48" height="48" fill="#E5F8EB" rx="36"></rect>
          <path
            fill="#00B63E"
            d="M36 52c-5.75 0-11-3-13.875-8-2.875-4.938-2.875-11 0-16C25 23.062 30.25 20 36 20c5.688 0 10.938 3.063 13.813 8 2.874 5 2.874 11.063 0 16-2.876 5-8.126 8-13.813 8Zm7.063-18.938H43c.625-.562.625-1.5 0-2.124a1.471 1.471 0 0 0-2.063 0l-6.937 7L31.062 35c-.625-.625-1.562-.625-2.125 0a1.369 1.369 0 0 0 0 2.063l4 4c.563.624 1.5.624 2.126 0l8-8Z"
          ></path>
        </svg>
      ),
    },
  ];
  sortProjectsByPriority(displayProjects, priorityArray);
  return (
    <>
      <div className="container mx-0.5 py-6">
        <Navbarr isTextLight={true} />
        {/* Hero Section  */}
        <section className="text-center pt-5 pb-3 pt-md-7 pb-md-5 px-0 px-md-5 bg-white">
          <h2 className="display-3 font-weight-bold text-dark mb-4">{t('heroSection.heading1')}</h2>
          <h2 className="display-3 font-weight-bold text-primary">{t('heroSection.heading2')}</h2>
          <p
            className="text-muted  md:text-base max-w-3xl mx-auto mt-4 px-lg-4"
            style={{
              fontSize: '1.1rem',
            }}
          >
            {t('heroSection.paragraph')}
          </p>
        </section>

        {/* Feature Section  */}
        <section className="pt-5 pb-3">
          <div className="col-lg-8 mx-auto text-center pb-4 mb-6">
            <h2 className="display-3 font-weight-bold">{t('featureSection.heading')}</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 justify-content-center d-flex flex-column">
                    <img
                      src={getPublicUrl('/assets/img/services/cloud-1.svg')}
                      alt="img-blur-shadow-blog-2"
                      className="img-fluid shadow rounded-3 custom-height"
                    />
                  </div>
                  <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 ">
                    <h3 className="mt-md-3 mt-3 display-5 font-weight-bold text-primary ">
                      {t('featureSection.feature1.title')}
                    </h3>
                    <p style={{ fontSize: '1.3rem' }}>{t('featureSection.feature1.description')}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <div className="row flex-row-reverse">
                  <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5">
                    <img
                      src={getPublicUrl('/assets/img/services/cloud-2.svg')}
                      alt="img-blur-shadow-blog-2"
                      className="img-fluid shadow rounded-3 custom-height"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
                    <h3 className="mt-md-3 mt-3 display-5 font-weight-bold text-primary ">
                      {t('featureSection.feature2.title')}
                    </h3>
                    <p style={{ fontSize: '1.3rem' }}>{t('featureSection.feature2.description')}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <div className="row">
                  <div className="col-lg-6 justify-content-center d-flex flex-column">
                    <img
                      src={getPublicUrl('/assets/img/services/cloud-3.svg')}
                      alt="img-blur-shadow-blog-2"
                      className="img-fluid shadow rounded-3 custom-height"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 pt-3">
                    <h3 className="mt-md-3 mt-3 display-5 font-weight-bold text-primary ">
                      {t('featureSection.feature3.title')}
                    </h3>
                    <p style={{ fontSize: '1.3rem' }}>{t('featureSection.feature3.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why we different */}
        <section className="pt-6 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center pb-4">
                <h2 className="display-3 font-weight-bold">
                  {t('differentiatorsSection.heading')}
                </h2>
              </div>
            </div>
            <div className="container px-4 mb-3 mt-6">
              <div className="row row-cols-1 row-cols-sm-3 g-4">
                {features.map((feature, index) => (
                  <div key={index} className="col d-flex">
                    <div
                      className="p-4 rounded-lg shadow-md d-flex flex-column align-items-center h-100 text-center"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <div className="ms-4">{feature.icon}</div>
                      <div>
                        <h3 className="h5 fw-medium text-dark">{feature.title}</h3>
                        <p className="mt-2 ">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Project Section  */}

        <section className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="p-3 text-center mb-5">
                  <h2 className="mt-3 display-3 font-weight-bold">
                    {t('projectsSection.heading')}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 p-4">
              {displayProjects.map((project: Project, index: number) => (
                <Link className="col" key={index} href={`/portfolio/${slugify(project.name)}`}>
                  <div className="card custom-card bg-white overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt="Project Image"
                      className="card-img-top custom-card-img img-fluid"
                      loading="lazy"
                    />
                    <div className="card-body custom-card-body">
                      <h3 className="card-title text-xl font-bold fw-bold text-dark">
                        {project.name}
                      </h3>
                      <p className="card-subtitle text-sm text-primary fw-bolder">
                        {project.projectTags.join(', ')}
                      </p>
                      <p className="card-text mt-2 text-muted">
                        {project.description.split(/\s+/).slice(0, 21).join(' ') +
                          (project.description.split(/\s+/).length > 21 ? '...' : '')}
                      </p>
                      <div className="mt-4">
                        {project.technologyTag.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="badge me-2 mt-1 "
                            style={{
                              border: '1px solid #0078D1',
                              color: '#0078D1',
                              fontWeight: 'normal',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section  */}

        <div className="portfolio-collaborate container mt-6  px-3">
          <div className="pb-1">{t('contactSection.title')}</div>
          <div className="d-flex justify-content-between flex-column flex-lg-row">
            <h2 className="fs-1 mb-0">{t('contactSection.subtitle')}</h2>
            <Link href="/contact-us" className="my-3 my-lg-auto">
              <span className="btn bg-gradient-info text-uppercase fs-6 rounded px-3 py-2 text-white my-0">
                {t('contactSection.buttonText')}
              </span>
            </Link>
          </div>
          <hr className="my-3 d-none d-lg-block"></hr>
          <p className="text-lg text-dark">{t('contactSection.description')}</p>
        </div>
      </div>
    </>
  );
};

export default Page;
