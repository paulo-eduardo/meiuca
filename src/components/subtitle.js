import React from "react";
import getStyle from "../helper/getStyle";

export const Subtitle = (props) => {
  const style = {
    fontFamily: "Highlight",
    fontWeight: "Medium",
    fontSize: "MD",
    labelColor: "Neutral",
    labelColorIntense: "Dark",
    ...props,
  };

  return <span style={getStyle(style)}>{props.children}</span>;
};
