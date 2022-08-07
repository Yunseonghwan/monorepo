/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // outside packages directory.
    externalDir: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
