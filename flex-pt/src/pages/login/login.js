import React from "react";
import "./login.scss";

export default function LoginPage() {
  return (
    <div className="login">
      <form action="">
        <div className="loginlogo">LOG IN</div>
        <input className="id" placeholder="아이디" />
        <input type="password" className="pw" placeholder="비밀번호" />
        <button>로그인</button>
        <div className="links">
          <a href="">회원가입</a>
          <a href="">아이디, 비밀번호 찾기</a>
        </div>
      </form>
    </div>
  );
}
