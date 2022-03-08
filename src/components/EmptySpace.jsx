import React, { useState } from "react";
import TypeDropDown from "./TypeDropDown";
import SessionDropDown from "./SessionDropDown";

const EmptySpace = ({ currentType, setCurrentType }) => {
  const [typeOpened, setTypeOpened] = useState(false);
  const [sessionOpened, setSessionOpened] = useState(false);
  return (
    <div className="flex h-full w-1/5 flex-col items-center justify-end bg-mainBackground">
      <div>
        {typeOpened === true ? (
          <TypeDropDown
            setTypeOpened={setTypeOpened}
            setCurrentType={setCurrentType}
          />
        ) : sessionOpened === true ? (
          <SessionDropDown />
        ) : null}
        <div className="flex h-1/5 w-full -translate-y-3 items-center justify-start">
          <div className="z-10 flex w-[180px] items-center rounded-[200px] bg-buttons p-1">
            <button
              className={`my-[21px] mx-[13px] flex cursor-pointer items-center justify-center border-none bg-none ${
                currentType === "MEGA" ? "text-2xl" : "text-4xl"
              } text-textColor`}
              onClick={() => {
                setTypeOpened(!typeOpened);
                document.activeElement.blur();
                if (!typeOpened) setSessionOpened(false);
              }}
            >
              {currentType}
            </button>
            <button
              className="h-[83px] w-[83px] rounded-full bg-sessionButton text-xl text-textColor"
              onClick={() => {
                setSessionOpened(!sessionOpened);
                document.activeElement.blur();
                if (!sessionOpened) setTypeOpened(false);
              }}
            >
              New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptySpace;
