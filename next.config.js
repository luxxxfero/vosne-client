/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
