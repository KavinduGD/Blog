import React from "react";
import footer_logo from "/footer_logo.png";
function Footer() {
  return (
    <div className="w-full border-t-[1px] border mt-[30px] bg-[#F9F9F9] flex justify-center pt-[20px]">
      <div className="w-[1110px]">
        <div className="flex justify-between">
          <div className="logo flex items-center">
            <img src={footer_logo} alt="" />
            <p className="text-main_blue text-[42px] font-medium font-dela_gothic_one">
              BlogPalette
            </p>
          </div>
          <div>
            <p className="uppercase font-bold text-[18px]">Links</p>
            <div className="links mt-[4px]">
              <p className="text-[#3D22CF] text-[15px]">Home</p>
              <p className="text-[#3D22CF] text-[15px]">Privacy Policy</p>
              <p className="text-[#3D22CF] text-[15px]">Terms and Conditions</p>
              <p className="text-[#3D22CF] text-[15px]">About</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[20px] mb-[20px] border-t-[1px]">
          <p className="text-[#6C7880] text-[13px] mt-[5px] ">
            GBD Software as a Service Private limited company - Szikra Tanya 93,
            Lakitelek, 6065, Hungary
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
