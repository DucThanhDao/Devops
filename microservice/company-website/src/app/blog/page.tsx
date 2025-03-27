import React from 'react';
import { Metadata } from 'next';
import { getBlogPosts, getPopularTags } from '@/app/blog/api';
import { BlogPostCard } from './components/BlogPostCard';

export const metadata: Metadata = {
  title: 'Blog - DayOne Teams',
  description: 'Explore our latest articles, insights, and updates',
  openGraph: {
    title: 'DayOne Teams Blog',
    description: 'Explore our latest articles, insights, and updates',
    type: 'website',
  },
};

interface BlogPageProps {
  searchParams: {
    page?: string;
    tag?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = Number(searchParams.page) || 1;

  try {
    // Fetch data with error handling
    const [postsResponse, tagsResponse] = await Promise.all([
      getBlogPosts(page, 12, searchParams.tag).catch((error) => {
        return {
          data: [],
          meta: {
            pagination: {
              page: 1,
              pageSize: 12,
              pageCount: 0,
              total: 0,
            },
          },
        };
      }),
      getPopularTags().catch((error) => {
        return { data: [], meta: {} };
      }),
    ]);

    // Make sure we have posts data
    const posts = postsResponse.data || [];
    const { data: tagData = [] } = tagsResponse;

    // If no posts are available, show message
    if (posts.length === 0) {
      return (
        <div className="blog-page container my-5 py-5">
          <div className="text-center">
            <h2>No blog posts available</h2>
            <p>Check back soon for new content!</p>
          </div>
        </div>
      );
    }

    return (
      <div className="blog-page container">
        {/* Featured Post */}
        {posts[0] && (
          <div className="featured-post mb-4">
            <h2 className="h4 text-primary mb-4">Latest Post</h2>
            <BlogPostCard post={posts[0]} variant="horizontal" />
          </div>
        )}

        {/* Latest Posts */}
        <section className="mb-5">
          <div className="posts-grid row g-4">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="col-md-4">
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        {postsResponse.meta?.pagination?.pageCount > 1 && (
          <nav className="mb-5" aria-label="Blog pagination">
            <ul className="pagination justify-content-center">
              {/* Previous Page */}
              {page > 1 && (
                <li className="page-item">
                  <a
                    className="page-link"
                    href={`/blog?page=${page - 1}${
                      searchParams.tag ? `&tag=${searchParams.tag}` : ''
                    }`}
                    rel="prev"
                  >
                    Previous
                  </a>
                </li>
              )}

              {/* Page Numbers */}
              {Array.from({ length: postsResponse.meta.pagination.pageCount }).map((_, index) => (
                <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
                  <a
                    className="page-link"
                    href={`/blog?page=${index + 1}${
                      searchParams.tag ? `&tag=${searchParams.tag}` : ''
                    }`}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}

              {/* Next Page */}
              {page < postsResponse.meta.pagination.pageCount && (
                <li className="page-item">
                  <a
                    className="page-link"
                    href={`/blog?page=${page + 1}${
                      searchParams.tag ? `&tag=${searchParams.tag}` : ''
                    }`}
                    rel="next"
                  >
                    Next
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}

        {/* Tags Section */}
        {tagData.length > 0 && (
          <section className="tags-section">
            <h2 className="h6 text-primary mb-4">Popular Topics</h2>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {tagData.map((tagResponse) => (
                <a
                  key={tagResponse.id}
                  href={`/blog?tag=${tagResponse.attributes.slug}`}
                  className="badge text-decoration-none"
                  style={{ backgroundColor: tagResponse.attributes.color || '#6c757d' }}
                >
                  {tagResponse.attributes.name}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error rendering blog page:', error);
    return (
      <div className="blog-page container my-5 py-5">
        <div className="text-center">
          <h2>Something went wrong</h2>
          <p>We're having trouble loading the blog. Please try again later.</p>
        </div>
      </div>
    );
  }
}
