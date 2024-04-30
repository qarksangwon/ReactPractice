import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("안녕하세요");
  const changeMsg = (e) => {
    setMessage(e.target.value);
  };
  const [userName, setUserName] = useState("사용자");
  const changeUN = (e) => {
    setUserName(e.target.value);
  };
  const onClick = () => {
    alert(userName + " : " + message);
    setUserName("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        onChange={changeUN}
        value={userName}
      />
      <br />
      <input
        type="text"
        placeholder="입력 하시기 바랍니다."
        onChange={changeMsg}
        value={message}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
