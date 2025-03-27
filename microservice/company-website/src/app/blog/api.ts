import {
  BlogListResponse,
  StrapiResponse,
  BlogPost,
  TagResponse,
} from '@/common/types/blog';

// Base URL for API calls
const API_URL = process.env.NEXT_PUBLIC_STRAPI_CMS_API || 'https://cms.dayoneteams.com';

// Helper function to transform Strapi response format to our application format
function transformBlogPostResponse(post: any): BlogPost {
  // Safe access to attributes to avoid "Cannot read properties of undefined"
  const attributes = post || {};

  // Extract feature image URL from the complex object structure
  let featureImageUrl = '';
  if (attributes.featureImage) {
    if (typeof attributes.featureImage === 'string') {
      featureImageUrl = attributes.featureImage;
    } else if (attributes.featureImage.url) {
      featureImageUrl = attributes.featureImage.url;
    } else if (attributes.featureImage.formats?.medium?.url) {
      featureImageUrl = attributes.featureImage.formats.medium.url;
    } else if (attributes.featureImage.formats?.small?.url) {
      featureImageUrl = attributes.featureImage.formats.small.url;
    } else if (attributes.featureImage.formats?.thumbnail?.url) {
      featureImageUrl = attributes.featureImage.formats.thumbnail.url;
    }
  }

  return {
    id: post?.id || 0,
    title: attributes.title || 'Untitled',
    content: attributes.content || '',
    slug: attributes.slug || '',
    featureImage: featureImageUrl,
    metaDescription: attributes.metaDescription || '',
    author: attributes.author || {
      id: 0,
      name: 'Unknown Author',
      bio: '',
      avatar: '',
    },
    publishedDate: attributes.publishedDate || new Date().toISOString(),
    status: attributes.status || 'draft',
    tags: (attributes.tags || []).map((tag: any) => ({
      id: tag.id,
      name: tag.name || '',
      slug: tag.slug || '',
      description: tag.description || '',
      color: tag.color || '#cccccc',
    })),
    readingTime: attributes.readingTime || 0,
    excerpt: attributes.excerpt || '',
  };
}

export async function getBlogPosts(
  page = 1,
  pageSize = 10,
  tag?: string
): Promise<BlogListResponse> {
  try {
    // Build query parameters
    const queryParams = new URLSearchParams({
      'pagination[page]': page.toString(),
      'pagination[pageSize]': pageSize.toString(),
      populate: '*', // This populates relations like author, tags, series
      sort: 'publishedDate:desc',
    });

    // Add tag filter if provided
    if (tag) {
      queryParams.append('filters[tags][slug][$eq]', tag);
    }

    const url = `${API_URL}/api/blog-posts?${queryParams.toString()}`;

    // Make the fetch request to Strapi API
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Revalidate cache every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }

    const data = await response.json();


    // Transform the response to match our application's format
    return {
      data: data.data ? data.data.map(transformBlogPostResponse) : [],
      meta: data.meta || {
        pagination: {
          page,
          pageSize,
          pageCount: 0,
          total: 0,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return empty data in case of error
    return {
      data: [],
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}

export async function getBlogPostBySlug(slug: string): Promise<StrapiResponse<BlogPost> | null> {
  try {
    const url = `${API_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`;

    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return null;
    }

    return {
      data: transformBlogPostResponse(data.data[0]),
      meta: data.meta,
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

export async function getPopularTags(): Promise<StrapiResponse<TagResponse[]>> {
  try {
    const url = `${API_URL}/api/blog-tags?sort=posts.count:desc&pagination[limit]=10`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.status}`);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return { data: [], meta: {} };
  }
}
