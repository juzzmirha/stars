/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    basePath: '/stars',
}

export default nextConfig
  