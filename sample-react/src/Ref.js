import { useRef } from "react";

const CreateRef = () => {
  // 여기의 inputRef로 useRef(null)로 선언하고,
  // 밑에서 input의 ref를 inputRef로 만들어 줘서 ref 설정함
  const inputRef = useRef(null);
  const handleFocus = () => {
    // handleFocus 라는 함수가 불러지면,
    // 해당 위치의 disabled 속성을 false로 하고,
    // focus를 한다.
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  return (
    <>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </>
  );
};

export default CreateRef;
