import React from "react";
import "./signup.scss";

export default function SignUpPage() {
  return (
    <div className="signup">
      <div className="signuplogo">회원가입</div>
      <form action="">
        <input type="text" className="inputid" placeholder="아이디" />
        <input type="text" className="inputpw" placeholder="비밀번호" />
        <input type="text" className="inputpw_re" placeholder="비밀번호 확인" />
        <input type="text" className="name" placeholder="이름" />
        <input type="text" className="phone" placeholder="휴대폰번호" />
        <input type="text" className="birth" placeholder="생년월일 8자리" />
        <button>가입하기</button>
      </form>
    </div>
  );
}
