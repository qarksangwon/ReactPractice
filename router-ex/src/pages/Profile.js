import { useParams } from "react-router-dom";
// useParams : 리액트 라우터에서 URL 파라미터 값 가져오는 훅

const data = {
  frontend: {
    name: "박상원",
    description: "리액트 공부중",
  },
  backend: {
    name: "상원",
    description: "스프링 부트 공부중",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.name]; // 키를 넣어서 값이 나온다, [키]
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
