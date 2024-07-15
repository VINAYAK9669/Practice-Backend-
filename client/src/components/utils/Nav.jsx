import React from "react";
import {
  rectangle_left_bg,
  rectangle_middle_bg,
  rectangle_right_bg,
} from "../../data/useImportAssests";

function Nav() {
  const navStyle = {
    backgroundImage: `url(${rectangle_left_bg}), url(${rectangle_middle_bg}), url(${rectangle_right_bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom, center top, right bottom", // Adjust positions as needed
    backgroundSize: "auto, auto, auto",
  };

  return (
    <nav
      className="flex justify-center items-center h-[140px] bg-bgColor-palePink rounded-t-0 rounded-br-[55px] rounded-bl-[62px]"
      style={navStyle}
    >
      <div className="w-[80%] flex justify-between items-center">
        <h1 className="text-4.5xl text-fontColor-white font-large">
          Jobfinder
        </h1>
        <div className="flex h-[46px]  items-center gap-x-[1rem]">
          <button className="border-2 border-borderColor-white w-[113px] rounded-[7px] text-3xl text-fontColor-white font-medium h-full">
            Login
          </button>
          <button className=" w-[113px] rounded-[7px] text-3xl text-fontColor-palePink font-medium h-full bg-bgColor-white">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
