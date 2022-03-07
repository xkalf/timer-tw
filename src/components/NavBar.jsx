import React from "react";

const NavBar = () => {
  return (
    <div className="flex h-[10%] flex-col gap-4">
      <p className="overflow-hidden whitespace-nowrap text-sm text-textColor">
        amroos988
      </p>
      <div className="flex justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-pageContainer shadow">
          1
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-pageContainer shadow">
          2
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-pageContainer shadow">
          3
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-pageContainer shadow">
          4
        </div>
      </div>
    </div>
  );
};

export default NavBar;
