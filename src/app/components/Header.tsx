"use client";

import { ChangeEvent, useState, useEffect } from "react";
// import { Badge } from "../ui/Badge";
import { ChevronUp, ChevronDown, Search, Moon } from "lucide-react";
import Link from "next/link";
import { fetcher } from "../../../utils/fetcher";
import { useRouter } from "next/navigation";

interface Genre {
  id: number;
  name: string;
}

export const Header = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
          },
        },
      );
      const data = await res.json();
      setGenres(data.genres || []);
    };
    fetchGenres();
  }, []);

  return (
    <div className="flex w-full justify-center items-center px-20 py-9 max-sm:p-4.5 bg-white">
      <div className="flex justify-between w-7xl">
        <Link
          href="/"
          className={`flex gap-1 items-center shrink-0 cursor-pointer ${isSearchOpen ? "max-sm:hidden" : "flex"}`}
        >
          <div className="text-[#4338CA] text-base font-bold">MovieZ</div>
        </Link>

        <div
          className={`flex items-center relative gap-2 ${isSearchOpen ? "max-sm:w-full" : ""}`}
        >
          <button
            className={`bg-white text-black border border-gray-300 h-9 rounded-lg px-3 
            ${isSearchOpen ? "flex" : "max-sm:hidden"} max-sm:px-2 max-sm:w-9`}
            onClick={toggle}
          >
            {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            <div className="max-sm:hidden ml-2">Genre</div>
          </button>

          <div
            className={`flex ${isSearchOpen ? "max-sm:flex-1" : "max-sm:hidden"}`}
          >
            <input
              value={searchValue}
              onChange={handleChange}
              placeholder="Search movies..."
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div
            className={`
            absolute top-full left-0 mt-1 w-144.25 bg-white rounded-lg shadow-lg border border-gray-300 z-50 p-5
            transform origin-top-left transition-all duration-700 ease-in-out 
           ${isOpen ? "opacity-100 scale-x-100 scale-y-100" : "opacity-0 scale-x-95 scale-y-95 pointer-events-none"}
           max-sm:w-80 max-sm:fixed max-sm:top-14 max-sm:inset-x-4 
          `}
          >
            <h3 className="text-2xl font-semibold mb-1">Genres</h3>
            <p className="text-base font-normal mb-4 text-[#09090B]">
              See lists of movies by genre
            </p>
            <div className="w-full h-0 mb-4 border border-gray-300"></div>
            <div className="flex gap-3 flex-wrap">
              {/* {genres.map((genre) => (
                // <Badge
                //   key={genre.id}
                //   className="bg-white border border-gray-200 text-black font-semibold hover:bg-black hover:text-white"
                //   onClick={() => {
                //     setIsOpen(false);
                //     router.push(`/genre/${genre.id}`);
                //   }}
                // >
                //   {genre.name}
                // </Badge>
              ))} */}
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          {!isSearchOpen && (
            <div
              className="hidden max-sm:flex w-9 h-9 border border-gray-300 rounded-lg items-center justify-center cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search width={16} height={16} />
            </div>
          )}

          <div
            className={`w-9 h-9 border border-gray-300 rounded-lg flex items-center justify-center ${isSearchOpen ? "max-sm:hidden" : ""}`}
          >
            <Moon width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
