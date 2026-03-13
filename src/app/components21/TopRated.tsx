import Link from "next/link";
import { movieApi } from "../../../utils/detailsTMDB";

import { SeeMore } from "../components/SeeMore";

type Movie = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
};

export const TopRated = async () => {
  const data = await movieApi("top_rated");
  const popularMovieResults: Movie[] = data?.results ?? [];

  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 py-10">
      <div className="flex justify-between items-center pb-8">
        <p className="font-bold text-xl sm:text-2xl">Top Rated</p>

        <Link href="/category/top_rated">
          <SeeMore />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-10">
        {popularMovieResults.slice(0, 10).map((info) => (
          <Link key={info.id} href={`/detail/${info.id}`}>
            <div className="bg-[#F4F4F5] rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
                alt={info.title}
                className="w-full h-[320px] sm:h-[340px] md:h-[360px] object-cover hover:scale-105 transition-transform duration-300"
              />

              <div className="p-3">
                <p className="flex items-center gap-1 text-sm">
                  <img src="/Star.png" alt="" className="h-4 w-4" />
                  {info.vote_average.toFixed(1)}
                  <span className="text-gray-500 text-xs">/10</span>
                </p>

                <p className="pt-2 text-sm sm:text-base font-medium line-clamp-2">
                  {info.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
