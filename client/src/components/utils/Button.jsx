/* eslint-disable react/prop-types */
import React from "react";

function Button({ children }) {
  return (
    <button className="bg-bgColor-palePink w-full h-full text-fontColor-white rounded-[5px] hover:scale-105 transition-all  duration-300 font-medium">
      {children}
    </button>
  );
}

export default Button;
