import React from "react";
import getStyle from "../helper/getStyle";

export const Heading = (props) => {
  const style = {
    fontFamily: "Highlight",
    fontWeight: "Bold",
    fontSize: props.size,
    labelColor: "Neutral",
    labelColorIntense: "Darkest",
    ...props,
  };

  return <span style={getStyle(style)}>{props.children}</span>;
};
