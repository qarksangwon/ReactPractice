import { Link, useNavigate, useParams } from "react-router-dom";

const Age = () => {
  const navigator = useNavigate();
  const { age } = useParams();
  return (
    <div>
      <h1>전달 받은 나이 : {age}</h1>
      <Link to="/about">소개</Link>
      <p onClick={() => navigator(-1)}>이동</p>
    </div>
  );
};
export default Age;
