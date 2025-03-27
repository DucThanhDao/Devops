export interface Author {
  id: number;
  name: string;
  bio: string;
  avatar: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
}

export interface TagResponse {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description?: string;
    color: string;
  };
}

export interface Series {
  id: number;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  order: number;
}

export interface SeriesResponse {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    coverImage: string;
    order: number;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  slug: string;
  featureImage: string;
  metaDescription: string;
  author: Author;
  publishedDate: string;
  status: 'draft' | 'published';
  tags: Tag[];
  series?: Series;
  readingTime: number;
  excerpt: string;
}

export interface BlogPostResponse {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    featureImage: string;
    metaDescription: string;
    author: Author;
    publishedDate: string;
    status: 'draft' | 'published';
    tags: TagResponse[];
    series?: SeriesResponse;
    readingTime: number;
    excerpt: string;
  };
}

export interface BlogListResponse {
  data: BlogPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
