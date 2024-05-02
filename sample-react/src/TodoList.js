import { useState } from "react";

const TodoList = () => {
  //useState로 초기값을 배열로, 빈값으로, 5로 만들어서 집어넣음.
  const [names, setNames] = useState([
    { id: 1, text: "HTML" },
    { id: 2, text: "CSS" },
    { id: 3, text: "JS" },
    { id: 4, text: "React" },
  ]);
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

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  // 이렇게 되면, onChange 즉 input안의 값이 변경될 때 마다 onChange함수가 불러지고,
  // onChange함수는 setInputText(e.target.value) 즉 이벤트가 발생한 타겟의 밸류,
  // 즉 input 안의 값으로 set이 계속 이뤄지는것!
  // input 안에 value={inputText}가 있는 이유는 onClick이후
  // 값이 비워질 때 이 변경된 빈 값을 input에 value로 넣어주기 위함.
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default TodoList;
