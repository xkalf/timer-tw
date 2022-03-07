import React from "react";

const EmptySpace = () => {
  return (
    <div className="flex h-full w-1/5 flex-col items-center justify-end bg-mainBackground">
      <div className="flex h-1/5 w-full items-center justify-start">
        <div className="z-10 flex w-[180px] items-center rounded-[200px] bg-buttons p-1">
          <button className="my-[21px] mx-[13px] flex cursor-pointer items-center justify-center border-none bg-none text-4xl text-textColor">
            3x3
          </button>
          <button className="bg-linearSessionEnd h-[83px] w-[83px] rounded-full bg-sessionButton text-xl text-textColor ">
            New
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptySpace;
