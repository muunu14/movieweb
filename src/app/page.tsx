import { CarouselPlugin } from "./components21/CarouselAPI";
import { movieApi } from "../../utils/detailsTMDB";
import { Popular } from "./components21/Popular";
import { TopRated } from "./components21/TopRated";
import { Upcoming } from "./components21/UpComing";

export default async function Home() {
  const results = await movieApi("now_playing");

  return (
    <div className="flex flex-col">
      <CarouselPlugin results={results} />
      <Popular />
      <TopRated />
      <Upcoming />
    </div>
  );
}
