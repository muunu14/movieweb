import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TMDB_BASE_URL: process.env.TMDB_BASE_URL ?? "",
    NEXT_PUBLIC_MOVIE_KEY: process.env.NEXT_PUBLIC_MOVIE_KEY ?? "",
  },

  reactCompiler: true,

  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
