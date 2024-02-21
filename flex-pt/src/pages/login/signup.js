import React, { useState } from "react";
import "./signup.scss";

export default function SignUpPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw_r, setPw_r] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  // 아이디 중복 체크
  const regId = /^[A-Za-z0-9]{6,}$/;
  const [idcheckdone, setIdcheckdone] = useState(false);
  const [idchecktxt, setIdchecktxt] = useState("");
  const [idtxtcolor, setIdtxtcolor] = useState("");

  const idCheck = (e) => {
    fetch(
      "https://port-0-flex-pt-backend-ghdys32bls5ufup0.sel5.cloudtype.app/signupidcheck",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIdchecktxt("이미 사용중인 아이디입니다.");
          setIdtxtcolor("red");
          setIdcheckdone(false);
        } else {
          setIdchecktxt("사용 가능한 아이디입니다.");
          setIdtxtcolor("yellowgreen");
          setIdcheckdone(true);
        }
      });
  };

  // 비밀번호 체크

  const regPw = /^[A-Za-z0-9]{8,}$/;
  const [pwchecktxt, setPwchecktxt] = useState("");
  const [pwtxtcolor, setPwtxtcolor] = useState("");

  const pwCheck = (e) => {
    if (regPw.test(pw)) {
      setPwchecktxt("사용 가능한 비밀번호입니다.");
      setPwtxtcolor("yellowgreen");
    } else {
      setPwchecktxt("비밀번호를 다시 확인해주세요.");
      setPwtxtcolor("red");
    }
  };

  // 기타 정보
  const regName = /^[a-zA-Z가-힣]+$/;

  const regPhone = /\d{2,3}-\d{3,4}-\d{4}/g;
  const regBirth = /\d{6}/g;

  const changeInputphone = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  const changeInputbirth = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length > 6) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  // 회원가입 제출
  const onSubmit = (e) => {
    if (
      idcheckdone &&
      regPw.test(pw) &&
      pw == pw_r &&
      regName.test(name) &&
      regPhone.test(phone) &&
      regBirth.test(birth)
    ) {
      fetch(
        "https://port-0-flex-pt-backend-ghdys32bls5ufup0.sel5.cloudtype.app/signupdone",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userid: id,
            pw: pw,
            name: name,
            phone: phone,
            birth: birth,
          }),
        }
      ).then((res) => {});
      alert("가입이 완료되었습니다.");
    } else {
      e.preventDefault();
      alert("다시 확인해주세요.");
    }
  };

  return (
    <div className="signup">
      <form action="/login" onSubmit={onSubmit}>
        <div className="signuplogo">회원가입</div>
        <h4>아이디</h4>
        <div className="graytext">
          영문자, 숫자를 포함한 6자 이상의 아이디를 입력해주세요.
        </div>
        <div className="idarea">
          <input
            type="text"
            className="inputid"
            placeholder="아이디"
            onChange={(e) => {
              setIdcheckdone(false);
              setId(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (regId.test(id)) {
                idCheck();
              }
            }}
          >
            중복 확인
          </button>
        </div>
        <div className="idtext" style={{ color: idtxtcolor }}>
          {idchecktxt}
        </div>
        <h4>비밀번호</h4>
        <div className="graytext">
          영문자, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </div>
        <input
          type="password"
          className="inputpw"
          placeholder="비밀번호"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          onBlur={pwCheck}
        />
        <div className="pwchecktext" style={{ color: pwtxtcolor }}>
          {pwchecktxt}
        </div>
        <h4 className="pw_rh">비밀번호 확인</h4>
        <input
          type="password"
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
          onInput={changeInputphone}
        />
        <h4>생년월일</h4>

        <input
          type="text"
          className="birth"
          placeholder="생년월일 6자리"
          onChange={(e) => {
            setBirth(e.target.value);
          }}
          onInput={changeInputbirth}
        />
        <button>가입하기</button>
      </form>
    </div>
  );
}
