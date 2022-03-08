import React, { useState } from "react";

const Solves = ({ time, deleteTime, index, plusTime, dnfTime }) => {
  const [plusClicked, setPlusClicked] = useState(false);
  const [dnfCLicked, setDnfClicked] = useState(false);
  return (
    <div className="flex items-center justify-between px-0 xl:px-3">
      <span className="flex items-center whitespace-nowrap text-base text-textColor lg:text-lg">
        {index + 1}. {time}
      </span>
      <div className="flex w-5/12 gap-0.5 xl:gap-1 ">
        <button
          className="cursor-pointer text-base text-plusButton xl:text-lg"
          onClick={() => {
            plusTime(index);
            setPlusClicked(true);
            document.activeElement.blur();
          }}
          disabled={plusClicked || dnfCLicked}
        >
          +2
        </button>
        <button
          className="cursor-pointer text-base text-textColor xl:text-lg"
          onClick={() => {
            dnfTime(index);
            setDnfClicked(true);
            document.activeElement.blur();
          }}
          disabled={dnfCLicked}
        >
          DNF
        </button>
        <button
          className="cursor-pointer text-base text-[#ca3a3a] xl:text-lg"
          onClick={() => {
            deleteTime(index);
            document.activeElement.blur();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Solves;
