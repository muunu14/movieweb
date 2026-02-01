"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { seeMovieTrailer } from "./CarouselAPI";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imageBase = "https://image.tmdb.org/t/p/original";

type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
};

export function PlayCarousel({ movies }: { movies: Movie[] }) {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const [trailerKey, setTrailerKey] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleTrailer = async (movieId: number) => {
    const key = await seeMovieTrailer(movieId);
    setTrailerKey(key);
    setOpen(true);
  };

  return (
    <>
      <Carousel
        plugins={[autoplay.current]}
        className="w-full h-[600px]"
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <img
                src={`${imageBase}${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-[600px]"
              />
              <div className="absolute bottom-24 text-white flex flex-col h-[264px] mb-20 ml-[140px]">
                <p className="text-[#FFFFFF] text-[16px] font-normal">
                  Now Playing:
                </p>

                <h1 className="text-[36px] font-bold w-[410px]">
                  {movie.title}
                </h1>

                <div className="flex text-{#FFFFF} text-[18px] mb-4 items-center">
                  ⭐ {movie.vote_average.toFixed(1)}
                  <p className="text-[#71717A] text-[16px]"> /10</p>
                </div>

                <p className="text-[#FAFAFA] text-[12px] w-[450px] pb-[16px]">
                  {movie.overview}
                </p>

                <button
                  onClick={() => handleTrailer(movie.id)}
                  className="w-[145px] bg-white text-black flex items-center justify-center gap-[11.33px] font-medium rounded-md py-[5px] cursor-pointer"
                >
                  <img
                    className="w-[9.33px] h-[12px]"
                    src="/Vector (3).png"
                    alt=""
                  />
                  <h6 className="text-[14px] font-normal">Watch Trailer</h6>
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-[100px]" />
        <CarouselNext className="mr-[100px]" />
      </Carousel>

      {open && trailerKey && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className=" relative w-[80%] max-w-4xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              X
            </button>
            <iframe
              className="w-full aspect-video rounded-lg"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
