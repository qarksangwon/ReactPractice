const IterationSample = () => {
  const seasons = ["봄", "여름", "가을", "겨울"];
  // 키값 넣어주는 것 중요함.
  const nameList = seasons.map((season) => <li key={season}>{season}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
