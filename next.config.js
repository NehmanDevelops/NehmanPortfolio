/** @type {import('next').NextConfig} */
// Vercel sets VERCEL=1 in the build environment
// On Vercel, use root ''. On GitHub Pages, use '/NehmanPortfolio'
const isVercel = process.env.VERCEL === '1';
const basePath = isVercel ? '' : '/NehmanPortfolio';

const nextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  basePath: basePath,  // Dynamic based on deployment target
  assetPrefix: basePath,  // Dynamic based on deployment target
  trailingSlash: true,  // Better compatibility with static hosting
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'static.wikia.nocookie.net'],
    unoptimized: true,  // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    };
    return config;
  },
}

module.exports = nextConfig

