/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/sonnik/word/:path*',
        destination: '/толкование/:path*',
        permanent: true
      },
      {
        source: '/sonnik/letter/:path*',
        destination: '/буква/:path*',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: `/${encodeURIComponent("толкование")}`,
        destination: "/interpretation"
      },
      {
        source: `/${encodeURIComponent("толкование")}/:word`,
        destination: "/interpretation/:word"
      },
      {
        source: `/${encodeURIComponent("буква")}/:letter`,
        destination: "/letter/:letter"
      },
      {
        source: `/${encodeURIComponent("поиск")}/:text`,
        destination: "/search/:text"
      }
    ]
  }
}

module.exports = nextConfig
