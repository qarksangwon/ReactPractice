import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개 페이지</Link>
        </li>
        <li>
          <Link to="/profile/frontend">Front-end 프로필</Link>
        </li>
        <li>
          <Link to="/profile/backend">Back-end 프로필</Link>
        </li>
        <li>
          <Link to="/age/20">20살</Link>
        </li>
        <li>
          <Link to="/age/25">25살</Link>
        </li>
        <li>
          <Link to="/articles">게시판 목록</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
