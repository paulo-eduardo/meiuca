import React from "react";
import getStyle from "../helper/getStyle";

export const Shape = (props) => {
  const style = {
    borderRadius: "None",
    borderWidth: "Thick",
    borderColor: "Neutral",
    borderColorIntense: "Dark",
    SpacingInset: "LG",
    color: "Neutral",
    colorIntense: "Lightest",
  };
  return (
    <div
      style={{
        ...getStyle(style),
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.children}
    </div>
  );
};
