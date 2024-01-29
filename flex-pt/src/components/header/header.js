import React, { useRef, useEffect } from "react";
import "./header.scss";
import Logo from "../../images/logo/flex-pt-logo.jpeg";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const hd = useRef();
  const hd_rd = useRef();
  const downmenu = useRef();
  const downmenu_btn = useRef();

  function changeHeader() {
    if (window.innerWidth < 950) {
      hd.current.style.display = "none";
      hd_rd.current.style.display = "flex";
    } else {
      hd.current.style.display = "flex";
      hd_rd.current.style.display = "none";
    }
  }

  useEffect(() => {
    changeHeader();

    window.addEventListener("resize", () => {
      changeHeader();
    });
  }, []);

  return (
    <header>
      <div className="inline" ref={hd}>
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
      <div className="inline-reduct" ref={hd_rd}>
        <div className="menu" ref={downmenu_btn}>
          <IoMdMenu />
        </div>
        <a className="logo" href="/">
          <img src={Logo} alt="" />
          <div className="logotext">FLEX PT</div>
        </a>
        <div></div>
      </div>
      <div className="downmenu" ref={downmenu}>
        사이드메뉴
      </div>
    </header>
  );
}
