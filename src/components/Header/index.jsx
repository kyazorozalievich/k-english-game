import React from "react";
import header from "../../assets/image/headerlogo.png";
import { LuMedal } from "react-icons/lu";


const Header = () => {
  return (
    <div className="header h-[80px] pt-[10px] bg-sky-500 sticky top-0">
      <div className="container w-[90%] flex items-center justify-between">
        <img src={header} alt="" className="w-[10%]"/>
        <div className="flex items-center flex-col">
          <h1 className="text-[25px] font-[700] text-white">Welcome to our cooperative game</h1>
          <h3 className="text-[20px] font-[700] text-yellow-300 flex items-center gap-[10px]"><LuMedal />
          Let the best win <LuMedal />
          </h3>
        </div>
        <h1 className="text-[20px] text-white font-[700]">Teacher 'Miss Kunduz'</h1>
      </div>
    </div>
  );
};

export default Header;
