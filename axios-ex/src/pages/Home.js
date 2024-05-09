import { UserContext } from "../context/UserStore";
import { useContext } from "react";

const Home = () => {
  const context = useContext(UserContext);
  const { userId, password } = context;
  return (
    <>
      <p>메인 페이지</p>
      <p>로그인 정보</p>
      <p>ID : {userId}</p>
      <p>Password : {password}</p>
    </>
  );
};

export default Home;
