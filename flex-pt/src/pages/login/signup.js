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
      <form action="">
        <div className="signuplogo">회원가입</div>
        <h4>아이디</h4>

        <div className="idarea">
          <input
            type="text"
            className="inputid"
            placeholder="아이디"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <button>중복 확인</button>
        </div>
        <div className="idtext">사용가능한 아이디입니다.</div>
        <h4>비밀번호</h4>
        <div className="pwtext">
          영문자, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </div>
        <input
          type="text"
          className="inputpw"
          placeholder="비밀번호"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <h4>비밀번호 확인</h4>
        <input
          type="text"
          className="inputpw_re"
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setPw_r(e.target.value);
          }}
        />
        <h4 className="nameh">이름</h4>
        <input
          type="text"
          className="name"
          placeholder="이름"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h4>휴대폰번호</h4>
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
        <h4>생년월일</h4>

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
