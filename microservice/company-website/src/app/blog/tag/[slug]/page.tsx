import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPost, Tag, TagResponse } from '@/common/types/blog';
import { getBlogPosts, getPopularTags } from '@/app/blog/api';
import { BlogPostCard } from '../../components/BlogPostCard';
import * as process from 'node:process';

interface TagPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    page?: string;
  };
}

async function getTagWithPosts(
  slug: string,
  page = 1
): Promise<{
  data: Tag & { posts: BlogPost[] };
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
} | null> {
  // Get all tags
  const { data: tags } = await getPopularTags();
  const tag = tags.find((t: TagResponse) => t.attributes.slug === slug);
  if (!tag) return null;

  // Get posts for this tag with pagination
  const posts = await getBlogPosts(page, 12, slug);

  return {
    data: {
      id: tag.id,
      name: tag.attributes.name,
      slug: tag.attributes.slug,
      description: tag.attributes.description,
      color: tag.attributes.color,
      posts: posts.data
    },
    meta: posts.meta
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tagData = await getTagWithPosts(params.slug);

  if (!tagData) {
    return {
      title: 'Tag Not Found - DayOne Teams Blog',
      description: 'The requested tag could not be found.',
    };
  }

  return {
    title: `${tagData.data.name} - DayOne Teams Blog`,
    description: tagData.data.description || `Posts tagged with ${tagData.data.name}`,
  };
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const page = Number(searchParams.page) || 1;
  const tagData = await getTagWithPosts(params.slug, page);

  if (!tagData) {
    notFound();
  }

  const { data: tag, meta } = tagData;

  return (
    <div className="tag-page container py-5">
      {/* Tag Header */}
      <header className="text-center mb-5">
        <span className="badge fs-6 mb-3 px-4 py-2" style={{ backgroundColor: tag.color }}>
          {tag.name}
        </span>
        <h1 className="display-4 mb-3">Posts Tagged with "{tag.name}"</h1>
        {tag.description && <p className="lead text-muted">{tag.description}</p>}
        <p className="text-muted">
          {meta.pagination.total} article{meta.pagination.total !== 1 ? 's' : ''}
        </p>
      </header>

      {/* Posts Grid */}
      <div className="row g-4">
        {tag.posts.map((post: BlogPost) => (
          <div key={post.id} className="col-md-4">
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {meta.pagination.pageCount > 1 && (
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            {Array.from({ length: meta.pagination.pageCount }).map((_, index) => (
              <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
                <a className="page-link" href={`/blog/tag/${params.slug}?page=${index + 1}`}>
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
