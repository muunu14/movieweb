import {
  getSimilarMovies,
  getMovieDetail,
} from "../../../../utils/detailsTMDB";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { notFound } from "next/navigation";
interface Movie {
  id: number;
  title: string;
  original_title?: string;
  poster_path?: string;
  vote_average?: number;
  release_date?: string;
  overview?: string;
  genres?: { id: number; name: string }[];
}

interface SimilarMoviesResponse {
  results?: Movie[];
  page?: number;
  total_pages?: number;
  total_results?: number;
}
export default async function SimilarMoviesPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: { page?: string };
}) {
  const { id } = await params;
  const currentPage =
    typeof searchParams.page === "string" ? parseInt(searchParams.page, 10) : 1;

  const apiId = parseInt(id, 10);

  const movie = await getMovieDetail(apiId);
  const similar = await getSimilarMovies(apiId, currentPage);

  if (!movie) notFound();

  const similarResults = similar?.results ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8 font-sans bg-white">
      <h1 className="text-3xl text-black font-semibold mb-6">{movie.title}</h1>

      {similarResults.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">More like this</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {similarResults.map((m: Movie) => (
              <Link
                key={m.id}
                href={`/movie/${m.id}`}
                className="group bg-gray-100 rounded-xl overflow-hidden flex flex-col transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-200">
                  {m.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                      alt={m.title || m.original_title || "Movie Poster"}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-3 space-y-1">
                  <div className="flex items-center gap-1">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {m.vote_average !== undefined && (
                      <>
                        <span className="text-base font-normal">
                          {m.vote_average.toFixed(1)}
                        </span>
                        <span className="text-sm text-gray-400">/10</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-sm font-normal text-gray-900 line-clamp-2">
                    {m.title || m.original_title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
