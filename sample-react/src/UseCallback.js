import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;
  // 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환 합니다.
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  // 컴포넌트 이름은 대문자
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  //useCallback은 첫 파라미터에 함수, 두 번째 파라미터엔 배열
  // 배열에는 어떤 값이 바뀔 때 함수를 새로 생성할 것인지 명시.
  // 위의 onChange처럼 빈 배열이면, 렌더링 될 때 만들어진 함수를
  // 계속해서 재사용하며, onInsert처럼 number와 list를 넣으면 input 내용이 바뀔 때
  // number가 바뀌고 input 버튼을 누를 때 list에 새로운 항목이 추가 될 때
  // 새로 만들어진 함수를 사용하게 된다.
  const onInsert = useCallback(() => {
    console.log("onInsert");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};
export default Average;
