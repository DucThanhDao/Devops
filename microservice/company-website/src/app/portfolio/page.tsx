import { Navbarr } from '@/landing/components/Navbarr';
import PortfolioClient from '@/landing/components/PortfolioClient';
import { fetchProjects } from '@/landing/services/portfolio';
import { getTranslations } from 'next-intl/server';
import { getPublicUrl, swap } from '@/common/util/util';
import { Metadata, ResolvingMetadata } from 'next';

interface PortfolioProps {
  params: { locale: string };
  searchParams: { industries: string };
}

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const industries = (await searchParams).industries;
  let title = `Our Works | Dayone`;
  let reletiveUrl = `/portfolio`;

  if (industries) {
    title = `Our Works: ${industries} | Dayone`;
    reletiveUrl = `/portfolio?industries=${industries}`;
  }
  const t = await getTranslations('metadata');

  return {
    title: title,
    description: t('description'),
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: reletiveUrl,
    },
    openGraph: {
      title: title,
      description: t('description'),
      type: 'website',
      url: reletiveUrl,
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

const Portfolio = async ({ params, searchParams }: PortfolioProps) => {
  const rawLocale = params.locale || 'en';
  const locale = (rawLocale === 'en' || rawLocale === 'vi' ? rawLocale : 'en') as 'en' | 'vi';
  const filter = searchParams.industries || 'All';
  const t = await getTranslations('portfolio');
  const validLocale = (locale === 'en' || locale === 'vi' ? locale : 'en') as 'en' | 'vi';
  const projects = await fetchProjects(validLocale, filter);

  return (
    <>
      <Navbarr isTextLight={true} />
      <div className="portfolio-page">
        <div className="page-header min-vh-45 mt-5 pt-5 mt-lg-6 pt-lg-0">
          <div>
            <div className="header-background position-absolute fixed-top w-100 w-lg-50 h-100 z-index-0 d-none d-sm-none d-md-block" />
          </div>
          <div className="container px-4 px-lg-0">
            <div className="row min-vh-55">
              <div className="header-content col-12 col-lg-6 d-flex align-items-center pex-0 pe-lg-7 text-center text-md-start">
                <div>
                  <h1 className="text-gradient text-gr mb-1">Our Products</h1>
                  <h3>{t('ultimateExcellence')}</h3>

                  <p className="text-dark text-lg mt-3 mb-4"> {t('companyMission')}</p>
                </div>
              </div>
              <div className="header-image col-12 col-lg-6 d-flex justify-content-center align-items-center pt-3">
                <picture>
                  <img
                    src={getPublicUrl('/assets/img/Page_header_img.svg')}
                    alt="Page header img"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div id="project-list" className="container px-4 px-lg-0">
          <PortfolioClient projects={projects} searchParams={searchParams} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
