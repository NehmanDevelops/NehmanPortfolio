/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  basePath: '/NehmanPortfolio',  // Your repo name
  assetPrefix: '/NehmanPortfolio',  // Prefix for assets (no trailing slash)
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
