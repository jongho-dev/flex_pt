import React, { useRef, useEffect } from "react";
import "./footer.scss";
import InstaLogo from "../../images/logo/insta-logo.png";
import BlogLogo from "../../images/logo/blog-logo.png";

export default function Footer() {
  const inline_wide = useRef();
  const inline_small = useRef();

  // 리사이즈
  function resizeFooter() {
    if (window.innerWidth < 950) {
      inline_wide.current.style.display = "none";
      inline_small.current.style.display = "flex";
    } else {
      inline_wide.current.style.display = "flex";
      inline_small.current.style.display = "none";
    }
  }

  // 렌더링
  useEffect(() => {
    resizeFooter();

    window.addEventListener("resize", () => {
      resizeFooter();
    });
  }, []);

  return (
    <div className="footer">
      <div className="inline_wide" ref={inline_wide}>
        <div className="left">
          <div className="footerlogo">FLEX PT STUDIO</div>
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
      <div className="inline_small" ref={inline_small}>
        <div className="top">
          <div className="footerlogo">FLEX PT STUDIO</div>
          <div className="address">서울특별시 서대문구 연희맛로 32, B1F</div>
          <div className="tel">Tel. 010-7758-8354 | 0507-1347-8354</div>
        </div>
        <div className="bottom">
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
