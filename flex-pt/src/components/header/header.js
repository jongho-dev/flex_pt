import React from "react";
import "./header.scss";
import Logo from "../../images/flex-pt-logo.jpeg";

export default function Header() {
  return (
    <header>
      <div className="inline">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" />
            <div className="logotext">FLEX PT</div>
          </div>
        </div>
      </div>
    </header>
  );
}
