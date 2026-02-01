// "use client";

// import { ChangeEvent, useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";
// import { useEffect } from "react";
// import { fetcher } from "../../../utils/fetcher";
// import useSWR from "swr";
// import { Loader } from "lucide-react";
// import Link from "next/link";

// interface Genre {
//   id: number;
//   name: string;
// }

// export const Header = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const { data, isLoading, error } = useSWR(
//     `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
//     fetcher
//   );

//   console.log(data);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(event.target.value);
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const toggle = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       {
//         const genre = await fetch(
//           "https://api.themoviedb.org/3/genre/movie/list?language=en",
//           {
//             headers: {
//               Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
//             },
//           }
//         );

//         const data = await genre.json();
//         setGenres(data.genres || []);
//       }
//     };
//     fetchGenres();
//   }, []);

//   return (
//     <div className="w-full h-[59px] flex flex-row justify-between pr-4 pl-4 bg-[#FFFFFF] items-center">
//       <div className="w-full h-[36px] flex flex-row justify-between bg-[#FFFFFF] items-center">
//         <Link href="/">
//           <div className="w-[92px] h-[20px] flex flex-row gap-2 items-center ">
//             <img className="w-[20px] h-[15px]" src="/film.png" alt="" />
//             <div className="text-[#4338CA] text-base font-bold">Movie Z</div>
//           </div>
//         </Link>
//         <div className="w-[488px] h-[36px] flex flex-row gap-3 relative justify-center items-center">
//           <Button
//             className="bg-white text-black border border-gray-300 w-24.15 h-9"
//             onClick={toggle}
//           >
//             {isOpen ? <ChevronDown /> : <ChevronUp />}
//             Genre
//             {isOpen && (
//               <div className="absolute top-full mt-1 left-0 w-144.25 h-87.5 bg-white rounded-lg shadow-lg border border-gray-300 z-50 flex flex-col p-5 gap-4">
//                 <div className="w-53.25 h-15 flex flex-col">
//                   <h3 className="flex text-[24px] font-semibold">Genres</h3>
//                   <div className="text-[16px] font-normal flex text-foreground">
//                     See lists of movies by genre
//                   </div>
//                 </div>
//                 <div className="border w-134.25 h-px border-gray-200"></div>
//                 <div className="w-134.25 flex gap-4 flex-wrap">
//                   {genres.map((num) => (
//                     <Badge
//                       key={num.id}
//                       className="bg-white border border-gray-300 text-black"
//                     >
//                       {num.name} <ChevronRight />
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </Button>
//           {/* <button className="w-[97px] h-[36px] border rounded-sm pt-2 pr-4 pb-2 pl-4 flex gap-2 bg-[#FFFFFF] border-[#E4E4E7] items-center">
//             <img className="w-[16px] h-[16px]" src="chevron-down.png" alt="" />
//             <div className="w-[41px] h-[20px] text-[14px] text-normal text-[#18181B]">
//               Genre
//             </div>
//           </button> */}
//           <div className="w-[379px] h-[36px] border flex pr-3 pl-3 gap-[10px] border-[#E4E4E7] bg-[#FFFFFF] rounded-lg items-center ">
//             {isLoading && <Loader />}
//             <img className="w-[16px] h-[16px]" src="/search.png" alt="" />
//             <input
//               onChange={handleChange}
//               type="text"
//               className="w-full h-full pt-2 pb-2 flex gap-[10px] text-normal text-[14px] text-[#71717A] "
//               placeholder="Search.."
//             />
//             {/* <div>
//               {isLoading && <Loader />}
//               <input onChange={handleChange} />
//             </div> */}
//           </div>
//         </div>
//         <button className="w-[36px] h-[36px] flex justify-center items-center border rounded-md border-[#E4E4E7] bg-[#FFFFFF] ">
//           <img className="w-[16px] h-[16px]" src="/moon.png" alt="" />
//         </button>
//       </div>
//     </div>
//   );
// };
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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/film.png" className="w-5 h-4" />
          <span className="text-[#4338CA] font-bold">Movie Z</span>
        </Link>

        {/* Center */}
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

        {/* Theme */}
        <button className="w-9 h-9 border rounded-md flex items-center justify-center">
          <img src="/moon.png" className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
