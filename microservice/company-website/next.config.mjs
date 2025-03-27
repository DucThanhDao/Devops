/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import path from 'path';
import { fileURLToPath } from 'url';
import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfigFn = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      serverActions: true,
    },
    output: "standalone",
    assetPrefix: isDev ? undefined : process.env.NEXT_PUBLIC_CDN_URL,
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
  };
};

export default (phase) => withNextIntl(nextConfigFn(phase));
