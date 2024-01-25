import React from "react";
import "./header.scss";
import Logo from "../../images/flex-pt-logo.jpeg";

export default function Header() {
  return (
    <header>
      <div className="inline">
        <div className="left">
          <a className="logo" href="/">
            <img src={Logo} alt="" />
            <div className="logotext">FLEX PT</div>
          </a>
          <ul className="nav_menu">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/location">LOCATION</a>
            </li>
            <li>
              <a href="/program">PROGRAM</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
