import React, { useState } from "react";

function RadioButton() {
  const [selectedValue, setSelectedValue] = useState("apple");

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor="apple">
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
        사과
      </label>
      <br />
      <label htmlFor="orange">
        <input
          type="radio"
          name="fruits"
          id="orange"
          value="orange"
          onChange={handleChange}
        />
        오렌지
      </label>
      <br />
      <label htmlFor="strawberry">
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
        딸기
      </label>
      <br />
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}

export default RadioButton;
