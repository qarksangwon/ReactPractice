import "./App.css";
// JSX 문법 규칙
// 1. HTML 태그 사용 시 닫힘 태그가 반드시 존재 해야함.
// 2. 컴포넌트가 반환 될 때 태그는 한개여야 한다. -> 하나로 묶어서 반환해줘야 한다.
// -> 가상의 <> </> 로 묶으면 여러 태그를 한번에 보낼 수 있음.
// 3. 중괄호로 js 코드 바인딩 가능
// 4. 조건부 연산자 : {} 내에서 조건부 연산자 사용 가능.
// 5. 조건부 렌더링 : && 연산자 특징 활용
// 6. 인라인 스타일링 : 기존 HTML 인라인 방식에서 객체를 집어넣는 방식으로 바뀜.

function App() {
  const name = "리액트";
  const styleC = {
    backgroundColor: "#222",
    color: "royalblue",
    fontSize: "2em",
  };
  return <p style={styleC}>인라인 스타일링입니다</p>;
}

export default App;
