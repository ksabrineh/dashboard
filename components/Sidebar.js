"use client";
import {
  BookOutlined,
  DashboardOutlined,
  Fitbit,
  HomeOutlined,
  PeopleOutline,
  SettingsOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(4);
  return (
    <div className="h-full w-full border-r flex flex-col items-center shadow-lg">
      <div className="flex justify-center items-center h-[10%] w-full border-b">
        <Fitbit fontSize="large" color="warning" />
      </div>
      <div className="flex flex-col gap-14 pt-10 h-[90%] w-full">
        <div onClick={() => setActiveMenu(1)} className={`${activeMenu === 1 && "border-b-[3px] border-orange-500"} mx-4 pb-2 flex gap-3 flex-col-reverse items-center`}>
          <HomeOutlined className={`!text-gray-400 cursor-pointer ${activeMenu === 1 && "!text-orange-500"}`} />
        </div>

        <div onClick={() => setActiveMenu(2)} className={`${activeMenu === 2 && "border-b-[3px] border-orange-500"} mx-4 pb-2 flex gap-3 flex-col-reverse items-center`}>
          <DashboardOutlined className={`!text-gray-400 cursor-pointer ${activeMenu === 2 && "!text-orange-500"}`} />
        </div>

        <div onClick={() => setActiveMenu(4)} className={`${activeMenu === 4 && "border-b-[3px] border-orange-500"} mx-4 pb-2 flex gap-3 flex-col-reverse items-center`}>
          <PeopleOutline className={`!text-gray-400 cursor-pointer ${activeMenu === 4 && "!text-orange-500"}`} />
        </div>

        <div onClick={() => setActiveMenu(5)} className={`${activeMenu === 5 && "border-b-[3px] border-orange-500"} mx-4 pb-2 flex gap-3 flex-col-reverse items-center`}>
          <BookOutlined className={`!text-gray-400 cursor-pointer ${activeMenu === 5 && "!text-orange-500"}`} />
        </div>
        <div onClick={() => setActiveMenu(6)} className={`${activeMenu === 6 && "border-b-[3px] border-orange-500"} mx-4 pb-2 flex gap-3 flex-col-reverse items-center`}>
          <SettingsOutlined className={`!text-gray-400 cursor-pointer ${activeMenu === 6 && "!text-orange-500"}`} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
