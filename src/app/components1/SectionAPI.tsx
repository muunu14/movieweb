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
    }
  );

  const popularMovies = await response.json();

  const popularMovieResults = popularMovies.results;

  return { popularMovieResults };
};

export const MovieDetail = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3//movie/${movieId}?language=en-US`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
    }
  );

  const movieDetailss = await res.json();

  const movieDetailResults = movieDetailss.results;

  return { movieDetailResults };
};
