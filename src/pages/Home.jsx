import React from "react";
import ad1 from "../images/ad1.png";
import ad2 from "../images/ad2.png";
import home_img from "../images/home_img.png";
import list_image from "../images/list_img.png";

function Home() {
  return (
    <div className="w-[1100px] font-raleway">
      <div className="ad w-full flex items-center justify-center py-[30px] bg-[#F5F5F5]">
        <img src={ad1} alt="" />
      </div>
      <div className="w-full flex gap-[40px] mt-[20px]">
        <div className="flex-1">
          <div className="w-full">
            <img src={home_img} className="w-full" alt="" />
            <p className="font-semibold text-second_blue leading-4 mt-[20px] text-[18px]">
              Discover the soothing benefits of canine massage therapy and how
              it can enhance your dog's overall well-being and relaxation at
              home
            </p>
            <p className="leading-[17px] text-[15px] mt-[4px] font-normal text-[#1B1B1F] ">
              Discover the soothing benefits of canine massage therapy and how
              it can enhance your dog's overall well-being and relaxation at
              home Discover the soothing benefits of and competitions in this
              dynamic canine sport. Explore essential tips and techniques to
              maintain your dog's dental health, ensuring a bright smile{" "}
            </p>
            <p className="font-semibold">Oct 19 2023</p>
          </div>
          <div className="mt-[20px]">
            {[0, 1, 2, 3].map((item) => (
              <div className="border-t-[1px] border-[#0B0B7D] flex gap-[30px] pt-[12px] mt-[10px]">
                <img src={list_image} alt="" />
                <div className="right flex flex-col justify-between">
                  <div>
                    <p className="font-semibold text-second_blue leading-4  text-[18px] text-justify">
                      Discover the soothing benefits of canine massage therapy
                      and how it can enhance your dog's overall well-being and
                      relaxation at home
                    </p>
                    <p className="leading-[17px] text-[15px] mt-[4px] font-normal text-[#1B1B1F] text-justify">
                      Discover the soothing benefits of canine massage therapy
                      and how it can enhance your dog's overall well-being and
                      relaxation at home Discover the soothing benefits of and
                      competitions in this dynamic canine sport. Explore
                      essential tips and techniques to maintain your dog's
                      dental health, ensuring a bright smile
                    </p>
                  </div>

                  <p className="font-semibold">Oct 19 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[300px]">
          <div>
            <img src={ad2} alt="" />
          </div>
          <div className="mt-[50px] border-[2px] pt-[20px] pb-[20px] px-[15px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <p className="border-l-[3px] border-[#3D22CF] pl-[20px] text-[15px] text-[#3D22CF] font-semibold mt-[15px]">
                Exploring Generative AI in Content Creation
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
