export type Movie = {
  title: string;
  star: string;
  vote_average: number;
  poster_path: string;
  id: number;
};

export const movieAPI = async (category: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
    },
  );

  if (!response.ok) throw new Error("Failed to fetch movies");

  const popularMovies = await response.json();
  return { popularMovieResults: popularMovies.results };
};

export const MovieDetail = async (movieId: number | string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
};
