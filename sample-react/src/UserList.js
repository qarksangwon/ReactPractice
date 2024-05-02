//새 User라는 컴포넌트를 만듬.
// 이는 다른 컴포넌트에서 호출할 때 props를 받아
// 받은 props의 user정보를 렌더링하는 컴포넌트
const User = (props) => {
  return (
    <div>
      <b>{props.user.userName}</b> <span>{props.user.email}</span>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: "박재훈",
      email: "allright@gmail.com",
    },
    {
      id: 200,
      userName: "크리스 범스테드",
      email: "bum@gmail.com",
    },
    {
      id: 300,
      userName: "박상원",
      email: "sangwon@gmail.com",
    },
  ];
  // 객체 배열을 미리 만들어 두고,
  // 각 배열을 불러 올 수 있는 컴포넌트를 만들어
  // 해당 컴포넌트에 props로 배열의 값을 전달해 user 컴포넌트를 렌더링하는 방식
  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
};

export default UserList;
