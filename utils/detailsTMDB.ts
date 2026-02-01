export type Crew = {
  crew: {
    id: number;
    name: string;
    job: string;
    Director: string;
  }[];
};

export async function getMovieCredits(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3//movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      cache: "no-store",
    }
  );
  return res.json();
}
