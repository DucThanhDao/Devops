'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TagResponse } from '@/common/types/blog';

interface BlogSearchProps {
  tags?: TagResponse[];
  className?: string;
}

export function BlogSearch({ tags, className = '' }: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams?.get('search') || '');
  const [selectedTag, setSelectedTag] = useState(searchParams?.get('tag') || '');

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle search submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedTag) params.set('tag', selectedTag);

    const queryString = params.toString();
    router.push(`/blog${queryString ? `?${queryString}` : ''}`);
  };

  // Handle tag selection
  const handleTagClick = (tagSlug: string) => {
    if (selectedTag === tagSlug) {
      setSelectedTag('');
      router.push('/blog');
    } else {
      setSelectedTag(tagSlug);
      router.push(`/blog?tag=${tagSlug}`);
    }
  };

  return (
    <div className={`blog-search ${className}`}>
      {/* Search Form */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h3 className="h5 mb-3">Search Articles</h3>
          <form onSubmit={handleSubmit} className="search-form">
            <div className="input-group">
              <input
                type="search"
                className="form-control py-2"
                placeholder="Search articles..."
                aria-label="Search articles"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ minHeight: '46px' }}
              />
              <button
                className="btn btn-primary px-4"
                type="submit"
                style={{
                  minHeight: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tags Filter */}
      {tags && tags.length > 0 && (
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h3 className="h5 mb-3">Filter by Tags</h3>
            <div className="d-flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handleTagClick(tag.attributes.slug)}
                  className={`badge border-0 text-decoration-none ${
                    selectedTag === tag.attributes.slug ? 'opacity-75' : ''
                  }`}
                  style={{
                    backgroundColor: tag.attributes.color,
                    cursor: 'pointer',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                  }}
                >
                  {tag.attributes.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
