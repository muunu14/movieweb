import Link from "next/link";
import { movieAPI, Movie } from "@/app/components1/SectionAPI";
import { SeeMore } from "../components/SeeMore";
import { SectionWrapper } from "./SectionWrapper";

export const Popular = async () => {
  const { popularMovieResults }: { popularMovieResults: Movie[] } =
    await movieAPI("popular");

  return (
    <SectionWrapper
      title="Popular"
      action={
        <Link href="/category/popular">
          <SeeMore />
        </Link>
      }
    >
      {popularMovieResults.slice(0, 10).map((info) => (
        <Link key={info.id} href={`/detail/${info.id}`}>
          <div className="bg-[#F4F4F5] rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
              alt={info.title}
              className="h-[320px] w-[230px] rounded-lg hover:scale-105 transition"
            />
            <p className="flex items-center gap-1 pt-2 pl-2 text-sm">
              ⭐ {info.vote_average.toFixed(1)} /10
            </p>
            <p className="p-2 text-sm">{info.title}</p>
          </div>
        </Link>
      ))}
    </SectionWrapper>
  );
};
