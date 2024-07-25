// next.config.mjs

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['127.0.0.1'],
  },

  remotePatterns: [
    {
      protocol: 'http',
      hostname: '127.0.0.1',
      port: '8001',
      pathname: '/media/images/**',
    },
  ],

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8001',
  },
  

  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8001';
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/:path*`,
      },
      {
        source: '/profile',
        destination: '/profile', 
      },
    ];
  },
};

export default nextConfig;
