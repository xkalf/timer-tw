import React from "react";
import whiteLogo from "../assets/Timer-white.png";
import blackLogo from "../assets/Timer-black.png";

const Main = ({ theme, displaySec, state, scramble, currentType }) => {
  let timerColor =
    state === "ready"
      ? "text-green-400"
      : state === "waiting"
      ? "text-red-600"
      : "text-textColor";
  let scrambleSize =
    currentType === "MEGA" || currentType === "7x7" || currentType === "6x6"
      ? "text-2xl"
      : currentType === "5x5"
      ? "text-3xl"
      : "text-4xl";
  return (
    <div className="flex h-full w-4/5 flex-col items-center bg-mainBackground p-12">
      <div className="flex h-1/5 items-center justify-center p-5 py-10">
        <p
          className={`mt-24 whitespace-pre-wrap text-center font-monserrat ${scrambleSize} text-scrambleText`}
        >
          {scramble}
        </p>
      </div>
      <div className="flex h-3/5 w-full flex-col items-center justify-center">
        <h1
          className={`text-center font-roboto text-8xl font-bold ${timerColor}`}
        >
          {displaySec}
        </h1>
        <p className="mt-4 font-monserrat text-lg text-textColor">
          Press and hold Space to start
        </p>
      </div>
      <div className="flex h-1/5 items-end justify-center">
        <img
          src={theme === "dark" ? whiteLogo : blackLogo}
          alt="logo"
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default Main;
