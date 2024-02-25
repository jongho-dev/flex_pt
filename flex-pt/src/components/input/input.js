import React from "react";
import "./input.scss";

export default function Input(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.change}
      onBlur={props.blur}
      value={props.value}
    ></input>
  );
}
