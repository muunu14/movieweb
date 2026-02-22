import { fetchExternalImage } from "next/dist/server/image-optimizer";

export async function CarouselAPI() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();
  return data.results;
}
export async function seeMovieTrailer(movieId: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
      },
      cache: "no-store",
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  console.log(data.results);
  const trailer = data.results?.find(
    (item: any) => item.type == "Trailer" && item.site == "YouTube"
  );
  console.log(trailer);
  return trailer?.key ?? null;
}
