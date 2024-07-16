import React from "react";
import { search_icon } from "../../data/useImportAssests";
import Button from "./Button";

function FilterCard() {
  return (
    <div className="flex flex-col w-screen xl:w-[1097px] mx-auto m-[2rem] shadow-2xl items-center py-[1.5rem] gap-y-[2rem]">
      <div className="border-2 border-borderColor-gray w-[86%] rounded-[9px] flex items-center h-[62px] pl-[1rem]">
        <img src={search_icon} />
        <input
          type="text"
          placeholder="Type any job title"
          className="form_inputs !text-3xl"
        />
      </div>
      <div className="w-[86%] flex  justify-between items-center">
        <div className="flex w-[143px]  items-center justify-center h-[46px] border-2 border-borderColor-gray_lighter rounded-[9px]">
          <select className="w-[45%] outline-none text-fontColor-gray_level_4 font-medium">
            <option>Skills</option>
          </select>
        </div>
        <div className="flex gap-x-[1.5rem]">
          <div className="w-[154px] h-[36.5px]">
            <Button>Apply Filter</Button>
          </div>
          <a className="text-2xl pink_text cursor-pointer hover:underline">
            Clear
          </a>
        </div>
      </div>
    </div>
  );
}

export default FilterCard;
