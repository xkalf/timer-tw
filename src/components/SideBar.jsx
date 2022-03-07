import React from "react";
import NavBar from "./NavBar";
import ScrambleImg from "./ScrambleImg";
import SolvesList from "./SolvesList";
import Stats from "./Stats";

const SideBar = () => {
  return (
    <div className="flex h-full w-1/5 flex-col gap-y-6 bg-sideBar px-3 pt-7 xl:px-7">
      <NavBar />
      <Stats />
      <SolvesList />
      <ScrambleImg />
    </div>
  );
};

export default SideBar;
