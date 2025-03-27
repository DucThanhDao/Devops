import React from 'react';
import { SidebarWrapper } from '../components/SidebarWrapper';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '../api';
import { AuthorBio } from '../components/AuthorBio';
import { ShareButtons } from '../components/ShareButtons';
import dynamic from 'next/dynamic';

const CodeBlock = dynamic(
  () => import('../components/CodeBlock'),
  {
    ssr: false,
    loading: () => (
      <div className="code-block-wrapper">
        <div className="relative">
          <pre style={{ background: '#282a36', padding: '1rem', borderRadius: '0.5rem' }}>
            <code>Loading code block...</code>
          </pre>
        </div>
      </div>
    )
  }
);

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function generateTableOfContents(content: string): TocItem[] {
  const headings = content.match(/^#{1,3}\s+(.+)$/gm) || [];
  return headings.map((heading) => {
    const level = (heading.match(/^#+/) || [''])[0].length;
    const text = heading.replace(/^#+\s+/, '');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return { id, text, level };
  });
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - DayOne Teams Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  const { data: postData } = post;
  

  return {
    title: postData.title,
    description: postData.metaDescription,
    openGraph: {
      title: postData.title,
      description: postData.metaDescription,
      images: postData.featureImage ? [{ url: postData.featureImage }] : [],
      type: 'article',
      authors: [postData.author.name],
      publishedTime: postData.publishedDate,
      modifiedTime: postData.publishedDate,
      tags: postData.tags.map((tag) => tag.name),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { data: postData } = post;
  const toc = generateTableOfContents(postData.content);

  return (
    <article className="blog-post">
      {/* Hero Section */}
      <header className="blog-post-hero mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              {/* Tags */}
              <div className="d-flex gap-2 justify-content-center mb-3">
                {postData.tags.map((tag) => (
                  <a
                    key={tag.id}
                    href={`/blog/tag/${tag.slug}`}
                    className="badge text-decoration-none"
                    style={{ backgroundColor: tag.color }}
                  >
                    {tag.name}
                  </a>
                ))}
              </div>

              {/* Title */}
              <h1 className="display-3 mb-3 bold">{postData.title}</h1>
            </div>
          </div>

          {/* Feature Image */}
          {postData.featureImage && (
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <img
                  src={postData.featureImage}
                  alt={postData.title}
                  className="img-fluid rounded shadow-lg"
                  style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mb-6">
        <div className="row">
          {/* Article Content */}
          <div className="col-lg-9">
            <div className="pe-lg-4">
              <article className="blog-content">
                {/* Article Content */}
                <div className="markdown-content">
                  <ReactMarkdown
                      className="markdown-content"
                      components={{
                        // Headings with auto-generated IDs
                    h1: ({ children, ...props }) => {
                      const id = children?.[0]?.toString()?.toLowerCase()?.replace(/[^a-z0-9]+/g, '-');
                      return <h1 id={id} {...props}>{children}</h1>;
                    },
                    h2: ({ children, ...props }) => {
                      const id = children?.[0]?.toString()?.toLowerCase()?.replace(/[^a-z0-9]+/g, '-');
                      return <h2 id={id} {...props}>{children}</h2>;
                    },
                    h3: ({ children, ...props }) => {
                      const id = children?.[0]?.toString()?.toLowerCase()?.replace(/[^a-z0-9]+/g, '-');
                      return <h3 id={id} {...props}>{children}</h3>;
                    },
                    // Code blocks with syntax highlighting
                    code: ({ node, inline, className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '');
                      const content = String(children).replace(/\n$/, '');
                      
                      if (!inline && match) {
                        return (
                          <CodeBlock language={match[1]}>
                            {content}
                          </CodeBlock>
                        );
                      }
                      
                      return (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    // Ensure paragraphs maintain whitespace
                    p: ({ children }) => (
                      <p style={{ whiteSpace: 'pre-line' }}>
                        {children}
                      </p>
                    )
                  }}
                >
                  {postData.content || ''}
                </ReactMarkdown>

                </div>
              </article>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-3">
            <SidebarWrapper>
              <aside className="sidebar" id="blogSidebar">
                {/* Table of Contents */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Table of Contents</h5>
                    <div className="toc">
                      {toc.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          className="d-block text-decoration-none mb-2"
                          style={{
                            paddingLeft: `${(item.level - 1) * 1}rem`,
                            color: 'inherit',
                          }}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                

                
                {/* Social Share Buttons */}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Share this post</h5>
                    <ShareButtons title={postData.title} />
                  </div>
                </div>
              </aside>
            </SidebarWrapper>
          </div>
        </div>
      </div>
    </article>
  );
}
