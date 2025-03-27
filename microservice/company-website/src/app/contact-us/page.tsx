import ContactForm from '@/landing/components/ContactForm';
import Masterhead from '@/landing/components/Masterhead';
import { Navbarr } from '@/landing/components/Navbarr';
import { Metadata, ResolvingMetadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = `Contact Us | Dayone`;
  const t = await getTranslations('metadata');

  return {
    title: title,
    description: t('description'),
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: `/contact-us`,
    },
    openGraph: {
      title: title,
      description: t('description'),
      type: 'website',
      url: `/contact-us`,
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
const ContactUs = () => {
  return (
    <div>
      <Navbarr isTextLight={true} />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
