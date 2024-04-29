const Welcome = (props) => {
  return (
    <h2>
      Hello, {props.name}, 종목은{" "}
      {props.title === "클래식 피지크" ? "클피" : "뭔종목이여"}, 순위는{" "}
      {props.rank}등!
    </h2>
  );
};

export default Welcome;
