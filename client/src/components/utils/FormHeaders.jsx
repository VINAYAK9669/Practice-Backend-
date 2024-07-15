/* eslint-disable react/prop-types */
import React from "react";

function FormHeaders({ type, color, children }) {
  const colors =
    type === "no_para" ? "text-fontColor-white" : "text-fontColor-black";
  return (
    <div>
      <h1 className={`text-5xl ${colors}`}>{children}</h1>
      {type !== "no_para" && (
        <p className="text-2.5xl text-fontColor-gray_level_1">
          Your personal job finder is here
        </p>
      )}
    </div>
  );
}

export default FormHeaders;
