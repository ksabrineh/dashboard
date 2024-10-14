"use client";
import {
  AppsOutlined,
  BookOutlined,
  DashboardOutlined,
  Fitbit,
  HomeOutlined,
  PeopleOutline,
  SettingsOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(6);
  return (
    <div className="h-full w-full border-r flex flex-col items-center shadow-lg">
      <div className="flex justify-center items-center h-[10%] w-full border-b">
        <Fitbit fontSize="large" color="warning" />
      </div>
      <div className="flex flex-col gap-16 pt-10 h-[90%] w-full">
        <div onClick={() => setActiveMenu(1)} className="flex gap-3 flex-row-reverse items-center">
        <div className="w-3 h-12 bg-orange-500 rounded-r-full"></div>
          <HomeOutlined className="!text-gray-400 cursor-pointer" />
        </div>

        <div onClick={() => setActiveMenu(1)} className="flex gap-3 flex-row-reverse items-center">
        <div className="w-3 h-12 bg-orange-500 rounded-r-full"></div>
          <DashboardOutlined className="!text-gray-400 cursor-pointer" />
        </div>

        <div onClick={() => setActiveMenu(1)} className="flex gap-3 flex-row-reverse items-center">
        <div className="w-3 h-12 bg-orange-500 rounded-r-full"></div>
          <AppsOutlined className="!text-gray-400 cursor-pointer" />
        </div>

        <div onClick={() => setActiveMenu(1)} className="flex gap-3 flex-row-reverse items-center">
        <div className="w-3 h-12 bg-orange-500 rounded-r-full"></div>
          <PeopleOutline className="!text-gray-400 cursor-pointer" />
        </div>

        <div onClick={() => setActiveMenu(1)} className="flex gap-3 flex-row-reverse items-center">
        <div className="w-3 h-12 bg-orange-500 rounded-r-full"></div>
          <BookOutlined className="!text-gray-400 cursor-pointer" />
        </div>
        <div onClick={() => setActiveMenu(1)} className="flex gap-3 flex-row-reverse items-center">
        <div className="w-3 h-12 bg-orange-500 rounded-r-full"></div>
          <SettingsOutlined className="!text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
