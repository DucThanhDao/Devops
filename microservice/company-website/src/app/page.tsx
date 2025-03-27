import { FC } from 'react';
import Masterhead from '@/landing/components/Masterhead';
import ContactForm from '@/landing/components/ContactForm';
import Services from '@/landing/components/services/Services';
import Technologies from '@/landing/components/technologies/Technologies';
import Clients from '@/landing/components/Clients';
import Testimonials from '@/landing/components/Testimonials';
import {
  Client,
  fetchClients,
  fetchTestimonials,
  Testimonial,
} from '@/landing/services/landing-service';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata, ResolvingMetadata } from 'next';
import { getTranslations } from 'next-intl/server';
import WhatYouLookingFor from '@/landing/components/what-you-looking-for/WhatYouLookingFor';
import Data from '@/landing/components/Data';
import WorksCarouselWrapper from '@/landing/components/WorksCarouselWrapper';
import { notFound } from 'next/navigation';

interface HomePageProps {
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
  const t = await getTranslations('metadata');

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: `/`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      url: `/`,
      images: { url: t('image') },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: { url: t('image') }, // Must be an absolute URL
    },
  };
}

const HomePage: FC<HomePageProps> = async ({ params }) => {
  const locale = params.locale || 'en';
  const t = await getTranslations('home');
  const validLocale = (locale === 'en' || locale === 'vi' ? locale : 'en') as 'en' | 'vi';

  const [testimonials, clients]: [Testimonial[], Client[]] = await Promise.all([
    fetchTestimonials(validLocale),
    fetchClients(validLocale),
  ]);

  return (
    <div>
      <Masterhead />
      <Data />
      <Services />
      <WorksCarouselWrapper locale={validLocale} />
      <Technologies />
      <WhatYouLookingFor />
      <Clients clients={clients} />
      <Testimonials testimonials={testimonials} titleIsShown={false} />
      <ContactForm />
      {/*<WhyIsDayOne />*/}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default HomePage;
