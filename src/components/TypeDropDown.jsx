import React from "react";

const TypeDropDown = () => {
  const types = ["2x2", "3x3", "4x4", "5x5", "6x6", "7x7", "megaminx"];
  return (
    <div className="flex max-h-[250px] w-[180px] flex-col items-center gap-1 overflow-x-hidden overflow-y-scroll rounded-[14px] bg-dropDownBackground  pt-5 pb-16 text-textColor">
      {types.map((type) => {
        return (
          <p
            className="w-full cursor-pointer text-center text-xl hover:bg-dropDownBackgroundHover"
            key={type}
          >
            {type}
          </p>
        );
      })}
    </div>
  );
};

export default TypeDropDown;
