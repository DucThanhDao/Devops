# Blog Feature Documentation

This document outlines the blog feature implementation for the DayOne Teams website, including setup instructions and component documentation.

## Structure

```
blog/
├── components/           # Reusable blog components
│   ├── AuthorBio.tsx    # Author information display
│   ├── BlogPostCard.tsx # Card component for blog posts
│   ├── BlogSearch.tsx   # Search and filtering component
│   └── SeriesNavigation.tsx # Navigation for post series
├── styles/
│   └── blog.scss        # Blog-specific styles
├── [slug]/              # Individual blog post pages
├── series/[slug]/       # Series pages
├── tag/[slug]/          # Tag-filtered pages
├── api.ts              # API integration with Strapi
├── layout.tsx          # Blog layout wrapper
└── page.tsx            # Main blog listing page
```

## Setup Instructions

### 1. Strapi Backend Setup

1. Create the following content types in Strapi:

#### Blog Post

```typescript
{
  title: string;          // Text
  content: string;        // Rich Text
  slug: string;          // UID (based on title)
  featureImage: media;   // Single Media
  metaDescription: string; // Text
  author: relation;      // Relation to User
  publishedDate: date;   // Date
  status: enum;          // ['draft', 'published']
  tags: relation;        // Relation to Tags (many)
  series: relation;      // Relation to Series
  readingTime: number;   // Number
  excerpt: string;       // Text
}
```

#### Tag

```typescript
{
  name: string; // Text
  slug: string; // UID (based on name)
  description: string; // Text (optional)
  color: string; // Text (color code)
}
```

#### Series

```typescript
{
  name: string; // Text
  slug: string; // UID (based on name)
  description: string; // Text
  coverImage: media; // Single Media
  order: number; // Number
}
```

2. Configure permissions in Strapi:
   - Allow public read access to all blog-related endpoints
   - Restrict write access to authenticated users

### 2. Environment Setup

Add the following to your `.env` file:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://your-strapi-url/api
NEXT_PUBLIC_STRAPI_MEDIA_URL=http://your-strapi-url
```

### 3. Component Usage

#### BlogPostCard

```tsx
import { BlogPostCard } from './components/BlogPostCard';

// Usage
<BlogPostCard
  post={post}
  variant="horizontal" // or "vertical"
/>;
```

#### BlogSearch

```tsx
import { BlogSearch } from './components/BlogSearch';

// Usage
<BlogSearch tags={tags} className="custom-class" />;
```

#### AuthorBio

```tsx
import { AuthorBio } from './components/AuthorBio';

// Usage
<AuthorBio author={post.author} className="custom-class" />;
```

#### SeriesNavigation

```tsx
import { SeriesNavigation } from './components/SeriesNavigation';

// Usage
<SeriesNavigation series={post.series} posts={seriesPosts} className="custom-class" />;
```

## Features

1. **Content Management**

   - Blog posts with rich text content
   - Tags and categories
   - Series organization
   - Author profiles

2. **User Interface**

   - Responsive design
   - Featured posts
   - Tag filtering
   - Search functionality
   - Series navigation
   - Related posts

3. **SEO**

   - Meta tags
   - OpenGraph data
   - Structured data
   - SEO-friendly URLs

4. **Performance**
   - Static page generation
   - Image optimization
   - Lazy loading
   - Incremental Static Regeneration

## API Integration

The blog feature integrates with Strapi using the following endpoints:

- `GET /api/posts` - List all posts
- `GET /api/posts/:slug` - Get single post
- `GET /api/tags` - List all tags
- `GET /api/tags/:slug/posts` - Get posts by tag
- `GET /api/series` - List all series
- `GET /api/series/:slug` - Get series details with posts

## Styling

Blog styles are managed through `blog.scss` and include:

- Responsive layouts
- Typography enhancements
- Card designs
- Dark mode support
- Accessibility features

## Future Enhancements

1. Comment system integration
2. Newsletter subscription
3. Social sharing
4. Reading progress tracking
5. Bookmark functionality
6. Author dashboard

## Contributing

When contributing to the blog feature:

1. Follow the existing component structure
2. Maintain TypeScript types
3. Add appropriate tests
4. Update documentation
5. Follow the established styling patterns

## Troubleshooting

Common issues and solutions:

1. **Images not loading**

   - Check Strapi media URL configuration
   - Verify image paths in content

2. **API errors**

   - Verify Strapi is running
   - Check environment variables
   - Confirm API endpoint permissions

3. **Type errors**
   - Ensure types are properly imported
   - Update types when modifying content structure

## Backend Integration

This blog module is now connected to a Strapi CMS backend. The integration is handled through the API functions in `api.ts`, which make HTTP requests to the Strapi endpoints.

### Configuration

The connection to the Strapi backend is configured through the environment variable `NEXT_PUBLIC_API_URL` in the `.env.local` file. By default, it points to `http://localhost:1337`, which is the default Strapi development server address.

### API Functions

- `getBlogPosts`: Fetches a paginated list of blog posts
- `getBlogPostBySlug`: Fetches a single blog post by its slug
- `getPopularTags`: Fetches popular tags
- `getSeries`: Fetches available series
- `getSeriesWithPosts`: Fetches a series and all posts within it

### Data Structure

The data structure follows the Strapi API response format, which is transformed to match our application's data model. The transformation happens in the `transformBlogPostResponse` function in `api.ts`.

### Caching Strategy

The API calls use Next.js's `revalidate` feature for caching:

- Blog posts are revalidated every 60 seconds
- Tags and series are revalidated every hour (3600 seconds)

This ensures that the content is relatively fresh while reducing the load on the backend.

bỏ avatar
Feature post
card hinh vuong
sticky left bar
thong tin phai nho hon description
