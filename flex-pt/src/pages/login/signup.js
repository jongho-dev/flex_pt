import React, { useState } from "react";
import "./signup.scss";

export default function SignUpPage() {
  const checkPhone = /\d{2,3}-\d{3,4}-\d{4}/g;
  const checkBirth = /\d{6}/g;
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw_r, setPw_r] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  const regPhone = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  const regBirth = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length > 6) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  return (
    <div className="signup">
      <div className="signuplogo">회원가입</div>
      <form action="">
        <input
          type="text"
          className="inputid"
          placeholder="아이디"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="text"
          className="inputpw"
          placeholder="비밀번호"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <input
          type="text"
          className="inputpw_re"
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setPw_r(e.target.value);
          }}
        />
        <input
          type="text"
          className="name"
          placeholder="이름"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="phone"
          placeholder="휴대폰번호"
          onChange={(e) => {
            e.target.value = e.target.value.replace(
              /(\d{3})(\d{4})(\d)/,
              "$1-$2-$3"
            );
            setPhone(e.target.value);
          }}
          onInput={regPhone}
        />
        <input
          type="text"
          className="birth"
          placeholder="생년월일 6자리"
          onChange={(e) => {
            setBirth(e.target.value);
          }}
          onInput={regBirth}
        />
        <button
          onClick={async (e) => {
            console.log(checkPhone.test(phone));
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
