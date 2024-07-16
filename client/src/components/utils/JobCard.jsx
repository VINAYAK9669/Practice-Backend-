import React, { useState } from "react";
import { locate_img, try_Image, user_icon } from "../../data/useImportAssests";
import Button from "./Button";

function JobCard() {
  // const cardStatus=
  const [cardStatus, setCardStatus] = useState(false);
  const paraFlexContent =
    "flex items-center gap-x-[0.5rem] text-md font-medium text-fontColor-gray_level_4";

  return (
    <div
      className={`flex flex-col md:flex-row w-screen xl:w-[1097px] mx-auto m-[2rem] shadow-2xl items-center justify-between py-[1.5rem] gap-y-[2rem] px-[2rem] relative ${
        cardStatus ? "jobCard" : ""
      }`}
      onClick={() => setCardStatus(!cardStatus)}
    >
      <div className=" flex gap-x-[1.2rem] items-start ">
        <div>
          <img src={try_Image}></img>
        </div>
        <div className="flex flex-col gap-y-[1rem]">
          <h1 className="text-xl font-medium ">Frontend Developer</h1>
          <div className="flex gap-x-[1rem]">
            <p className={paraFlexContent}>
              <img src={user_icon} />
              <span>11-50</span>
            </p>
            <p className={paraFlexContent}>
              <span>₹</span>
              <span>50,000</span>
            </p>
            <p className={paraFlexContent}>
              <img src={locate_img} className="w-[18%]"></img>
              <span>Delhi</span>
            </p>
          </div>
          <div className="flex gap-x-[1.5rem] pink_text">
            <p>Office</p>
            <p>Full-Time</p>
          </div>
        </div>
      </div>
      {/******* RIGHT **** */}
      <div className="flex flex-col gap-y-[2rem] items-end w-full md:w-[50%]">
        <div className="flex items-center gap-x-2 flex-wrap gap-y-[0.5rem]">
          <p className="font-medium text-base bg-bgColor-pink_lighter px-[0.8rem] py-[0.2rem] rounded-[1.5px] cursor-pointer">
            Frontend
          </p>
        </div>
        <div className="w-[154px] h-[37px]">
          <Button>View details</Button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
