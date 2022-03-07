import React from "react";

const Solves = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <span className="flex items-center whitespace-nowrap text-base text-textColor lg:text-lg">
        1. 1.22
      </span>
      <div className="flex w-5/12 gap-0.5 lg:gap-1 ">
        <button className="cursor-pointer text-base text-plusButton lg:text-lg">
          +2
        </button>
        <button className="cursor-pointer text-base text-textColor lg:text-lg">
          DNF
        </button>
        <button className="cursor-pointer text-base text-[#ca3a3a] lg:text-lg">
          X
        </button>
      </div>
    </div>
  );
};

export default Solves;
