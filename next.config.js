/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    esmExternals: false, // fallback to CommonJS
  },
}

module.exports = nextConfig