/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/homepage-business-project',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    distDir: 'out',
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: false,
    },
  }
  
  module.exports = nextConfig