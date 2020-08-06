import React, { useState } from "react";
import getStyle from "../helper/getStyle";

export const Button = (props) => {
  const [buttonHover, setButtonHover] = useState(false);
  const onHover = {
    ...props,
    labelColor: "Primary",
    labelColorIntense: "Medium",
    color: "Neutral",
    colorIntense: "Lightest",
    borderWidth: "Thick",
    borderColor: "Primary",
    borderColorIntense: "Medium",
  };

  return (
    <button
      onMouseOver={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
      style={
        !buttonHover
          ? {
              minWidth: "108px",
              minHeight: "40px",
              maxWidth: "200px",
              ...getStyle(props, props.css),
            }
          : {
              minWidth: "108px",
              minHeight: "40px",
              maxWidth: "200px",
              ...getStyle(onHover, props.css),
            }
      }
    >
      {props.text}
    </button>
  );
};
