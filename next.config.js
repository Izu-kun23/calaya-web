/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: false,
  },
  
  // Output configuration (for static export if needed)
  // output: 'standalone',
  
  // Webpack configuration for additional optimizations
  webpack: (config, { isServer }) => {
    // Add any custom webpack configuration here if needed
    return config;
  },
}

module.exports = nextConfig

