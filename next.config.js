/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'static.wikia.nocookie.net'],
    unoptimized: false,
  },
}

module.exports = nextConfig

