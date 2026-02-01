import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    TMDB_BASE_URL: process.env.TMDB_BASE_URL ?? "",
    NEXT_PUBLIC_MOVIE_KEY: process.env.NEXT_PUBLIC_MOVIE_KEY ?? "",
  },
  reactCompiler: true,
};

export default nextConfig;
