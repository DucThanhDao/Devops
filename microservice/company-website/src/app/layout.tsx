import { Footer } from '@/common/components/Footer';
import '@/app/styles.scss';
import GoogleAnalytic from '@/common/components/GoogleAnalytic';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { GoogleTagManager } from '@next/third-parties/google';
import * as process from 'node:process'
import { getMessages } from 'next-intl/server';
import React from 'react';
import {getLocale} from 'next-intl/server';


export default async function RootLayout({
  children,
  // params: { locale },
}: {
  children: React.ReactNode;
  // params: { locale: string };
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/x-icon" href="/assets/img/icon/favicon.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preload"
          href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
          as="style"
        />
        <link href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" rel="stylesheet" />
        <GoogleTagManager gtmId="GTM-KXGCCRPQ" />
      </head>
      <body suppressHydrationWarning={true}>
        {/*<NextIntlClientProvider messages={messages}>*/}
        {/*  {children}*/}
        {/*  <Footer />*/}
        {/*</NextIntlClientProvider>*/}
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer/>
        </NextIntlClientProvider>
        <GoogleAnalytic />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3NCHQ5ZLT9"
          defer
        ></Script>
        <Script
          strategy="afterInteractive"
          defer
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3NCHQ5ZLT9');gtag('config', 'AW-16639680583');`,
          }}
        />
      </body>
    </html>
  );
}
