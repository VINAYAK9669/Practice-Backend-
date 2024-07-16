/* eslint-disable react/prop-types */
import React from "react";

function FormHeaders({ type, children }) {
  const colors =
    type === "no_para" && type !== "no_paraBlack"
      ? "text-fontColor-white"
      : "text-fontColor-black";

  const showPara = type !== "no_para" && type !== "no_paraBlack";
  return (
    <div>
      <h1 className={`text-5xl ${colors} font-large`}>{children}</h1>
      {showPara && (
        <p className="text-2.5xl text-fontColor-gray_level_1">
          Your personal job finder is here
        </p>
      )}
    </div>
  );
}

export default FormHeaders;
