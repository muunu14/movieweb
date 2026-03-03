export const CarouselAPI = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) throw new Error("Failed to fetch movies");

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("CarouselAPI error:", error);
    return [];
  }
};

export const seeMovieTrailer = async (movieId: number | string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) return null;

    const data = await res.json();
    const trailer = data.results.find(
      (v: any) => v.type === "Trailer" && v.site === "YouTube",
    );
    return trailer?.key || null;
  } catch (error) {
    console.error("seeMovieTrailer error:", error);
    return null;
  }
};
