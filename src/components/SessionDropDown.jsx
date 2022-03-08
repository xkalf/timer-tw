import React from "react";

const SessionDropDown = () => {
  const sessions = ["2022/02/13", "2022/02/14"];
  return (
    <div className="scroll overscroll-y-scroll absolute bottom-[80px] flex max-h-[250px] min-h-[180px] w-[180px] flex-col items-center justify-evenly gap-1 overflow-x-hidden rounded-[14px] bg-dropDownBackground text-textColor">
      <p className="text-center text-xl text-textColor">Session</p>
      {sessions.map((session) => {
        return (
          <div className="flex justify-between gap-4" key={session}>
            <p className="text-center text-xl text-textColor">{session}</p>
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
