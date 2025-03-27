import lodashGet from 'lodash/get';
import { getCmsContent } from '@/common/connectors/cms-connector';
import { formatSlugToNameTitle } from '@/common/util/util';

export enum ROLE {
  LEADER = 'leader',
  HR = 'hr',
  DEVELOP = 'develop',
}

export interface Employee {
  name: string;
  title: string;
  image: string;
  description: string;
  linkedin: string;
  github: string;
  role: ROLE;
  index: number;
  subtitle: string;
}

interface CmsResponse {
  data: Array<{
    name: string;
    title: string;
    image: {
      url: string;
      formats?: {
        large?: { url: string };
        medium?: { url: string };
        small?: { url: string };
      };
    };
    description: string;
    linkedin: string;
    github: string;
    role: ROLE;
    subtitle: string;
    index: number;
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

export async function fetchEmployee(locale: string, nameFilter: string = ''): Promise<Employee[]> {
  let url = `/api/employee-profiles?populate=*&locale=${locale}&sort[0]=index&sort[1]=name`;
  if (nameFilter) {
    try {
      const { name, title } = formatSlugToNameTitle(nameFilter);
      url += `&filters[name][$eq]=${name}&filters[title][$eq]=${title}&pagination[pageSize]=1`;
    } catch (e) {
      return [];
    }
  }

  const response = (await getCmsContent(url, {
    next: { revalidate: 60 },
  })) as CmsResponse;

  if (!response || !response.data) {
    console.error('Invalid response structure:', response);
    return [];
  }

  const mapData: Employee[] = response.data.map((item) => {
    // Get the best available image URL
    const imageUrl =
      item.image?.formats?.large?.url ||
      item.image?.formats?.medium?.url ||
      item.image?.formats?.small?.url ||
      item.image?.url;

    return {
      name: item.name,
      title: item.title,
      image: imageUrl,
      description: item.description,
      linkedin: item.linkedin,
      github: item.github,
      role: item.role,
      index: item.index || 0,
      subtitle: item.subtitle,
    };
  });

  return mapData;
}

export async function fetchEmployees(locale: string, role: string = ''): Promise<Employee[]> {
  let url = `/api/employee-profiles?populate=*&locale=${locale}&sort[0]=index&sort[1]=name`;
  if (role) {
    url += `&filters[role][$eq]=${role}`;
  }

  const response = (await getCmsContent(url, {
    next: { revalidate: 60 },
  })) as CmsResponse;

  if (!response || !response.data) {
    console.error('Invalid response structure:', response);
    return [];
  }

  const mapData: Employee[] = response.data.map((item) => {
    // Get the best available image URL
    const imageUrl =
      item.image?.formats?.large?.url ||
      item.image?.formats?.medium?.url ||
      item.image?.formats?.small?.url ||
      item.image?.url;

    return {
      name: item.name,
      title: item.title,
      image: imageUrl,
      description: item.description,
      linkedin: item.linkedin,
      github: item.github,
      role: item.role,
      index: item.index || 0,
      subtitle: item.subtitle,
    };
  });

  return mapData;
}
