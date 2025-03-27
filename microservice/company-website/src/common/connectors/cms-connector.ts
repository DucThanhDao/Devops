const CMS_API_URL = process.env.NEXT_PUBLIC_STRAPI_CMS_API;

if (!CMS_API_URL) {
  throw new Error('NEXT_PUBLIC_STRAPI_CMS_API environment variable is not defined');
}

// Remove trailing slash from CMS_API_URL if it exists
const baseUrl = CMS_API_URL.endsWith('/') ? CMS_API_URL.slice(0, -1) : CMS_API_URL;

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  error?: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
}

export const getCmsContent = async <T>(
  relativeUrl: string,
  init?: RequestInit,
  count: boolean = false
): Promise<T | null> => {
  try {
    // Ensure relativeUrl starts with /api/
    const apiPath = relativeUrl.startsWith('/api/')
      ? relativeUrl
      : `/api${relativeUrl.startsWith('/') ? '' : '/'}${relativeUrl}`;
    const urlWithLocale = `${baseUrl}${apiPath}`;

    const res = await fetch(urlWithLocale, {
      ...init,
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const response = await res.json();

    // Check for Strapi error response
    if (response.error) {
      console.error('Strapi API error:', response.error);
      throw new Error(`Strapi API error: ${response.error.message}`);
    }

    // Validate response structure
    if (!response.data) {
      console.error('Invalid response structure - missing data:', response);
      throw new Error('Invalid response structure - missing data');
    }

    return response;
  } catch (error) {
    console.error('CMS fetch error:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
    }
    return null;
  }
};
