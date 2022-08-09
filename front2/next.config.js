/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['seekvectorlogo.net','cdn.worldvectorlogo.com','www.anagog.com','sadaalmawakea.com'],
  },
}

module.exports = nextConfig
