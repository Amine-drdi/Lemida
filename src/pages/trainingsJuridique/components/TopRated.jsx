import React, { useState } from "react";
import Popular from "./Popular";
import Recent from "./Recent";

const TopRated = ({ trainings }) => {
  const [toggleResults, setToggleResults] = useState("popular");
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <p className="font-medium md:text-xl text-base text-left">
          Des formations pour débuter
        </p>
        <p className="font-normal md:text-base text-sm text-left text-gray-500">
          Explorez les formations dispensés par des experts expérimentés
        </p>
      </div>

      <div className="flex flex-row h-10 border-b border-[#F0F0F0] box-border gap-1 text-base font-normal">
        <button
          className={`${
            toggleResults === "popular"
              ? "text-main_color bg-white border border-[#F0F0F0] border-b-transparent"
              : "text-[#000]/80 bg-[#FAFAFA] border border-[#F0F0F0]"
          } flex items-center justify-center px-4 py-2 rounded-t-sm h-10 text-sm font-semibold`}
          onClick={() => setToggleResults("popular")}
        >
          Les plus populaires
        </button>
        <button
          className={`${
            toggleResults === "recent"
              ? "text-main_color bg-white border border-[#F0F0F0] border-b-transparent"
              : "text-[#000]/80 bg-[#FAFAFA] border border-[#F0F0F0]"
          } flex items-center justify-center px-4 py-2 rounded-t-sm h-10 text-sm font-semibold`}
          onClick={() => setToggleResults("recent")}
        >
          Les plus récentes
        </button>
      </div>
      {toggleResults === "popular" ? (
        <Popular trainings={trainings} />
      ) : (
        <Recent trainings={trainings} />
      )}
    </div>
  );
};

export default TopRated;
