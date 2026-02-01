import { getMovieCredits, Crew } from "../../../../utils/detailsTMDB";

export type MovieDetail = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
};

export async function fetchFromTMDB(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      cache: "no-store",
    }
  );
  const movieDetail = await res.json();
  return movieDetail;
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: MovieDetail = await fetchFromTMDB(id);
  const movies: Crew = await getMovieCredits(id);

  return (
    <div className="w-auto  pt-[52px] pr-[180px] pl-[180px] pb-[112.62px]  justify-center items-center">
      <div className="w-auto flex flex-col gap-8  ">
        <div className="w-auto h-[524px] flex flex-col gap-6 ">
          <div className="w-auto h-[72px] flex flex-row justify-between ">
            <div className=" h-[72px] flex flex-col gap-1 ">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <p className="font-normal text-[18px] text-[#09090B]">
                {movie.release_date} · PG · {movie.runtime} min{" "}
              </p>
            </div>
            <div className="w-[83px] h-[72px] flex flex-col">
              <p className="font-medium text-[12px] text-[#09090B]">Rating</p>
              <p>
                ⭐{" "}
                {movie.vote_average !== undefined && movie.vote_average !== null
                  ? movie.vote_average.toFixed(1)
                  : "N/A"}{" "}
                / 10
              </p>
            </div>
          </div>
          <div className="w-auto h-[428px] flex flex-row gap-8">
            <img
              className="rounded-lg w-[290px] h-[428px]"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/placeholder.png"
              }
              alt={movie.title}
            />
          </div>
        </div>
        <div className="w-auto h-[271px] flex flex-col gap-5">
          <div className="w-auto h-[20px] flex flex-row gap-3 ">
            {movie.genres.map((value) => (
              <span
                key={value.id}
                className="text-[#09090B] text-[12px] font-semibold border border-solid border-[#E4E4E7] rounded-md pt-[2px] pr-[10px] pb-[2px] pl-[10px] "
              >
                {value.name}
              </span>
            ))}
          </div>
          <div className="w-auto h-auto">
            <p className="text-[#09090B] text-[16px] font-normal">
              {movie.overview}
            </p>
          </div>
          <div className="w-auto h-[163px] flex flex-col gap-5">
            <div className="w-auto h-[41px] flex flex-col gap-1">
              <div className="w-auto h-[28px] flex flex-row  gap-13.25">
                <p className="text-[#09090B] text-[16px] font-bold">Director</p>
              </div>
              <div className="w-auto h-[1px] border border-solid border-[#E4E4E7]"></div>
            </div>
            <div className="w-auto h-[41px] flex flex-col gap-1">
              <div className="w-auto h-[28px] flex flex-row  gap-13.25">
                <p className="text-[#09090B] text-[16px] font-bold">Writers</p>
              </div>
              <div className="w-auto h-[1px] border border-solid border-[#E4E4E7]"></div>
            </div>
            <div className="w-auto h-[41px] flex flex-col gap-1">
              <div className="w-auto h-[28px] flex flex-row gap-13.25">
                <p className="text-[#09090B] text-[16px] font-bold">Stars</p>
              </div>
              <div className="w-auto h-[1px] border border-solid border-[#E4E4E7]"></div>
            </div>
          </div>
        </div>
        <div className="w-auto h-[440.38px] flex flex-col gap-8 ">
          <div className="w-auto h-[36px] flex flex-row justify-between "></div>
        </div>
      </div>
    </div>
  );
}
