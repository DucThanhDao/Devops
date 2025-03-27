import { getCmsContent } from '@/common/connectors/cms-connector';

export interface Job {
  name: string;
  description: string;
  location: string;
  typeWorking: string;
  slug: string;
  publishedAt: Date;
  link: string;
  salary?: string;
  // endDate: Date;
}

export interface HRContact {
  name: string;
  phone: string;
  email: string;
  linkCV: string;
}

interface CmsResponse {
  data: Array<{
    id: number;
    name: string;
    description: string;
    location: string;
    typeWorking: Array<{
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      documentId: string;
    }>;
    slug: string;
    publishedAt: string;
    link: string | null;
    documentId: string;
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function fetchJobOpportunity(
  locale: string,
  key: string
): Promise<{ data: Job[]; count: number }> {
  let url = `/api/job-opportunities?populate=*&filters[isHidden][$eq]=false&sort[0]=updatedAt:desc&locale=${locale}`;
  if (key) {
    url += `&filters[$or][0][description][$contains]=${key}&filters[$or][1][name][$contains]=${key}`;
  }
  const response = (await getCmsContent(
    url,
    {
      next: { revalidate: 60 },
    },
    true
  )) as CmsResponse;

  return {
    data: response.data.map((item) => ({
      name: item.name,
      link: item.link || '',
      publishedAt: new Date(item.publishedAt),
      slug: item.slug,
      location: item.location,
      typeWorking: item.typeWorking[0]?.name || '',
      description: item.description,
    })),
    count: response.meta.pagination.total,
  };
}

interface SingleJobResponse {
  id: number;
  name: string;
  description: string;
  location: string;
  typeWorking: Array<{
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    documentId: string;
  }>;
  slug: string;
  link: string | null;
  publishedAt: string;
  documentId: string;
}

export async function fetchOneJob(locale: string, slug: string): Promise<Job | null> {
  const response = (await getCmsContent(
    `/api/job-opportunities?populate=*&filters[slug][$eq]=${slug}&filters[isHidden][$eq]=false&locale=${locale}`,
    {
      next: { revalidate: 60 },
    }
  )) as CmsResponse;

  if (!response?.data?.[0]) {
    return null;
  }

  const data = response.data[0];
  return {
    name: data.name,
    description: data.description,
    location: data.location,
    typeWorking: data.typeWorking[0]?.name || '',
    slug: data.slug,
    link: data.link || '',
    publishedAt: new Date(data.publishedAt),
  };
}

interface HRContactResponse {
  data: {
    id: number;
    name: string;
    phone: string;
    email: string;
    linkCV: string;
    documentId: string;
  }[];
}

export async function fetchHRContact(): Promise<HRContact> {
  const response = (await getCmsContent(`/api/hr-contacts`, {
    next: { revalidate: 60 },
  })) as HRContactResponse;

  if (!response?.data) {
    return {
      name: 'HR Department',
      phone: '+84 28 7300 4567',
      email: 'hr@dayoneteams.com',
      linkCV: 'https://dayoneteams.com/career',
    };
  }

  return {
    name: response.data[0].name,
    phone: response.data[0].phone,
    email: response.data[0].email,
    linkCV: response.data[0].linkCV,
  };
}
