"use client";

import * as React from "react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { seeMovieTrailer } from "../../../utils/seeMovieTrailer";

type Movie = {
  id: number;
  backdrop_path: string;
  original_title: string;
  vote_average: number;
  overview: string;
};

type Results = {
  results: Movie[];
};

export const CarouselPlugin = ({ results }: { results: Results }) => {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));
  const [modal, setModal] = useState<{
    key: string;
    backdrop: string;
    title: string;
  } | null>(null);

  if (!results || !results.results) return null;

  const movies = results.results;

  const handleWatchTrailer = async (movie: Movie) => {
    const key = await seeMovieTrailer(movie.id);
    if (!key) return;

    plugin.current.stop();
    setModal({
      key,
      backdrop: movie.backdrop_path,
      title: movie.original_title,
    });
  };

  return (
    <>
      <Carousel
        className="relative w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.original_title}
                className="w-full h-[70vh] object-cover"
              />
              <div className="absolute bottom-24 text-white flex flex-col h-[264px] mb-20 ml-[140px]">
                <p className="text-[16px] font-normal">Now Playing:</p>
                <h1 className="text-[36px] font-bold w-[410px]">
                  {movie.original_title}
                </h1>
                <div className="flex text-[#FFFFFF] text-[18px] mb-4 items-center gap-1">
                  ⭐ {movie.vote_average?.toFixed(1) || "0.0"}
                  <p className="text-[#71717A] text-[16px]">/10</p>
                </div>
                <p className="text-[#FAFAFA] text-[12px] w-[450px] pb-[16px] line-clamp-4">
                  {movie.overview}
                </p>
                <button
                  onClick={() => handleWatchTrailer(movie)}
                  className="w-[145px] bg-white text-black flex items-center justify-center gap-[11.33px] font-medium rounded-md py-[5px] cursor-pointer hover:bg-gray-200 transition"
                >
                  ▶ Watch Trailer
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="ml-[100px]" />
        <CarouselNext className="mr-[100px]" />
      </Carousel>

      {modal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-[80%] max-w-4xl">
            <button
              onClick={() => setModal(null)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              X
            </button>
            <iframe
              className="w-full aspect-video rounded-lg"
              src={`https://www.youtube.com/embed/${modal.key}`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};
