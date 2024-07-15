/* eslint-disable react/prop-types */
import React from "react";

function Button({ children }) {
  return (
    <button className="bg-bgColor-palePink w-full h-full text-fontColor-white rounded-[5px]">
      {children}
    </button>
  );
}

export default Button;
