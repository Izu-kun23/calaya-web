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
  webpack: (config, { isServer, webpack }) => {
    // Ignore old src/pages directory from build (we're using app directory now)
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/src\/pages\/.*$/,
      })
    );
    
    return config;
  },
}

module.exports = nextConfig

