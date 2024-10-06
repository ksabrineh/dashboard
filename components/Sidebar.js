import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full w-full border-r flex flex-col items-center shadow-lg">
      <div className="flex justify-center items-center h-[10%] w-full border-b">logo</div>
      <div className="flex justify-center h-[90%] w-full items-center">menu</div>
    </div>
  );
};

export default Sidebar;
