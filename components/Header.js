import {
  NotificationsNoneOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import React from "react";

const Header = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between p-10">
      <div className="flex items-center gap-4">
        <div className="w-7 h-7 bg-slate-700 rounded-full"></div>
        <PersonOutlined />
        <NotificationsNoneOutlined />
      </div>
      <div className="font-bold text-blue-900 text-3xl">Deadly viruses</div>
    </div>
  );
};

export default Header;
