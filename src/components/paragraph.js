import React from "react";
import getStyle from "../helper/getStyle";

export const Paragraph = (props) => {
  const style = {
    fontFamily: "Highlight",
    fontWeight: "Regular",
    fontSize: "SX",
    labelColor: "Neutral",
    labelColorIntense: "Dark",
    ...props,
  };

  return <span style={getStyle(style)}>{props.children}</span>;
};
