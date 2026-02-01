const BASE_URL = "https://api.themoviedb.org/3";

async function getMovie(id: string) {
  const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
    },
  });

  return res.json();
}

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovie(params.id);

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <p className="mb-4">{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
      <p>📅 {movie.release_date}</p>
    </div>
  );
}
