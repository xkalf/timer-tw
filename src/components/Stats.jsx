import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col gap-2 xl:gap-5">
      <div className="flex h-[7vh] w-auto items-center justify-between rounded-[10px] bg-statBackground p-3 text-base uppercase text-textColor shadow xl:text-xl">
        <span>Best</span>
        <span>1.22</span>
      </div>
      <div className="flex flex-col justify-between gap-2 xl:flex-row xl:gap-0">
        <div className="flex h-[6vh] w-full items-center justify-between rounded-[10px] bg-statBackground p-3 text-sm text-textColor xl:w-[48%] xl:text-base">
          <span>Ao5</span>
          <span>1.22</span>
        </div>
        <div className="hidden h-[6vh] w-full items-center justify-between rounded-[10px] bg-statBackground p-3 text-sm text-textColor xl:flex xl:w-[48%] xl:text-base">
          <span>Ao5</span>
          <span>1.22</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 xl:flex-row xl:gap-0">
        <div className="flex h-[6vh] w-full items-center justify-between rounded-[10px] bg-statBackground p-3 text-sm text-textColor xl:w-[48%] xl:text-base">
          <span>Ao5</span>
          <span>1.22</span>
        </div>
        <div className="hidden h-[6vh] w-full items-center justify-between rounded-[10px] bg-statBackground p-3 text-sm text-textColor xl:flex xl:w-[48%] xl:text-base">
          <span>Ao5</span>
          <span>1.22</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
