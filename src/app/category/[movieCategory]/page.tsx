import { movieAPI, Movie } from "@/app/components1/SectionAPI";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ movieCategory: string }>;
}) {
  const { movieCategory } = await params;
  const { popularMovieResults }: { popularMovieResults: Movie[] } =
    await movieAPI(movieCategory);
  return (
    <section className="max-w-[1440px] mx-auto px-20 pb-20">
      <h1 className="text-2xl font-bold mb-10 capitalize">
        {movieCategory.replace("_", " ")}
      </h1>
      <div className="grid grid-cols-5 gap-8">
        {popularMovieResults.slice(0, 20).map((movie) => (
          <Link key={movie.id} href={`/detail/${movie.id}`}>
            <div className="bg-[#F4F4F5] rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-full aspect-[2/3] object-cover rounded-lg
                           hover:scale-105 transition"
              />
              <div className="p-2">
                <p className="flex items-center gap-1 text-sm">
                  ⭐ {movie.vote_average.toFixed(1)} /10
                </p>
                <p className="text-sm font-medium mt-1 line-clamp-2">
                  {movie.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
