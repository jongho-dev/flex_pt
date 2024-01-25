import React from "react";
import "./footer.scss";
import InstaLogo from "../../images/insta-logo.png";
import BlogLogo from "../../images/blog-logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="inline">
        <div className="left">
          <div className="footerlogo">FLEX PT</div>
          <div className="address">서울특별시 서대문구 연희맛로 32, B1F</div>
          <div className="tel">Tel. 010-7758-8354 | 0507-1347-8354</div>
        </div>
        <div className="right">
          <div className="sns">
            <a className="insta" href="https://www.instagram.com/flex_pt_/">
              <img src={InstaLogo} alt="" />
            </a>
            <a className="blog" href="https://blog.naver.com/bicep38">
              <img src={BlogLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
