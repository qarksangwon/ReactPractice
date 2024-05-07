import { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  border: 0px;
  padding: 0px;
  margin: 30px 10px;
  width: 150px;
  height: 40px;
  background: ${(props) => props.color || "black"};
  color: white;
`;

const Div = styled.div`
  width: 500px;
  height: 300px;
  margin: 0px 10px;
  border-radius: 20px;
  background: ${(p) => p.color || "green"};
`;

const StyledComponent2 = () => {
  const [color, setColor] = useState("green");
  const changeColor = (c) => {
    setColor(c);
  };
  return (
    <>
      <div>
        <Button color="green" onClick={() => changeColor("green")}>
          Green
        </Button>
        <Button color="orange" onClick={() => changeColor("orange")}>
          Orange
        </Button>
        <Button color="purple" onClick={() => changeColor("purple")}>
          Purple
        </Button>
      </div>
      <Div color={color}></Div>
    </>
  );
};

export default StyledComponent2;
