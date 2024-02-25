import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import Btn from "../../components/button/button";
import Input from "../../components/input/input";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleInputId = (e) => {
    setId(e.target.value);
  };

  const handleInputPw = (e) => {
    setPw(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://port-0-flex-pt-backend-ghdys32bls5ufup0.sel5.cloudtype.app/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, pw: pw }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          navigate("/");
        } else {
          alert("로그인 실패");
        }
      });
  };

  return (
    <div className="login">
      <form action="" onSubmit={onSubmit}>
        <div className="loginlogo">FLEX PT</div>
        <Input
          className="id"
          type="text"
          placeholder="아이디"
          change={handleInputId}
          value={id}
        />
        <Input
          className="pw"
          type="password"
          placeholder="비밀번호"
          change={handleInputPw}
          value={pw}
        />
        <Btn text="로그인" className="btn" />
        <div className="links">
          <a href="/signup_c">회원가입</a>
          <a href="/findidpw">아이디, 비밀번호 찾기</a>
        </div>
      </form>
    </div>
  );
}
