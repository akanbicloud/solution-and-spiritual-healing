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
};

export default nextConfig;

