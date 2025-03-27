import { getPublicUrl, slugify, sortProjectsByPriority } from '@/common/util/util';
import ContactForm from '@/landing/components/ContactForm';
import Testimonials from '@/landing/components/Testimonials';
import { fetchTestimonials, Testimonial } from '@/landing/services/landing-service';
import { fetchProjects, Project } from '@/landing/services/portfolio';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { FC } from 'react';
import Masterhead from './components/Masterhead';
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
  const title = `Services: Digital Transformation | Dayone`;
  const t = await getTranslations('metadata');
  const relativeUrl = '/services/digital-transformation';
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
      images: { url: t('digitalImage') },
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: t('description'),
      images: { url: t('digitalImage') },
    },
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const locale = process.env.DEFAULT_LOCALE! as 'en'
  const t = await getTranslations('digitalTransformation');
  const [projects, testimonials] = await Promise.all([
    fetchProjects(locale, 'Web'),
    fetchTestimonials(locale),
  ]);

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
        <img
          src={getPublicUrl('/assets/img/icons/digital-icons/digital-1.svg')}
          alt="img-blur-shadow-digital-1"
          className="w-30"
        />
      ),
    },
    {
      title: t('feature2.title'),
      description: t('feature2.description'),
      bgColor: '#f2f8fe',
      icon: (
        <img
          src={getPublicUrl('/assets/img/icons/digital-icons/digital-2.svg')}
          alt="img-blur-shadow-digital-2"
          className="w-30"
        />
      ),
    },
    {
      title: t('feature3.title'),
      description: t('feature3.description'),
      bgColor: '#fff2f2',
      icon: (
        <img
          src={getPublicUrl('/assets/img/icons/digital-icons/digital-3.svg')}
          alt="img-blur-shadow-digital-3"
          className="w-30"
        />
      ),
    },
    {
      title: t('feature4.title'),
      description: t('feature4.description'),
      bgColor: '#fff2f2',
      icon: (
        <img
          src={getPublicUrl('/assets/img/icons/digital-icons/digital-4.svg')}
          alt="img-blur-shadow-digital-4"
          className="w-30"
        />
      ),
    },
  ];

  sortProjectsByPriority(displayProjects, priorityArray);

  return (
    <div className="w-100 overflow-hidden py-5 pt-lg-0">
      {/* Masterhead */}
      <Masterhead />

      {/* diff */}
      <section className="pt-lg-9 pb-4 pt-0">
        <div className="container">
          <div className="container mb-3">
            <div className="row row-cols-1 row-cols-sm-4 g-4">
              {features.map((feature, index) => (
                <div key={index} className="col d-flex">
                  <div
                    className="p-4 rounded-lg d-flex flex-column align-items-center h-100 text-center shadow-md"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <div>
                      <h3 className="h5 fw-medium text-dark">{feature.title}</h3>
                      <p className="mt-2 ">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/contact-us"
              className="btn text-uppercase fs-6 rounded px-4 py-2 btn-primary text-white mt-5"
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </section>

      {/*Service section*/}
      <section className="container pt-5 pb-3">
        <div className="col-lg-8 mx-auto text-center pb-4 mb-6">
          <h2>{t('serviceSection.heading')}</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 justify-content-center d-flex flex-column">
                  <img
                    src={getPublicUrl('/assets/img/digital-transformation/digital-2.webp')}
                    alt="img-blur-shadow-blog-2"
                    className="img-fluid shadow rounded-3"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 ">
                  <h3 className="mt-md-3 mt-3 display-5 font-weight-bold text-primary ">
                    {t('serviceSection.service1.title')}
                  </h3>
                  <p style={{ fontSize: '1.3rem' }}>{t('serviceSection.service1.description')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-5">
              <div className="row flex-row-reverse">
                <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5">
                  <img
                    src={getPublicUrl('/assets/img/digital-transformation/digital-3.svg')}
                    alt="img-blur-shadow-blog-2"
                    className="img-fluid shadow rounded-3"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
                  <h3 className="mt-md-3 mt-3 display-5 font-weight-bold text-primary ">
                    {t('serviceSection.service2.title')}
                  </h3>
                  <p style={{ fontSize: '1.3rem' }}>{t('serviceSection.service2.description')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-5">
              <div className="row">
                <div className="col-lg-6 justify-content-center d-flex flex-column">
                  <img
                    src={getPublicUrl('/assets/img/digital-transformation/digital-4.svg')}
                    alt="img-blur-shadow-blog-3"
                    className="img-fluid shadow rounded-3"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 pt-3">
                  <h3 className="mt-md-3 mt-3 display-5 font-weight-bold text-primary ">
                    {t('serviceSection.service3.title')}
                  </h3>
                  <p style={{ fontSize: '1.3rem' }}>{t('serviceSection.service3.description')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-5">
              <div className="row flex-row-reverse">
                <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5">
                  <img
                    src={getPublicUrl('/assets/img/digital-transformation/digital-5.svg')}
                    alt="img-blur-shadow-blog-4"
                    className="img-fluid shadow rounded-3"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
                  <h3 className="mt-md-3 mt-3 display-5 font-weight-bold text-primary ">
                    {t('serviceSection.service4.title')}
                  </h3>
                  <p style={{ fontSize: '1.3rem' }}>{t('serviceSection.service4.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how we work */}
      <section className="container pt-lg-8 pb-lg-4">
        <div className="col-lg-8 mx-auto text-center pb-4 mb-4">
          <h2>{t('howWeWorkSection.heading')}</h2>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-1 justify-content-center d-flex flex-column mb-4 mb-lg-0">
              <img
                src={getPublicUrl('/assets/img/icons/digital-icons/digital-5.svg')}
                alt="img-blur-shadow-blog-2"
                className="w-lg-100 w-25 mx-auto  h-auto"
                loading="lazy"
              />
            </div>
            <div className="col-lg-11 justify-content-center d-flex flex-column pt-lg-0 text-center text-lg-start">
              <h3 className="mt-md-3 mt-3" style={{ color: '#0087eb' }}>
                {t('howWeWorkSection.step1.title')}
              </h3>
              <p style={{ fontSize: '1.3rem' }}>{t('howWeWorkSection.step1.description')}</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-1 justify-content-center d-flex flex-column mb-4 mb-lg-0">
              <img
                src={getPublicUrl('/assets/img/icons/digital-icons/digital-6.svg')}
                alt="img-blur-shadow-blog-2"
                className="w-lg-100 w-25 mx-auto  h-auto"
                loading="lazy"
              />
            </div>
            <div className="col-lg-11 justify-content-center d-flex flex-column pt-lg-0 text-center text-lg-start">
              <h3 className="mt-md-3 mt-3 " style={{ color: '#0087eb' }}>
                {t('howWeWorkSection.step2.title')}
              </h3>
              <p style={{ fontSize: '1.3rem' }}>{t('howWeWorkSection.step2.description')}</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-1 justify-content-center d-flex flex-column mb-4 mb-lg-0">
              <img
                src={getPublicUrl('/assets/img/icons/digital-icons/digital-7.svg')}
                alt="img-blur-shadow-blog-2"
                className="w-lg-100 w-25 mx-auto  h-auto"
                loading="lazy"
              />
            </div>
            <div className="col-lg-11 justify-content-center d-flex flex-column pt-lg-0 text-center text-lg-start">
              <h3 className="mt-md-3 mt-3 " style={{ color: '#0087eb' }}>
                {t('howWeWorkSection.step3.title')}
              </h3>
              <p style={{ fontSize: '1.3rem' }}>{t('howWeWorkSection.step3.description')}</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-1 justify-content-center d-flex flex-column mb-4 mb-lg-0">
              <img
                src={getPublicUrl('/assets/img/icons/digital-icons/digital-8.svg')}
                alt="img-blur-shadow-blog-2"
                className="w-lg-100 w-25 mx-auto  h-auto"
                loading="lazy"
              />
            </div>
            <div className="col-lg-11 justify-content-center d-flex flex-column pt-lg-0 text-center text-lg-start">
              <h3 className="mt-md-3 mt-3 " style={{ color: '#0087eb' }}>
                {t('howWeWorkSection.step4.title')}
              </h3>
              <p style={{ fontSize: '1.3rem' }}>{t('howWeWorkSection.step4.description')}</p>
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          <Link
            href="/contact-us"
            className="btn text-uppercase fs-6 rounded px-4 py-2 btn-primary text-white mt-5"
          >
            {t("button")}
          </Link>
        </div> */}
      </section>

      {/* Our Project Section  */}
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="p-3 text-center mb-5">
                <h2 className="mt-3">{t('projectsSection.heading')}</h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 px-4">
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

      {/* testimonial */}
      <Testimonials testimonials={testimonials} titleIsShown={true} />

      {/* cta */}
      <section className="pt-4 pt-lg-8">
        <div className="container text-center">
          <h2 className="fw-bold display-5 mb-4">{t('ctaSection.title')}</h2>
          <p className="fw-bold display-6 mb-1">{t('ctaSection.subtitle')}</p>
        </div>
      </section>

      {/* contactform */}
      <ContactForm />
    </div>
  );
};

export default Page;
