import { CarouselAPI } from "./components21/CarouselAPI";
import { PlayCarousel } from "./components21/PlayCarousel";
import { MovieCard } from "./components21/MovieCard";

export default async function Home() {
  const movies = await CarouselAPI();

  return (
    <div className="flex flex-col">
      <PlayCarousel movies={movies} />
      <MovieCard />
    </div>
  );
}
