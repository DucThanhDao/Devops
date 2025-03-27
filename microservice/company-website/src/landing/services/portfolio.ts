import lodashGet from 'lodash/get';
import { getCmsContent } from '@/common/connectors/cms-connector';

interface StrapiResponse<T> {
  data: Array<T>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiImage {
  id: number;
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
  documentId: string;
  publishedAt: string;
}

interface StrapiTag {
  id: number;
  label: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  documentId: string;
}

interface StrapiProjectAttributes {
  id: number;
  name: string;
  description: string;
  index: number;
  isHidden: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  documentId: string;
  images: StrapiImage[];
  projectTags: StrapiTag[];
  technologyTag: StrapiTag[];
  localizations: any[];
}

export interface Project {
  name: string;
  description: string;
  images: string[];
  projectTags: string[];
  technologyTag: string[];
}

export async function fetchProjects(
  locale: 'en' | 'vi',
  filterType: 'all' | string = 'All'
): Promise<Project[]> {
  let url = `/api/projects?populate=*&filters[isHidden][$eq]=false&sort=name&locale=${locale}`;
  if (filterType !== 'All') {
    url = `/api/projects?populate=*&filters[projectTags][label][$contains]=${filterType}&sort=name&locale=${locale}`;
  }

  const response = await getCmsContent<StrapiResponse<StrapiProjectAttributes>>(url, {
    next: { revalidate: 60 },
  });

  if (!response?.data || !Array.isArray(response.data)) {
    console.error('Invalid response structure:', response);
    return [];
  }

  return response.data
    .map((item) => {
      // Extract images from the response
      const images =
        item.images
          ?.map((image) => {
            const imageUrl = image?.url;
            if (!imageUrl) {
              console.error('Image is missing URL:', image);
              return null;
            }
            return imageUrl;
          })
          .filter((url): url is string => url !== null) || [];

      if (images.length === 0) {
        console.warn('No valid images found for project:', item.name);
      }

      // Extract project tags
      const projectTags =
        item.projectTags
          ?.map((tag) => {
            if (!tag?.label) {
              console.error('Project tag is missing label:', tag);
              return null;
            }
            return tag.label;
          })
          .filter((label): label is string => label !== null) || [];

      // Extract technology tags
      const technologyTag =
        item.technologyTag
          ?.map((tag) => {
            if (!tag?.label) {
              console.error('Technology tag is missing label:', tag);
              return null;
            }
            return tag.label;
          })
          .filter((label): label is string => label !== null) || [];

      return {
        name: item.name || '',
        description: item.description || '',
        images,
        projectTags,
        technologyTag,
      };
    })
    .filter((project): project is Project => project !== null && project.name !== '');
}
