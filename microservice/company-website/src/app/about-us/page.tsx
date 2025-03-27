import { Navbarr } from '@/landing/components/Navbarr';
import React from 'react';
import { Employee, fetchEmployees } from '@/landing/services/profile-service';
import { getTranslations } from 'next-intl/server';
import { Metadata, ResolvingMetadata } from 'next';
import OurTeam from './components/OurTeam/OurTeam';
import WhyIsDayOne from '@/landing/components/WhyIsDayOne';
import ContactForm from '@/landing/components/ContactForm';
import HeroImage from './components/HeroImage/HeroImage';

interface AboutUsProps {
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
  const title = `About Us | Dayone`;
  const t = await getTranslations('metadata');

  return {
    title: title,
    description: t('description'),
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: `/about-us`,
    },
    openGraph: {
      title: title,
      description: t('description'),
      type: 'website',
      url: `/about-us`,
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

const AboutUs = async ({ params: { locale } }: AboutUsProps) => {
  const t = await getTranslations('aboutUs');

  return (
    <main>
      <Navbarr isTextLight={true} />
      <HeroImage />
      <OurTeam />
      <WhyIsDayOne />
      <ContactForm />
    </main>
  );
};

export default AboutUs;
