import React from "react";
import NavBar from "./NavBar";
import ScrambleImg from "./ScrambleImg";
import SolvesList from "./SolvesList";
import Stats from "./Stats";

const SideBar = ({
  ao5,
  ao12,
  solves,
  displayTime,
  deleteTime,
  plusTime,
  dnfTime,
  addAo5,
  addAo12,
  themeToggler,
  best,
  theme,
}) => {
  return (
    <div className="flex h-full w-1/4 flex-col gap-y-6 bg-sideBar px-3 pt-7 xl:px-7">
      <NavBar />
      <Stats
        ao5={ao5}
        ao12={ao12}
        solves={solves}
        displayTime={displayTime}
        best={best}
      />
      <SolvesList
        solves={solves}
        displayTime={displayTime}
        deleteTime={deleteTime}
        plusTime={plusTime}
        dnfTime={dnfTime}
      />
      <ScrambleImg />
    </div>
  );
};

export default SideBar;
