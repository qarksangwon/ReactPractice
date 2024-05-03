import { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 호출됨");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return parseInt(sum / numbers.length);
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = (e) => setNumber(e.target.value);
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  // 첫 번째 매개변수엔 함수, 두 번째 매개변수엔 의존성 배열. 즉 값이 들어감
  // 즉 이 useMemo가 언제 다시 함수가 실행돼야 할 지, 즉 언제 다시 계산할 지
  // 두 번째 인자로 온 값이 변경될 때로 타이밍을 정한다.
  // 즉 여기선 list 배열의 값이 변경 될 때 getAverage 실행. 변경 전까진 이전 값 사용.
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <div>
        <input value={number} onChange={onChange} />
        <button onClick={onInsert}>등록</button>
        <ul>
          {list.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <div>
          <b>평균 값 :</b>
          {avg}
        </div>
      </div>
    </>
  );
};

export default Average;
