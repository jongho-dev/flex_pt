import React, { useRef, useEffect } from "react";
import "./header.scss";
import Logo from "../../images/flex-pt-logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const logoclick = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    logoclick.current.addEventListener("click", () => {
      navigate("/");
    });
  }, []);

  return (
    <header>
      <div className="inline">
        <div className="left">
          <div className="logo" ref={logoclick}>
            <img src={Logo} alt="" />
            <div className="logotext">FLEX PT</div>
          </div>
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
