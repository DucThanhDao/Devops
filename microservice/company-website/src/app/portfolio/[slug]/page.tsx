import { Navbarr } from '@/landing/components/Navbarr';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProjects } from '@/landing/services/portfolio';
import { slugify } from '@/common/util/util';
import PageNotFound from '@/common/components/PageNotFound';
import { getTranslations } from 'next-intl/server';
import BackButton from '@/landing/components/BackButton';
import { headers } from 'next/headers';
import { Metadata, ResolvingMetadata } from 'next';
export const dynamic = 'force-dynamic';
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
  const locale = (await params).locale;
  const validLocale = (locale === 'en' || locale === 'vi' ? locale : 'en') as 'en' | 'vi';
  const projects = await fetchProjects(validLocale);
  const currentProject = projects.find((project, index) => {
    if (slugify(project.name) === slug) {
      return true;
    }
    return false;
  });

  if (!currentProject)
    return {
      title: 'Dayone',
    };
  const t = await getTranslations('metadata');

  const title = `Our Works: ${currentProject?.name} | Dayone`;
  const relativeUrl = `/portfolio/${slug}`;

  return {
    title: title,
    description: currentProject?.description,
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: relativeUrl,
    },
    openGraph: {
      title: title,
      description: currentProject?.description,
      type: 'website',
      url: relativeUrl,
      images: {
        url: currentProject?.images[0] || t('image'),
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: currentProject?.description,
      images: {
        url: currentProject?.images[0] || t('image'),
      },
    },
  };
}

const PortfolioDetailPage = async ({ params: { slug, locale } }: PageProps) => {
  const t = await getTranslations('portfolioDetailPage');
  const validLocale = (locale === 'en' || locale === 'vi' ? locale : 'en') as 'en' | 'vi';
  const projects = await fetchProjects(validLocale);
  const header = headers();
  const referer = header.get('Referer');

  // swap(projects, 0, 1);
  // swap(projects, 2, 3);
  // swap(projects, 11, 9);

  let nextProjectName = '';
  let nextProjectImgUrl = '';
  let prevProjectName = '';
  let prevProjectImgUrl = '';
  const currentProject = projects.find((project, index) => {
    if (slugify(project.name) === slug) {
      nextProjectName = projects[index + 1]?.name || '';
      nextProjectImgUrl = projects[index + 1]?.images[1] || '';
      prevProjectName = projects[index - 1]?.name || '';
      prevProjectImgUrl = projects[index - 1]?.images[1] || '';
      return true;
    }
    return false;
  });

  return (
    <div className="container-fluid portfolio-detail-page px-0 mt-6">
      {!currentProject ? (
        <PageNotFound />
      ) : (
        <>
          <div className="portfolio-head">
            {currentProject.images.map((img, index) => (
              <div key={index} className="portfolio-head__background d-lg-none d-block p-2">
                <img src={img} alt="landing-photo" />
              </div>
            ))}
            <div className="portfolio-head__content text-left p-4 text-justify text-lg-start p-lg-6">
              <Navbarr isTextLight={true} />
              <div>
                <BackButton text={t('allProjects')} referer={referer} locale={locale} />
                <h1 className="text-capitalize fs-1 fw-bold display-5 mb-2 mt-4 text-dark">
                  {currentProject?.name}
                </h1>
                <p className="fs-6 text-lg text-info fw-bold">
                  {currentProject.projectTags
                    .reduce((prev, current) => `${prev}, ${current}`, ``)
                    .slice(2)}
                </p>
                <p
                  className="text-dark text-lg mt-3 mb-0"
                  dangerouslySetInnerHTML={{
                    __html: currentProject?.description.replace(/(?:\r\n|\r|\n)/g, '<br/><br/>'),
                  }}
                ></p>
                <div className="d-flex align-items-center flex-wrap">
                  {currentProject.technologyTag.map((techTag, indexStack) => (
                    <div key={`${indexStack}`} className="tech-stack me-2 rounded mt-3">
                      <div>{techTag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {currentProject.images.map((img, index) => (
              <div
                key={index}
                className={`portfolio-head__background d-lg-block d-none ${
                  index === 0 ? `` : `mt-2`
                }`}
              >
                <img src={img} alt="landing-photo" />
              </div>
            ))}
          </div>
          {/*
          <div className="container portfolio-navigate mt-5 d-flex justify-content-between">
            <Link
              href={`/portfolio/${slugify(prevProjectName)}`}
              className="text-lg text-info navigate-button"
              style={{ pointerEvents: prevProjectName ? "auto" : "none" }}
            >
              <i className="fas fa-arrow-left pe-3"></i>
              Prev
            </Link>
            <Link
              href={`/portfolio/${slugify(nextProjectName)}`}
              className="text-lg text-info navigate-button"
              style={{ pointerEvents: nextProjectName ? "auto" : "none" }}
            >
              Next
              <i className="fas fa-arrow-right ps-3"></i>
            </Link>
          </div> */}

          <div className="portfolio-collaborate container mt-6">
            <div className="pb-1">{t('letsCollaborate')}</div>
            <div className="d-flex justify-content-between flex-column flex-lg-row">
              <h2 className="fs-1 mb-0">{t('gotAProject')}</h2>
              <Link href="/contact-us" className="my-3 my-lg-auto">
                <span className="btn bg-gradient-info text-uppercase fs-6 rounded px-3 py-2 text-white my-0">
                  {t('letsTalk')}
                </span>
              </Link>
            </div>
            <hr className="my-3 d-none d-lg-block"></hr>
            <p className="text-lg text-dark">{t('teamDescription')}</p>
          </div>
          {/* <div className="portfolio-next-card">
            <div
              className="portfolio-next-card__image"
              style={{
                backgroundImage: `url(${
                  nextProjectImgUrl ? nextProjectImgUrl : prevProjectImgUrl
                })`,
                backgroundSize: "contain",
              }}
            >
            </div>
            <div className="portfolio-next-card__content d-flex flex-column justify-content-around">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">
                  {nextProjectName ? "Next Project" : "Previous Project"}
                </div>
                <Link href={`/portfolio/${slugify(prevProjectName)}`}>
                  <i className="fas fa-arrow-left text-dark"></i>
                </Link>
                <Link href={`/portfolio/${slugify(nextProjectName)}`}>
                  <i className="fas fa-arrow-right text-dark"></i>
                </Link>
              </div>
              <Link href={`/portfolio/${slugify(nextProjectName)}`}>
                <div className="text-dark fs-4 fw-bold">
                  {nextProjectName ? nextProjectName : prevProjectName}
                </div>
              </Link>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default PortfolioDetailPage;
