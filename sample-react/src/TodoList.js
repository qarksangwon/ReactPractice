import "./App.css";
import { useEffect, useState } from "react";

const TodoList = () => {
  //useState로 초기값을 배열로, 빈값으로, 5로 만들어서 집어넣음.
  const [names, setNames] = useState(() => {
    // Try to retrieve names from localStorage, or use the initial array if not present
    const storedNames = localStorage.getItem("names");
    // storedNames라는 이름으로 로컬 스토리지의 names라는 이름의 아이템을 가져와서
    // 여기서 storedNames라는 로컬 스토리지에 값이 있으면
    // 해당 값을 JSON.parse로 가져오는것.(JSON으로 저장돼 있기 때문에 파싱.)
    // 그게 아니라면 뒤의 기본 default값으로 설정해주면 된다.
    return storedNames
      ? JSON.parse(storedNames)
      : [
          { id: 1, text: "HTML 연습" },
          { id: 2, text: "CSS 복습" },
          { id: 3, text: "자바스트립트 이해" },
          { id: 4, text: "리액트프로젝트" },
        ];
  });

  // 내용 변경 시 names라는 이름의 JSON 데이터로 코드의 names 배열을 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // onClick 함수를 만듬, 이 함수가 실행 될 때
    // 새로운 nextNames 배열을 만들어 현재 useState로 만들어진 names에
    // id값이 nextId, text값이 inputText인 객체를 concat 즉 붙여넣어서
    // 새 배열을 만듬.
    // 위에서 id값을 지정하는 nextId의 초기값을 5로 설정해줘서 한번 돌리고,
    // 그다음부터 값 만들고 id값을 1씩 증가시켜서 하나씩 증가되게.
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
    // 이후 여기서 세팅이 다 끝내고 inputText를 다시 비워줘서
    // 사용자가 onClick으로 새 데이터를 추가했으면 다시 input안의 값을 비워주는 역할
  };

  // 삭제하는 기능도 만들어보자.
  // filter를 이용해 id값을 받아서 names 배열의 id값과 id값이 같은 것만
  // filter로 없앤다. 그 후 setNames로 names의 state를 바꿔 렌더링
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  // onDoubleClick 즉 doubleClick이 일어났을 때 해당 id를 리스트에서 없애는
  // onRemove를 실행시키는 이벤트를 등록.
  // 여기서 () => onRemove(name.id) 를 사용하는 이유는
  // 이벤트 발생 시 새로운 익명 함수 () 를 호출하는거고,
  // () 익명함수가 onRemove()를 호출하는 형태이다.
  // 즉 1. 이벤트 발생 시 익명함수를 만듬
  // 2. 이 익명함수가 onRemove를 호출함. 방식인것.
  // 바로 onRemove(name.id)사용 해당 함수를 등록할 때 onRemove(name.id)가 바로 실행됨.
  // 이는 상수로 만든 함수이기 때문에, 매개변수를 전달할 때 ()를 사용함으로
  // 해당 함수가 등록될 때 바로 실행되기 때문에 익명 함수로 만들어야 하는 것.
  // 기존 다른 언어의 방식이나 function onRemove () {} 식으로 만든 함수라면 위처럼 사용 가능하다.
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  // 이렇게 되면, onChange 즉 input안의 값이 변경될 때 마다 onChange함수가 불러지고,
  // onChange함수는 setInputText(e.target.value) 즉 이벤트가 발생한 타겟의 밸류,
  // 즉 input 안의 값으로 set이 계속 이뤄지는것!
  // input 안에 value={inputText}가 있는 이유는 onClick이후
  // 값이 비워질 때 이 변경된 빈 값을 input에 value로 넣어주기 위함.

  return (
    <>
      <p className="title-TodoList">To do List</p>
      <p>삭제는 항목을 더블클릭</p>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default TodoList;
