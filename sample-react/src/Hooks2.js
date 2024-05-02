import { useState } from "react";

const HookPractice = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    position: "",
    company: "",
    addr: "",
    email: "",
    tel: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const SetInput = () => {
    return (
      <div>
        <p>이름 : {userInfo.name}</p>
        <p>직책 : {userInfo.position}</p>
        <p>회사명 : {userInfo.company}</p>
        <p>주소 : {userInfo.addr}</p>
        <p>이메일 : {userInfo.email}</p>
        <p>전화번호 : {userInfo.tel}</p>
      </div>
    );
  };
  const [show, setShow] = useState(false);
  const btnClick = () => {
    setShow(true);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          name="name"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="직책을 입력하세요"
          name="position"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="회사명을 입력하세요"
          name="company"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="주소를 입력하세요"
          name="addr"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="전화번호를 입력하세요"
          name="tel"
          onChange={onChange}
        />
        <button onClick={btnClick}>제출</button>
        {show && <SetInput />}
      </div>
    </>
  );
};

export default HookPractice;
