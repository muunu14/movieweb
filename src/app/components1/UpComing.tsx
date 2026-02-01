// import Link from "next/link";
// import { movieAPI } from "@/app/components1/SectionAPI";
// import { SeeMore } from "../components/SeeMore";
// import { MovieDetail } from "../detail/[id]/page";

// export const UpComing = async () => {
//   const { popularMovieResults }: { popularMovieResults: MovieDetail[] } =
//     await movieAPI("upcoming");
//   return (
//     <div className="w-360 pl-20 pr-20 pt-13">
//       <div className="flex justify-between pb-[36px]">
//         <p className="font-bold text-2xl">Upcoming</p>
//         <Link href="/category/upcoming">
//           <SeeMore />
//         </Link>
//       </div>
//       <div className="flex flex-wrap justify-center items-center gap-8">
//         {popularMovieResults
//           .map((info) => (
//             <Link key={info.id} href={`/detail/${info.id}`}>
//               <div className="bg-[#F4F4F5] rounded-lg " key={info.title}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
//                   alt=""
//                   className="h-85 w-[229.73px] rounded-lg hover:scale-105 transition-all duration-300"
//                 />
//                 <p className="flex items-center pt-2 pl-2 gap-[5.33px]">
//                   <img
//                     src="Star.png"
//                     alt=""
//                     className="h-4 w-4 flex justify-center items-center"
//                   />
//                   {info.vote_average.toFixed(1)}
//                   /10
//                 </p>
//                 <div className="w-[213.73px] h-[95px] pt-2 pl-2">
//                   <p>{info.title}</p>
//                 </div>
//               </div>
//             </Link>
//           ))
//           .slice(0, 10)}
//       </div>
//     </div>
//   );
// };
import Link from "next/link";
import { movieAPI, Movie } from "@/app/components1/SectionAPI";
import { SeeMore } from "../components/SeeMore";
import { SectionWrapper } from "./SectionWrapper";

export const UpComing = async () => {
  const { popularMovieResults }: { popularMovieResults: Movie[] } =
    await movieAPI("upcoming");

  return (
    <SectionWrapper
      title="Upcoming"
      action={
        <Link href="/category/upcoming">
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
