import "./App.css";
//import Greeting from "./Greeting";
//import Welcome from "./Welcome";
// import Section from "./Section";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent />
      <MyComponent name="박상원" age={25} />
      <MyComponent>
        <h2>여기는 children 공간!</h2>
      </MyComponent>
    </>
  );
}

export default App;
