import { useParams } from "react-router-dom";

const Age = () => {
  const { age } = useParams();
  return (
    <div>
      <h1>전달 받은 나이 : {age}</h1>
    </div>
  );
};
export default Age;
