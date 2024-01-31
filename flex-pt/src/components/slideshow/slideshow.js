import React, { useState, useRef, useEffect } from "react";
import "./slideshow.scss";
import slideImage2 from "../../images/slideshow/slide2.jpg";
import mainImage from "../../images/slideshow/mainpic.jpg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Slideshow() {
  const imgs = useRef("");
  const dot1 = useRef("");
  const dot2 = useRef("");
  const larrow = useRef("");
  const rarrow = useRef("");
  const [currentdot, setCurrentdot] = useState(1);

  useEffect(() => {
    dot1.current.addEventListener("click", () => {
      imgs.current.style.transform = "translateX(0)";
      setCurrentdot(1);
    });

    dot2.current.addEventListener("click", () => {
      imgs.current.style.transform = "translateX(-100vw)";
      setCurrentdot(2);
    });

    larrow.current.addEventListener("click", () => {
      if (currentdot >= 2) {
        imgs.current.style.transform =
          "translateX(" + (2 - currentdot) * 93 + "vw)";
        setCurrentdot(currentdot - 1);
      }
    });

    rarrow.current.addEventListener("click", () => {
      if (currentdot <= 1) {
        imgs.current.style.transform = "translateX(" + currentdot * -93 + "vw";
        setCurrentdot(currentdot + 1);
      }
    });
  });
  return (
    <div className="slide">
      <div className="images" ref={imgs}>
        <div className="img1">
          <img src={mainImage} />
          <div className="txt1">대형 헬스장과는 다르다! </div>
          <div className="txt2">수업의 퀄리티를 보셔야 합니다. </div>
          <div className="txt3">
            30년 이상의 경력, 오랜 경험과 노하우로 운동 지도{" "}
          </div>
        </div>
        <div className="img2">
          <img src={slideImage2} />
          {/* <div className="txt4">FLEX PT STUDIO 혜택</div>
          <ul className="txt5">
            <li>1. 100만원 이상 결제시 월 5만원으로 스튜디오 이용 가능</li>
            <li>2. 수업 외에 운동 가능</li>
            <li>3. 회원님 24시 언제든지 자유운동 가능</li>
            <li>4. 개인 홈짐처럼 편하게 이용 가능</li>
            <li>5. 개인 샤워부스 / 유니폼, 수건 무료</li>
          </ul> */}
        </div>
      </div>
      <div className="blur">
        <div className="movearrows">
          <div className="leftarrow" ref={larrow}>
            <SlArrowLeft className="a-icon" />
          </div>
          <div className="rightarrow" ref={rarrow}>
            <SlArrowRight className="a-icon" />
          </div>
        </div>
        <div className="dots">
          <div
            className="d1"
            ref={dot1}
            style={{
              backgroundColor: currentdot == 1 ? "white" : "#ffffff66",
              width: currentdot == 1 ? "37px" : "12px",
            }}
          ></div>
          <div
            className="d2"
            ref={dot2}
            style={{
              backgroundColor: currentdot == 2 ? "white" : "#ffffff66",
              width: currentdot == 2 ? "37px" : "12px",
            }}
          ></div>
          {/* <div className="d3"></div>
          <div className="d4"></div> */}
        </div>
      </div>
    </div>
  );
}
