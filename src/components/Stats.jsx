import React from "react";

const Stats = ({ solves, displayTime, ao5, ao12, best }) => {
  return (
    <div className="flex flex-col gap-2 xl:gap-5">
      <div className="flex h-[7vh] w-auto items-center justify-between rounded-[10px] bg-statBackground p-3 text-base uppercase text-textColor shadow xl:text-xl">
        <span>Best</span>
        <span>{best}</span>
      </div>
      <div className="flex flex-col justify-between gap-2 xl:flex-row xl:gap-0">
        <div className="flex h-[6vh] w-full items-center justify-between gap-2 rounded-[10px] bg-statBackground p-3 text-sm text-textColor xl:w-[48%] xl:text-base">
          <span>Ao5</span>
          <span>
            {ao5.length === 0
              ? displayTime(0)
              : displayTime(ao5[ao5.length - 1])}
          </span>
        </div>
        <div className="hidden h-[6vh] w-full items-center justify-between gap-2 rounded-[10px] bg-statBackground p-3 text-sm text-textColor xl:flex xl:w-[48%] xl:text-base">
          <span>Ao50</span>
          <span>
            {ao5.length === 0 ? displayTime(0) : displayTime(Math.min(...ao5))}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 xl:flex-row xl:gap-0">
        <div className="flex h-[6vh] w-full items-center justify-between gap-2 rounded-[10px] bg-statBackground p-3 text-sm text-textColor xl:w-[48%] xl:text-base">
          <span>Ao12</span>
          <span>
            {ao12.length === 0
              ? displayTime(0)
              : displayTime(ao12[ao12.length - 1])}
          </span>
        </div>
        <div className="hidden h-[6vh] w-full items-center justify-between gap-2 rounded-[10px] bg-statBackground p-3 text-sm text-textColor xl:flex xl:w-[48%] xl:text-base">
          <span>Ao100</span>
          <span>
            {ao12.length === 0
              ? displayTime(0)
              : displayTime(Math.min(...ao12))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
