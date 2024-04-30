import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); // 상태 관리
  const onClickEnter = () => setMessage("안녕하세요~");
  const onClickLeave = () => setMessage("안녕히 가세요~");
  const [val, setColor] = useState("black"); // 상태 관리
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: val }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
