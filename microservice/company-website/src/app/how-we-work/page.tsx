import { getPublicUrl, slugify, sortProjectsByPriority } from '@/common/util/util';
import ContactForm from '@/landing/components/ContactForm';
import Testimonials from '@/landing/components/Testimonials';
import { fetchTestimonials, Testimonial } from '@/landing/services/landing-service';
import { fetchProjects, Project } from '@/landing/services/portfolio';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { FC } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { Navbarr } from '@/landing/components/Navbarr';
import WorkingProcess from './components/WorkingProcess';
import GuaranteeSuccess from './components/GuaranteeSuccess';
import MasterHead from './components/MasterHead';
import Service from './components/Service';
import GotProject from './components/GotProject';

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
  const title = `How we work | Dayone`;
  const t = await getTranslations('metadata');

  return {
    title: title,
    description: t('description'),
    alternates: {
      canonical: t('url'),
    },
    openGraph: {
      title: title,
      description: t('description'),
      type: 'website',
      url: t('url'),
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

const Page: FC<PageProps> = async ({ params }) => {
  const locale = params.locale || 'en';
  const t = await getTranslations('howWeWork');
  const validLocale = (locale === 'en' || locale === 'vi' ? locale : 'en') as 'en' | 'vi';
  const [projects, testimonials] = await Promise.all([
    fetchProjects(validLocale, 'Web'),
    fetchTestimonials(validLocale),
  ]);

  const displayProjects = projects.slice(0, 3);

  const priorityArray = [
    'Skymate',
    'USC Card Stablecoin',
    'DEX',
    'Nanaya',
    'Herenow',
    'CBA Advantage',
  ];

  sortProjectsByPriority(displayProjects, priorityArray);

  const workingProcess = [
    {
      id: 1,
      title: t('workingProcessSection.step1.title'),
      description: t('workingProcessSection.step1.description'),
      image: '/assets/img/how-we-work/working-process/1.webp',
    },
    {
      id: 2,
      title: t('workingProcessSection.step2.title'),
      description: t('workingProcessSection.step2.description'),
      image: '/assets/img/how-we-work/working-process/2.webp',
    },
    {
      id: 3,
      title: t('workingProcessSection.step3.title'),
      description: t('workingProcessSection.step3.description'),
      image: '/assets/img/how-we-work/working-process/3.webp',
    },
    {
      id: 4,
      title: t('workingProcessSection.step4.title'),
      description: t('workingProcessSection.step4.description'),
      image: '/assets/img/how-we-work/working-process/4.webp',
    },
  ];

  return (
    <div className="how-we-work w-100 overflow-hidden py-5 pt-lg-0">
      {/* Masterhead */}
      <MasterHead />

      {/*Service section*/}
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
                  <h3 className="mt-3 no-hover">{t('serviceSection.service1.title')}</h3>
                  <p>{t('serviceSection.service1.description')}</p>
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
                  <h3 className="mt-3 no-hover">{t('serviceSection.service2.title')}</h3>

                  <p>{t('serviceSection.service2.description')}</p>
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
                  <h3 className="mt-3 no-hover">{t('serviceSection.service3.title')}</h3>
                  <p>{t('serviceSection.service3.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Know about our exellent team */}
      <div className="portfolio-collaborate container pt-6 pb-lg-6 px-3">
        <div className="pb-1">{t('teamSection.collaborateText')}</div>
        <div className="d-flex justify-content-between flex-column flex-lg-row">
          <h2 className="fs-1 mb-0">{t('teamSection.heading')}</h2>
          <Link href="/contact-us" className="my-3 my-lg-auto">
            <span className="btn bg-gradient-info text-uppercase fs-6 rounded px-3 py-2 text-white my-0">
              {t('teamSection.button')}
            </span>
          </Link>
        </div>
        <hr className="my-3 d-none d-lg-block"></hr>
        <p className="text-lg text-dark">{t('contactSection.description')}</p>
      </div>

      <WorkingProcess workingProcessData={workingProcess} />
      <GuaranteeSuccess />
      <GotProject />

      {/* Our Project Section  */}
      <section className="py-6">
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

      {/* contactform */}
      <ContactForm />
    </div>
  );
};

export default Page;
