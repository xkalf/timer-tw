import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-5">
      <div className="flex h-[7vh] w-auto items-center justify-between rounded-[10px] bg-statBackground p-3 text-base uppercase text-textColor shadow lg:text-lg">
        <span>Best</span>
        <span>1.22</span>
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-0">
        <div className="flex h-[6vh] w-full items-center justify-between rounded-[10px] bg-statBackground p-3 text-sm text-textColor lg:w-[48%] lg:text-base">
          <span>Ao5</span>
          <span>1.22</span>
        </div>
        <div className="hidden h-[6vh] w-full items-center justify-between rounded-[10px] bg-statBackground p-3 text-sm text-textColor lg:flex lg:w-[48%] lg:text-base">
          <span>Ao5</span>
          <span>1.22</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-0">
        <div className="flex h-[6vh] w-full items-center justify-between rounded-[10px] bg-statBackground p-3 text-sm text-textColor lg:w-[48%] lg:text-base">
          <span>Ao5</span>
          <span>1.22</span>
        </div>
        <div className="hidden h-[6vh] w-full items-center justify-between rounded-[10px] bg-statBackground p-3 text-sm text-textColor lg:flex lg:w-[48%] lg:text-base">
          <span>Ao5</span>
          <span>1.22</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
