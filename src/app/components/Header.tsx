"use client";
import { ChangeEvent, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, ChevronRight, Loader } from "lucide-react";
import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "../../../utils/fetcher";
interface Genre {
  id: number;
  name: string;
}
export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const { data, isLoading } = useSWR(
    searchValue
      ? `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`
      : null,
    fetcher
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
          },
        }
      );
      const data = await res.json();
      setGenres(data.genres || []);
    };
    fetchGenres();
  }, []);
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-[1440px] mx-auto px-4 h-[60px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/film.png" className="w-5 h-4" />
          <span className="text-[#4338CA] font-bold">Movie Z</span>
        </Link>
        <div className="hidden md:flex items-center gap-3 relative">
          <Button
            variant="outline"
            className="flex gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            Genre {isOpen ? <ChevronDown /> : <ChevronUp />}
          </Button>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-[420px] bg-white border rounded-xl shadow-lg z-50 p-5">
              <h3 className="text-lg font-semibold mb-1">Genres</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See lists of movies by genre
              </p>
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <Badge
                    key={g.id}
                    variant="outline"
                    className="cursor-pointer"
                  >
                    {g.name} <ChevronRight />
                  </Badge>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center gap-2 border rounded-lg px-3 h-9 w-[320px]">
            {isLoading && <Loader className="w-4 h-4 animate-spin" />}
            <img src="/search.png" className="w-4 h-4" />
            <input
              onChange={handleChange}
              className="w-full outline-none text-sm"
              placeholder="Search..."
            />
          </div>
        </div>
        <button className="w-9 h-9 border rounded-md flex items-center justify-center">
          <img src="/moon.png" className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
