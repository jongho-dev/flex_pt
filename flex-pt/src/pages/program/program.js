import React from "react";
import "./program.scss";
import Img from "../../images/program_img.jpeg";

export default function ProgramPage() {
  return (
    <div className="program">
      <img src={Img} alt="" />
      <div>멘트</div>
    </div>
  );
}
