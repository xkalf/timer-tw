import React from "react";
import { getBest } from "../utils/TimerUtils";

const Stats = ({ solves, displayTime }) => {
  return (
    <div className="flex flex-col gap-2 xl:gap-5">
      <div className="flex h-[7vh] w-auto items-center justify-between rounded-[10px] bg-statBackground p-3 text-base uppercase text-textColor shadow xl:text-xl">
        <span>Best</span>
        <span>{displayTime(getBest(solves))}</span>
      </div>
      <Row>
        <AvgItem>
          <span>Ao5</span>
          <span>
            {displayTime(
              solves.length > 4 ? solves[solves.length - 1]["ao5"] : 0
            )}
          </span>
        </AvgItem>
        <AvgItemHide>
          <span>Ao50</span>
          <span>
            {displayTime(
              solves.length > 49 ? solves[solves.length - 1]["ao50"] : 0
            )}
          </span>
        </AvgItemHide>
      </Row>
      <Row>
        <AvgItem>
          <span>Ao12</span>
          <span>
            {displayTime(
              solves.length > 11 ? solves[solves.length - 1]["ao12"] : 0
            )}
          </span>
        </AvgItem>
        <AvgItemHide>
          <span>Ao100</span>
          <span>
            {displayTime(
              solves.length > 99 ? solves[solves.length - 1]["ao100"] : 0
            )}
          </span>
        </AvgItemHide>
      </Row>
    </div>
  );
};

const Row = ({ children }) => (
  <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-0">
    {children}
  </div>
);

const AvgItemHide = ({ children }) => (
  <div className="hidden h-[6vh] w-full items-center justify-between gap-2 rounded-[10px] bg-statBackground p-3 text-sm text-textColor md:flex md:w-[48%] md:text-base">
    {children}
  </div>
);

const AvgItem = ({ children }) => (
  <div className="flex h-[6vh] w-full items-center justify-between gap-2 rounded-[10px] bg-statBackground p-3 text-sm text-textColor md:w-[48%] md:text-base">
    {children}
  </div>
);

export default Stats;
