import React, { useState, useRef, useEffect } from "react";
import "./slideshow.scss";
import slideImage1 from "../../images/slideshow/slide1.jpeg";
import slideImage2 from "../../images/slideshow/slide2.jpeg";
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
          "translateX(" + (2 - currentdot) * 100 + "vw)";
        setCurrentdot(currentdot - 1);
      }
    });

    rarrow.current.addEventListener("click", () => {
      if (currentdot <= 1) {
        imgs.current.style.transform =
          "translateX(" + currentdot * -100 + "vw)";
        setCurrentdot(currentdot + 1);
      }
    });
  });
  return (
    <div className="slide">
      <div className="images" ref={imgs}>
        <img src={slideImage1} />
        <img src={slideImage2} />
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
              backgroundColor: currentdot == 1 ? "white" : "rgba(0,0,0,0)",
            }}
          ></div>
          <div
            className="d2"
            ref={dot2}
            style={{
              backgroundColor: currentdot == 2 ? "white" : "rgba(0,0,0,0)",
            }}
          ></div>
          {/* <div className="d3"></div>
          <div className="d4"></div> */}
        </div>
      </div>
    </div>
  );
}
