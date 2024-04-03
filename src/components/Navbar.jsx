import React from "react";
import logo_icon from "/logo_icon.png";
function Navbar() {
  return (
    <div className="flex justify-center items-center py-[5px] border-b-[1px]">
      <div className="w-[1100px] h-[70px] flex justify-between">
        <div className="logo flex items-center ">
          <img src={logo_icon} alt="" />
          <p className="text-main_blue text-[34px] font-medium font-dela_gothic_one">
            BlogPalette
          </p>
        </div>
        <div className="items flex items-center font-raleway gap-[40px] text-[18px]">
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
