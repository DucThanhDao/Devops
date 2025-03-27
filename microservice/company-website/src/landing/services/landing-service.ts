import lodashGet from 'lodash/get';
import { getCmsContent } from '@/common/connectors/cms-connector';
import { prioritizeCompanies } from '@/common/util/util';

interface StrapiImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    thumbnail?: { url: string };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiImage {
  data: {
    id: number;
    attributes: StrapiImageAttributes;
  } | null;
}

interface StrapiResponseData<T> {
  id: number;
  attributes: T;
}

interface StrapiTestimonialAttributes {
  id: number;
  comment: string;
  clientName: string;
  clientRole: string;
  isHidden: boolean;
  title: string | null;
  companyName: string | null;
  companyType: string | null;
  locale: string;
  documentId: string;
  clientAvatar: Array<{
    id: number;
    documentId: string;
    url: string;
  }>;
  companyLogo: Array<{
    id: number;
    documentId: string;
    url: string;
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiTrustbyAttributes {
  id: number;
  nameCompany: string;
  link: string | null;
  documentId: string;
  companyLogo: {
    id: number;
    documentId: string;
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiTestimonial {
  id: number;
  attributes: {
    clientName: string;
    clientPosition: string;
    clientAvatar: {
      data: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
    companyName: string;
    companyLogo: {
      data: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
    testimonial: string;
    priority: number;
    companyType: string;
  };
}

interface StrapiTrustby {
  id: number;
  attributes: {
    companyName: string;
    companyLogo: {
      data: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
    priority: number;
  };
}

export interface Testimonial {
  id: number;
  clientName: string;
  clientRole: string;
  clientAvatar: string | null;
  companyName: string;
  companyLogo: string | null;
  comment: string;
  companyType: string;
  index?: number;
}

export interface Client {
  id: number;
  companyName: string;
  companyLogo: string | null;
  priority: number;
  link: string | null;
}

type ValidLocale = 'en' | 'vi';

export const fetchTestimonials = async (locale: ValidLocale): Promise<Testimonial[]> => {
  const response = await getCmsContent<{
    data: StrapiTestimonialAttributes[];
  }>(
    `/api/testimonials?populate[clientAvatar][fields][0]=url&populate[companyLogo][fields][0]=url&locale=${locale}`
  );

  if (!response?.data) {
    console.error('No testimonials data received:', response);
    return [];
  }

  return response.data
    .map((attributes) => {
      if (!attributes) {
        console.error('Missing attributes for testimonial');
        return null;
      }

      return {
        id: attributes.id,
        clientName: attributes.clientName || '',
        clientRole: attributes.clientRole || '',
        clientAvatar: attributes.clientAvatar?.[0]?.url || null,
        companyName: attributes.companyName || '',
        companyLogo: attributes.companyLogo?.[0]?.url || null,
        comment: attributes.comment || '',
        companyType: attributes.companyType || '',
      };
    })
    .filter((item): item is Testimonial => item !== null);
};

export const fetchClients = async (locale: ValidLocale): Promise<Client[]> => {
  const response = await getCmsContent<{
    data: StrapiTrustbyAttributes[];
  }>(`/api/trustbies?populate[companyLogo][fields][0]=url&locale=${locale}`);

  if (!response?.data) {
    console.error('No clients data received:', response);
    return [];
  }

  return response.data
    .map((attributes) => {
      if (!attributes) {
        console.error('Missing attributes for client');
        return null;
      }

      const companyLogo = attributes.companyLogo?.url;

      return {
        id: attributes.id,
        companyName: attributes.nameCompany || '',
        companyLogo: companyLogo || null,
        priority: 0,
        link: attributes.link || null,
      };
    })
    .filter((item): item is Client => item !== null);
};
