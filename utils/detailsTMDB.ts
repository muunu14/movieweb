const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
  },
  cache: "force-cache" as RequestCache,
};

export async function getGenres() {
  const res = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?language=en`,
    options,
  );
  return res.json();
}

export async function searchMovies(query: string) {
  const res = await fetch(
    `${TMDB_BASE_URL}/search/movie?query=${query}&language=en-US&page=1`,
    options,
  );
  return res.json();
}

export async function discoverMovies(genreIds: string, page: number = 1) {
  const res = await fetch(
    `${TMDB_BASE_URL}/discover/movie?with_genres=${genreIds}&page=${page}&sort_by=popularity.desc`,
    options,
  );
  return res.json();
}

export async function movieApi(
  category: string,
  page: number = 1,
  genreId?: number,
) {
  const url = genreId
    ? `${TMDB_BASE_URL}/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&page=${page}`
    : `${TMDB_BASE_URL}/movie/${category}?page=${page}`;

  const res = await fetch(url, options);
  return res.json();
}
export async function getMovieDetail(movieId: number) {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}?language=en-US`,
    options,
  );
  return res.json();
}

export async function getMovieCredits(movieId: number) {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}/credits?language=en-US`,
    options,
  );
  return res.json();
}

export async function getMovieVideos(movieId: number) {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}/videos?language=en-US`,
    options,
  );
  return res.json();
}

export async function getSimilarMovies(movieId: number, page: number = 1) {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}/similar?page=${page}`,
    options,
  );
  return res.json();
}
export interface Movie {
  id: number;
  title?: string;
  original_title?: string;
  poster_path?: string;
  vote_average?: number;
  release_date?: string;
}

export const movieAPI = async (category: string): Promise<Movie[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.TMDB_API_KEY}`,
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();
  return data.results;
};
