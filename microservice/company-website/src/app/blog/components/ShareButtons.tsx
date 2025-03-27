'use client';

import React from 'react';
import Script from 'next/script';

interface ShareButtonsProps {
  title: string;
  className?: string;
}

declare global {
  interface Window {
    twttr?: any;
  }
}

export function ShareButtons({ title, className = '' }: ShareButtonsProps) {
  return (
    <>
      <Script id="twitter-widgets" strategy="lazyOnload">
        {`
          window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };
            return t;
          }(document, "script", "twitter-wjs"));
        `}
      </Script>
      <Script 
        src="https://platform.linkedin.com/in.js" 
        type="text/javascript"
        strategy="lazyOnload"
      >
        lang: en_US
      </Script>

      <div className={`share-buttons ${className}`}>
        <div className="d-flex gap-2">
          <a 
            className="twitter-share-button"
            href="https://twitter.com/intent/tweet"
            data-size="large"
            data-text={title}
            data-url={typeof window !== 'undefined' ? window.location.href : ''}
          >
            Tweet
          </a>
          <script
            type="IN/Share"
            data-url={typeof window !== 'undefined' ? window.location.href : ''}
            className="linkedin-share-button"
          />
        </div>
      </div>
    </>
  );
}
