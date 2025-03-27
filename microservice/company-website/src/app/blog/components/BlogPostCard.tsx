import React from 'react';
import { BlogPost } from '@/common/types/blog';
import { getPublicUrl } from '@/common/util/util';

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'horizontal' | 'vertical';
}

export function BlogPostCard({ post, variant = 'vertical' }: BlogPostCardProps) {
  const isHorizontal = variant === 'horizontal';

  return (
    <article className={`card h-100 border-0 shadow-sm ${isHorizontal ? 'flex-row' : ''}`}>
      {post.featureImage && (
        <div
          className={isHorizontal ? 'col-md-4' : ''}
          style={isHorizontal ? undefined : { height: '200px', overflow: 'hidden' }}
        >
          <img
            src={post.featureImage || getPublicUrl("/assets/img/blog-placeholder.jpg")}
            alt={post.title}
            className={`${isHorizontal ? 'img-fluid h-100 object-fit-cover' : 'card-img-top'}`}
            style={
              !isHorizontal ? { height: '100%', objectFit: 'cover', width: '100%' } : undefined
            }
          />
        </div>
      )}
      <div className={`${isHorizontal ? 'col-md-8' : ''}`}>
        <div className="card-body">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="d-flex gap-2 mb-2">
              {post.tags.map((tag) => (
                <a
                  key={tag.id}
                  href={`/blog/tag/${tag.slug}`}
                  className="badge text-decoration-none"
                  style={{ backgroundColor: tag.color || '#6c757d' }}
                >
                  {tag.name}
                </a>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className={`card-title ${isHorizontal ? 'h4' : 'h5'}`}>
            <a href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
              {post.title}
            </a>
          </h2>

          {/* Excerpt */}
          <p className="card-text text-muted">{post.excerpt || post.metaDescription}</p>

          {/* Author and Meta */}
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              {post.author && (
                <div className="d-flex align-items-center">
                  {post.author.avatar && (
                    <img
                      src={post.author.avatar || getPublicUrl('/assets/img/avatar-placeholder.jpg')}
                      alt={post.author.name || 'Author'}
                      className="rounded-circle me-2"
                      width={isHorizontal ? '32' : '24'}
                      height={isHorizontal ? '32' : '24'}
                    />
                  )}
                  <span className="text-muted small">{post.author.name || 'Anonymous'}</span>
                </div>
              )}
              <div className="text-muted small d-flex gap-2">
                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                <span>·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
