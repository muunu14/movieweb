import { UpComing } from "./UpComing";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";

export const MovieCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <UpComing />
      <Popular />
      <TopRated />
    </div>
  );
};
