const MapTest = () => {
  const names = [
    { firstName: "재훈", lastName: "박" },
    { firstName: "성엽", lastName: "장" },
    { firstName: "Chris", lastName: "Bumstead" },
  ];

  // map을 통해 fullNames 에 <div>~</div> 로 구성된
  // 새로운 배열을 만들어서 해당 배열을 리턴하면 된다.
  let fullNames = names.map((name) => (
    <div>
      {name.firstName} {name.lastName}
    </div>
  ));
  //여기서 names로 조건부 렌더링을 하는 것은
  // 만약 데이터가 없으면 map 함수가 실행되면 안되기 때문에
  // 데이터가 없으면 만들지 않게 하기 위해 조건부 렌더링 하는 것.
  return <>{names && fullNames}</>;
};

export default MapTest;
