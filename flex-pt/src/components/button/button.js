import React from "react";
import "./button.scss";

export default function Btn(props) {
  return (
    <button onClick={props.click} style={props.style}>
      {props.text}
    </button>
  );
}
