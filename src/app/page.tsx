import { MovieCard } from "./components1/MovieCard";
import { PlayCarousel } from "./components1/PlayCarousel";
import { CarouselAPI } from "./components1/CarouselAPI";

export default async function Home() {
  const movies = await CarouselAPI();
  return (
    <div className="flex flex-col ">
      <PlayCarousel movies={movies} />
      <MovieCard />
    </div>
  );
}
