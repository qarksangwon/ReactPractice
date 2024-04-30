import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    //정한 간격으로 함수 호출
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>현재 시간 표시.</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
