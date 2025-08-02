/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'thumbs.dreamstime.com',
      'cdn.home-designing.com',
      'www.shutterstock.com',
      'cf.bstatic.com',
      'encrypted-tbn0.gstatic.com',
      'media-cdn.tripadvisor.com',
      'plus.unsplash.com',
      'media.istockphoto.com'
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  }
}

export default nextConfig
