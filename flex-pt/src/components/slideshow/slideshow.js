import React, { useRef, useEffect } from "react";
import "./slideshow.scss";
import slideImage1 from "../../images/slideshow/slide1.jpeg";
import slideImage2 from "../../images/slideshow/slide2.jpeg";

export default function Slideshow() {
  const imgs = useRef("");
  const dot1 = useRef("");
  const dot2 = useRef("");

  useEffect(() => {
    dot1.current.addEventListener("click", () => {
      imgs.current.style.transform = "translateX(0)";
    });
    dot2.current.addEventListener("click", () => {
      imgs.current.style.transform = "translateX(-100vw)";
    });
  }, []);
  return (
    <div className="slide">
      <div className="images" ref={imgs}>
        <img src={slideImage1} />
        <img src={slideImage2} />
      </div>
      <div className="blur">
        <div className="movearrows">화살표</div>
        <div className="dots">
          <div className="d1" ref={dot1}></div>
          <div className="d2" ref={dot2}></div>
          {/* <div className="d3"></div>
          <div className="d4"></div> */}
        </div>
      </div>
    </div>
  );
}
