import React, { useState } from "react";

const Solves = ({ time, deleteTime, index, plusTime, dnfTime }) => {
  const [plusClicked, setPlusClicked] = useState(false);
  const [dnfCLicked, setDnfClicked] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center whitespace-nowrap font-roboto text-sm text-textColor md:text-base xl:text-lg 2xl:text-xl">
        {index + 1}. {time}
      </span>
      <div className="flex w-5/12 justify-evenly gap-0.5 xl:gap-1">
        <button
          className="cursor-pointer text-sm text-plusButton md:text-base xl:text-lg 2xl:text-xl"
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
          className="cursor-pointer text-sm text-textColor md:text-base xl:text-lg 2xl:text-xl"
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
          className="cursor-pointer text-sm text-[#ca3a3a] md:text-base xl:text-lg 2xl:text-xl"
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
