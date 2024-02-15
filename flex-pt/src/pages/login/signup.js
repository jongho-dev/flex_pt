import React from "react";
import "./signup.scss";

export default function SignUpPage() {
  return (
    <div className="signup">
      <div className="signuplogo">회원가입</div>
      <form action="">
        <div>
          <input type="checkbox" />
          <span>이용약관 동의</span>
          <span className="red">(필수)</span>
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
        <div>
          <input type="checkbox" />
          <span>개인정보 수집 및 이용 동의</span>
          <span className="red">(필수)</span>
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
        <div className="btns">
          <a href="/login" className="cancel">
            취소
          </a>
          <a href="/signupnext" className="next">
            다음
          </a>
        </div>
      </form>
    </div>
  );
}
