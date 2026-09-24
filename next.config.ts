import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@sanity/client"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "spiritualandsolutionhealing.com.ng",
          },
        ],
        destination: "https://www.spiritualandsolutionhealing.com.ng/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

