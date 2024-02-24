import React, { useRef, useEffect } from "react";
import "./header.scss";
import Logo from "../../images/logo/flex-pt-logo.jpeg";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const inline_wide = useRef();
  const inline_small = useRef();
  const sidemenu = useRef();
  const blurback = useRef();

  // 리사이즈
  function resizeHeader() {
    if (window.innerWidth < 950) {
      inline_wide.current.style.display = "none";
      inline_small.current.style.display = "flex";
    } else {
      inline_wide.current.style.display = "flex";
      inline_small.current.style.display = "none";
    }
  }

  // 사이드메뉴 컨트롤
  function sidemenuOpen() {
    sidemenu.current.style.transform = "translate(0,0)";
    blurback.current.style.display = "block";
  }

  function sidemenuClose() {
    sidemenu.current.style.transform = "translate(-260px,0)";
    blurback.current.style.display = "none";
  }

  // 렌더링
  useEffect(() => {
    resizeHeader();

    window.addEventListener("resize", () => {
      resizeHeader();
    });
  }, []);

  return (
    <header>
      <div className="inline_wide" ref={inline_wide}>
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
              <a href="/signup_c">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="inline_small" ref={inline_small}>
        <div className="menu" onClick={sidemenuOpen}>
          <IoMdMenu />
        </div>
        <a className="logo" href="/">
          <img src={Logo} alt="" />
          <div className="logotext">FLEX PT</div>
        </a>
        <div className="sizebox"></div>
      </div>
      <div className="backblur" ref={blurback} onClick={sidemenuClose}></div>
      <div className="sidemenu" ref={sidemenu}>
        <div className="profile">회원 정보</div>
        <ul className="menu">
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
    </header>
  );
}
