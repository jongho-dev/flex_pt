import React, { useState } from "react";
import "./signup_c.scss";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SignUpCheckPage() {
  const navigate = useNavigate();

  const [allcheck, setAllcheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <div className="signup_c">
      <form action="">
        <div className="signuplogo">FLEX PT</div>
        <div className="box0">
          <FaCheck
            className="allcheck"
            onClick={() => {
              if (allcheck) {
                setAllcheck(false);
                setCheck1(false);
                setCheck2(false);
              } else {
                setAllcheck(true);
                setCheck1(true);
                setCheck2(true);
              }
            }}
            style={
              allcheck
                ? {
                    backgroundColor: "rgb(235, 146, 78)",
                    border: "2px solid rgb(235, 146, 78)",
                    color: "white",
                  }
                : {
                    backgroundColor: "white",
                    border: "2px solid rgb(148,154,166)",
                    color: "rgb(148,154,166)",
                  }
            }
          />
          <span>전체 동의하기</span>
        </div>
        <div className="box1">
          <FaCheck
            className="check1"
            onClick={() => {
              if (check1) {
                setCheck1(false);
                setAllcheck(false);
              } else {
                setCheck1(true);
                if (check2) {
                  setAllcheck(true);
                }
              }
            }}
            style={
              check1
                ? {
                    backgroundColor: "rgb(235, 146, 78)",
                    border: "2px solid rgb(235, 146, 78)",
                    color: "white",
                  }
                : {
                    backgroundColor: "white",
                    border: "2px solid rgb(148,154,166)",
                    color: "rgb(148,154,166)",
                  }
            }
          />
          <span>이용약관 동의</span>
          <span className="red">[필수]</span>
        </div>
        <div className="txt">
          이용약관 설명
          <br />
          1. ~~~~~~~~~~~
          <br />
          2. ~~~~~~~~~~~
          <br />
          3. ~~~~~~~~~~~
          <br />
          4. ~~~~~~~~~~~
          <br />
          5. ~~~~~~~~~~~
          <br />
          6. ~~~~~~~~~~~
          <br />
          7. ~~~~~~~~~~~
          <br />
          8. ~~~~~~~~~~~
          <br />
          9. ~~~~~~~~~~~
          <br />
          10. ~~~~~~~~~~~
        </div>
        <div className="box2">
          <FaCheck
            className="check2"
            onClick={() => {
              if (check2) {
                setCheck2(false);
                setAllcheck(false);
              } else {
                setCheck2(true);
                if (check1) {
                  setAllcheck(true);
                }
              }
            }}
            style={
              check2
                ? {
                    backgroundColor: "rgb(235, 146, 78)",
                    border: "2px solid rgb(235, 146, 78)",
                    color: "white",
                  }
                : {
                    backgroundColor: "white",
                    border: "2px solid rgb(148,154,166)",
                    color: "rgb(148,154,166)",
                  }
            }
          />
          <span>개인정보 수집 및 이용 동의</span>
          <span className="red">[필수]</span>
        </div>
        <div className="txt">
          개인정보 수집 및 이용 동의 설명
          <br />
          1. ~~~~~~~~~~~
          <br />
          2. ~~~~~~~~~~~
          <br />
          3. ~~~~~~~~~~~
        </div>
        <button
          style={
            allcheck
              ? { backgroundColor: "rgb(235, 146,78)" }
              : { backgroundColor: "rgb(137, 144, 160)" }
          }
          onClick={(e) => {
            e.preventDefault();
            if (allcheck) {
              navigate("/signup");
            }
          }}
        >
          다음
        </button>
      </form>
    </div>
  );
}
