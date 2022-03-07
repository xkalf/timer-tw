import React from "react";
import logo from "../assets/Timer-white.png";

const Main = () => {
  return (
    <div className="p-122 flex h-full w-4/5 flex-col items-center bg-mainBackground">
      <div className="p-10s flex h-1/5 items-center justify-center p-5 py-10">
        <p className="mt-24 whitespace-pre-wrap text-center font-monserrat text-4xl text-scrambleText">
          B2 U R2 B2 L2 U2 B' U2 B' D2 F2 L2 F L D L U2 R' F' U2 B'
        </p>
      </div>
      <div className="flex h-3/5 w-full flex-col items-center justify-center">
        <h1 className="text-center font-roboto text-8xl font-bold text-textColor">
          0.00
        </h1>
        <p className="mt-4 font-monserrat text-lg text-textColor">
          Press and hold Space to start
        </p>
      </div>
      <div className="flex h-1/5 items-center justify-between">
        <img src={logo} alt="logo" className="flex-1" />
      </div>
    </div>
  );
};

export default Main;
