import React from 'react';
import { Metadata } from 'next';
import './styles/blog.scss';
import { Navbarr } from '@/landing/components/Navbarr';

export const metadata: Metadata = {
  title: {
    template: '%s - DayOne Teams Blog',
    default: 'DayOne Teams Blog',
  },
  description: 'Explore insights, tutorials, and updates from the DayOne Teams engineering team.',
  openGraph: {
    type: 'website',
    title: 'DayOne Teams Blog',
    description: 'Explore insights, tutorials, and updates from the DayOne Teams engineering team.',
    siteName: 'DayOne Teams',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-layout">
      <Navbarr isTextLight={true} />

      {/* Main Content */}
      <main className="blog-main mt-8">{children}</main>

      {/* Blog Footer */}
      <footer className="blog-footer bg-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="h5 mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-muted mb-4">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <form className="row g-3 justify-content-center">
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
