import React, { useEffect, useRef } from "react";
import Solves from "./Solves";

const SolvesList = ({ solves, displayTime, deleteTime, plusTime, dnfTime }) => {
  const solvesListRef = useRef();
  useEffect(() => {
    solvesListRef.current.scrollTop = -100000000000000;
  });
  return (
    <div
      className="scroll flex h-[30%] flex-col-reverse overflow-x-hidden overflow-y-scroll rounded-[20px] bg-solvesList p-2 text-lg text-textColor xl:p-4"
      ref={solvesListRef}
    >
      {solves.map((el, index) => {
        return (
          <Solves
            key={index}
            time={displayTime(el)}
            deleteTime={deleteTime}
            index={index}
            plusTime={plusTime}
            dnfTime={dnfTime}
          />
        );
      })}
    </div>
  );
};

export default SolvesList;
