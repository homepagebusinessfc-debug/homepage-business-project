/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '',
    assetPrefix: '',
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
    // 静的ページ生成
    experimental: {
      appDir: true,
    },
  }
  
  module.exports = nextConfig