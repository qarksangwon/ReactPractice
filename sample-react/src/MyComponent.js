const MyComponent = (props) => {
  const { name, age, children } = props;
  return (
    <div>
      안녕하세요. 제 이름은 {name} 입니다. 나이는 {age}, {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "사용자",
  age: 0,
};

export default MyComponent;
