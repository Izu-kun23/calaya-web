/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Keep Turbopack and server output scoped to this app when a parent
  // directory also contains a lockfile. This prevents stale cross-root
  // development artifacts from serving mismatched server/client markup.
  outputFileTracingRoot: __dirname,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
