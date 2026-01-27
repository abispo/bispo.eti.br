import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optimize for static generation
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
