import { useState } from "react";

const FruitSelect = () => {
  const [value, setValue] = useState("grape");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    alert("선택한 과일" + value);
    e.preventDefault(); // preventDefault -> 원래의 기능 없애는데,
    // form의 기능이 창을 새로고침하기에 그 기능을 없애는것.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일 선택
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FruitSelect;
