import { Coronavirus } from "@mui/icons-material";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="flex flex-row-reverse flex-wrap w-full gap-2 justify-around items-center">
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-green-100 text-green-800">
          <Coronavirus fontSize="large" />
          <span>Marburg virus</span>
          <span>1967</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-blue-100 text-blue-800">
          <Coronavirus fontSize="large" />
          <span>Ebola virus</span>
          <span>1976</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-purple-100 text-purple-800">
          <Coronavirus fontSize="large" />
          <span>Rabies</span>
          <span>1920</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-rose-100 text-rose-800">
          <Coronavirus fontSize="large" />
          <span>HIV</span>
          <span>1980</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-orange-100 text-orange-800">
          <Coronavirus fontSize="large" />
          <span>Astrovirus</span>
          <span>1975</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-sky-100 text-sky-800">
          <Coronavirus fontSize="large" />
          <span>Smallpox</span>
          <span>1949</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-white text-purple-800">
          <Coronavirus fontSize="large" />
          <span>Nairovirus</span>
          <span>1960</span>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Dashboard;
