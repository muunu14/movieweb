import { fetcher } from "./fetcher";

export const seeMovieTrailer = async (movieId: number) => {
  try {
    const data = await fetcher(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
    );

    const trailer = data?.results?.find(
      (v: any) => v.type === "Trailer" && v.site === "YouTube"
    );

    return trailer?.key || null;
  } catch (error) {
    console.error("Trailer fetch error:", error);
    return null;
  }
};