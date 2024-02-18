import React, { useState } from "react";
import "./login.scss";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleInputId = (e) => {
    setId(e.target.value);
  };

  const handleInputPw = (e) => {
    setPw(e.target.value);
  };

  const onSubmit = (e) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, pw: pw }),
    });
  };

  return (
    <div className="login">
      <form action="" onSubmit={onSubmit}>
        <div className="loginlogo">FLEX PT</div>
        <input
          className="id"
          placeholder="아이디"
          onChange={handleInputId}
          value={id}
        />
        <input
          type="password"
          className="pw"
          placeholder="비밀번호"
          onChange={handleInputPw}
          value={pw}
        />
        <button>로그인</button>
        <div className="links">
          <a href="/signup_c">회원가입</a>
          <a href="/findidpw">아이디, 비밀번호 찾기</a>
        </div>
      </form>
    </div>
  );
}
