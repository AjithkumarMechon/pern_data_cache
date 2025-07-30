import type { NextConfig } from "next";
const API_BASE_URL = process.env.API_BASE_URL;
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/serverside",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_BASE_URL}/api/:path*`,
      },
    ];
  },
  allowedDevOrigins: ["http://localhost:3000", "*localdev:3000"],
};

export default nextConfig;
