import React from "react";

const SessionDropDown = () => {
  const sessions = ["2022/02/13", "2022/02/14"];
  return (
    <div className=" overscroll-y-scroll flex max-h-[250px] w-[180px] flex-col items-center justify-between gap-1 overflow-x-hidden bg-dropDownBackground text-textColor">
      <p className="text-center text-xl text-textColor">Session</p>
      {sessions.map((session) => {
        return (
          <div className="flex justify-between">
            <p className="text-center text-xl text-textColor"></p>
            <button className="cursor-pointer text-[#ca3a3a]">X</button>
          </div>
        );
      })}
      <button className="border-none bg-none text-center text-xl text-[#58d568]">
        + New Session
      </button>
    </div>
  );
};

export default SessionDropDown;
