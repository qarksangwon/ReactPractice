import { Link, useLocation, Navigate } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const id = localStorage.getItem("ID");
  if (id !== "psw6291") {
    return <Navigate to="/Login" replace={true}></Navigate>;
  }
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <p>쿼리 스트링 : {location.search}</p>
      <Link to="/">홈 페이지로</Link>
    </div>
  );
};
export default About;
