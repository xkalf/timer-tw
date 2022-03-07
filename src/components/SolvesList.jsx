import React from "react";
import Solves from "./Solves";

const SolvesList = () => {
  return (
    <div className="solves-list flex h-[30%] flex-col-reverse overflow-x-hidden overflow-y-scroll rounded-[20px] bg-solvesList p-4 text-lg text-textColor">
      <Solves />
      <Solves />
      <Solves />
      <Solves />
      <Solves />
      <Solves />
    </div>
  );
};

export default SolvesList;
