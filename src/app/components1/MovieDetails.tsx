import Link from "next/link";
import { MovieDetail, Movie } from "./SectionAPI";

export const MovieDetails = async () => {
  const {
    movieDetailResults,
  }: {
    movieDetailResults: Movie [];
  } = await MovieDetail ();
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="h-[524px] flex flex-col gap-6">
            
        </div>
    </div>
  )
};
