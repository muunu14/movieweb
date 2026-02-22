import React from "react";
export const SeeMore = () => {
  return (
    <button className="w-[120px] h-[36px] rounded-md pt-2 pr-4 pb-2 pl-4 bg-[#FFFFFF] flex gap-2 items-center justify-center ">
      <div className="w-[64px] h-[20px] text-normal text-[14px] text-[#09090B]">
        See more
      </div>
      <img className="w-[12px] h-[12px]" src="arrow-right.png" alt="" />
    </button>
  );
};
