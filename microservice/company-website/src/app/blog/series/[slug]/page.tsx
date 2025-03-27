import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPost, Series } from '@/common/types/blog';

interface SeriesPageProps {
  params: {
    slug: string;
  };
}

async function getSeriesWithPosts(slug: string): Promise<{
  data: Series & { posts: BlogPost[] };
} | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/series/${slug}?populate[posts][populate][0]=author&populate[posts][populate][1]=tags`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error('Failed to fetch series');
  }

  return response.json();
}

export async function generateMetadata({ params }: SeriesPageProps): Promise<Metadata> {
  const series = await getSeriesWithPosts(params.slug);

  if (!series) {
    return {
      title: 'Series Not Found - DayOne Teams Blog',
      description: 'The requested series could not be found.',
    };
  }

  return {
    title: `${series.data.name} - DayOne Teams Blog Series`,
    description: series.data.description,
    openGraph: {
      title: series.data.name,
      description: series.data.description,
      images: [series.data.coverImage],
      type: 'article',
    },
  };
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const series = await getSeriesWithPosts(params.slug);

  if (!series) {
    notFound();
  }

  const { data: seriesData } = series;
  const sortedPosts = [...seriesData.posts].sort((a, b) => a.series?.order! - b.series?.order!);

  return (
    <div className="series-page container py-5">
      {/* Series Header */}
      <header className="text-center mb-5">
        {seriesData.coverImage && (
          <img
            src={seriesData.coverImage}
            alt={seriesData.name}
            className="img-fluid rounded shadow mb-4"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        )}
        <h1 className="display-4 mb-3">{seriesData.name}</h1>
        <p className="lead text-muted">{seriesData.description}</p>
      </header>

      {/* Series Progress */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Series Progress</h5>
                <span className="badge bg-primary">{sortedPosts.length} articles</span>
              </div>
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '0%' }}
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="series-posts">
            {sortedPosts.map((post, index) => (
              <article key={post.id} className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-secondary me-3">Part {index + 1}</span>
                    <div className="d-flex gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag.id} className="badge" style={{ backgroundColor: tag.color }}>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="h4">
                    <a href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-muted">{post.metaDescription}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="rounded-circle me-2"
                        width="32"
                        height="32"
                      />
                      <span className="text-muted small">{post.author.name}</span>
                    </div>
                    <div className="text-muted small">{post.readingTime} min read</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
