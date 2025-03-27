import { Navbarr } from '@/landing/components/Navbarr';
import { Employee, ROLE, fetchEmployee, fetchEmployees } from '@/landing/services/profile-service';
import PageNotFound from '@/common/components/PageNotFound';
import { getTranslations } from 'next-intl/server';
import { Metadata, ResolvingMetadata } from 'next';
import PageContent from './components/PageContent';
import * as process from 'node:process';
import Link from 'next/link';

type PageProps = {
  params: {
    slug: string;
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
  const employee = await fetchEmployees(locale, slug).then((employees) =>
    employees.length > 0 ? employees[0] : null
  );
  if (!employee)
    return {
      title: 'Dayone',
    };
  const t = await getTranslations('metadata');
  const title = `${employee.name} | Dayone`;
  const relativeUrl = `about-us/${slug}`;
  return {
    title: title,
    description: employee?.description,
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: relativeUrl,
    },
    openGraph: {
      title: title,
      description: employee?.description,
      type: 'website',
      url: relativeUrl,
      images: { url: t('image') },
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: employee?.description,
      images: { url: t('image') },
    },
  };
}

const Page = async ({ params: { slug } }: PageProps) => {
  const t = await getTranslations('aboutUsSlug');
  const locale = process.env.DEFAULT_LOCALE!;

  const employee = (await fetchEmployee(locale, slug))[0];

  if (!employee) {
    return <PageNotFound />;
  }

  const lastName = employee.name.split(' ').pop() || '';
  const formattedDescription = employee.description
    ? employee.description
        // .replace(employee.name, `<b><u>${employee.name}</u></b>`)
        .split(/-\s+/)
        .join('<br/>- ')
        .split(/\. He/g)
        .join('.<br/>He')
        .split(/\n/g)
        .join('<br/>')
    : '';

  return (
    <>
      <Navbarr isTextLight={true} />
      <div className="container mx-auto px-4 my-1 py-6 mt-5">
        <div className="row g-4">
          <span className="text-info fw-bold back-button pb-1 cursor-pointer">
            <Link href="/about-us">
              <i className="fas fa-arrow-left pe-2"></i>
              {t('backButton')}
            </Link>
          </span>
          <span className="text-primary text-uppercase fw-bold">
            {employee.role.toUpperCase()}
          </span>
          <h1 className="display-4 fw-bold mt-2">{employee.name}</h1>
          <p className="h4 text-muted mt-1">{employee.title}</p>
        </div>
        <PageContent
          image={employee.image}
          name={employee.name}
          title={`${t('about')} ${lastName}`}
          description={{ __html: formattedDescription }}
        />
      </div>
    </>
  );
};

export default Page;
