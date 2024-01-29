import React, { useRef, useEffect } from "react";
import "./footer.scss";
import InstaLogo from "../../images/logo/insta-logo.png";
import BlogLogo from "../../images/logo/blog-logo.png";

export default function Footer() {
  const ft = useRef();
  const ft_rd = useRef();

  function changeFooter() {
    if (window.innerWidth < 950) {
      ft.current.style.display = "none";
      ft_rd.current.style.display = "flex";
    } else {
      ft.current.style.display = "flex";
      ft_rd.current.style.display = "none";
    }
  }

  useEffect(() => {
    changeFooter();

    window.addEventListener("resize", () => {
      changeFooter();
    });
  }, []);

  return (
    <div className="footer">
      <div className="inline" ref={ft}>
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
      <div className="inline-reduct" ref={ft_rd}>
        <div className="top">
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
    </div>
  );
}
