import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;