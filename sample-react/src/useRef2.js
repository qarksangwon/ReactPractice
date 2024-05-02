import { useEffect, useRef } from "react";

const ExComponent = () => {
  const myBtnRef = useRef(null);
  useEffect(() => {
    if (myBtnRef.current) {
      myBtnRef.current.innerText = "클릭";
    }
  }, []);

  // 컴포넌트 내부 변수를 useRef 사용해서 값 유지
  // 컴포넌트 내부에서 변수를 사용해야 할 때에는 useRef를 사용해야 한다.
  const count = useRef(0);

  console.log("화면 렌더링 확인");
  const handleClick = () => {
    count.current += 1;
    alert(`클릭 횟수 : ${count.current}`);
  };

  return (
    <div>
      <button ref={myBtnRef} onClick={handleClick}>
        초기 상태
      </button>
    </div>
  );
};

export default ExComponent;
