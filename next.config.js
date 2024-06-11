/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: `https://hutaoao.cn:7001/:path*`, // 替换为你的后端服务URL
      },
    ];
  },
};

module.exports = nextConfig;
