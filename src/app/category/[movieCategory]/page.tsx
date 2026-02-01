// import { MovieCard } from "@/app/components1/MovieCard";
// import { movieAPI, Movie } from "@/app/components1/SectionAPI";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ movieCategory: string }>;
// }) {
//   const { movieCategory } = await params;

//   // const movies: Movie[] = await movieAPI(movieCategory);
//   const { popularMovieResults }: { popularMovieResults: Movie[] } =
//     await movieAPI(movieCategory);

//   return (
//     <div className="grid grid-col-5 gap-2 justify-center m-auto pb-[76px]">
//       <div className="w-360 pl-20 pr-20 pt-13">
//         <div className="flex justify-between pb-[36px]">
//           <p className="font-bold text-2xl">{movieCategory}</p>
//         </div>
//         <div className="flex flex-wrap justify-center items-center gap-8">
//           {popularMovieResults
//             .map((info) => (
//               <div className="bg-[#F4F4F5] rounded-lg " key={info.title}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
//                   alt=""
//                   className="h-85 w-[229.73px] rounded-lg"
//                 />
//                 <p className="flex items-center pt-2 pl-2 gap-[5.33px]">
//                   <img
//                     src="/Star.png"
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
//             ))
//             .slice(0, 20)}
//         </div>
//       </div>
//     </div>
//   );
// }
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
