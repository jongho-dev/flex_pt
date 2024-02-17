import React, { useState } from "react";
import "./signup.scss";

export default function SignUpPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw_r, setPw_r] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  const handleInputId = (e) => {
    setId(e.target.value);
  };
  const handleInputPw = (e) => {
    setPw(e.target.value);
  };
  const handleInputPw_r = (e) => {
    setPw_r(e.target.value);
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputPhone = (e) => {
    setPhone(e.target.value);
  };
  const handleInputBirth = (e) => {
    setBirth(e.target.value);
  };

  const checkBirth = /\d{8}/;
  return (
    <div className="signup">
      <div className="signuplogo">회원가입</div>
      <form action="">
        <input
          type="text"
          className="inputid"
          placeholder="아이디"
          onChange={handleInputId}
        />
        <input
          type="text"
          className="inputpw"
          placeholder="비밀번호"
          onChange={handleInputPw}
        />
        <input
          type="text"
          className="inputpw_re"
          placeholder="비밀번호 확인"
          onChange={handleInputPw_r}
        />
        <input
          type="text"
          className="name"
          placeholder="이름"
          onChange={handleInputName}
        />
        <input
          type="text"
          className="phone"
          placeholder="휴대폰번호"
          onChange={handleInputPhone}
        />
        <input
          type="text"
          className="birth"
          placeholder="생년월일 8자리"
          onChange={handleInputBirth}
        />
        <button
          onClick={async (e) => {
            console.log(checkBirth.test(birth));
            e.preventDefault();
          }}
        >
          가입하기
        </button>
      </form>
    </div>
  );
}
