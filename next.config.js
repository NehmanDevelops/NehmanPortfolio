/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  basePath: isProd ? '/NehmanPortfolio' : '',  // Only apply basePath in production
  assetPrefix: isProd ? '/NehmanPortfolio' : '',  // Only apply assetPrefix in production
  trailingSlash: true,  // Better compatibility with static hosting
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
