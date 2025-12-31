/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/homepage-business-project-9441e1',
    assetPrefix: '/homepage-business-project-9441e1/',
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