/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    largePageDataBytes: 128 * 1000 * 1000, // 128MB
  },
  async headers() {
    return [
      {
        source: '/(.*).webm',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },
}

export default nextConfig
