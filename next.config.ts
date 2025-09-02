import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

// const API_BASE_URL = process.env.API_BASE_URL;
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/:locale/dashboard",
        permanent: false,
      },
    ];
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${API_BASE_URL}/api/:path*`,
  //     },
  //   ];
  // },
  allowedDevOrigins: ["http://localhost:3000", "*localdev:3000"],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
