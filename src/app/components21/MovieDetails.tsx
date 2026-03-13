// import { movieApi } from "../../../utils/detailsTMDB";

// interface Params {
//   params: { id: string };
// }

// export default async function DetailPage({ params }: Params) {
//   const movie = await MovieDetail(params.id);

//   if (!movie) return <div>Movie not found</div>;

//   return (
//     <div className="flex flex-col justify-center items-center p-10">
//       <h1 className="text-3xl font-bold">{movie.title}</h1>
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//         className="w-80 rounded-lg"
//       />
//       <p className="text-gray-700 mt-4">{movie.overview}</p>
//       <p className="text-lg font-semibold mt-2">
//         Rating: {movie.vote_average}/10
//       </p>
//     </div>
//   );
// }
