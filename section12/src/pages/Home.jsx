const Home = () => {
  return <div>Home</div>;
};

export default Home;

// QueryString 실습
// import { useSearchParams } from "react-router-dom";

// const Home = () => {
//   // params: QueryString으로 전달한 변수와 값
//   // setParams: QueryString의 값을 변경할 수 있는 함수
//   const [params, setParams] = useSearchParams();

//   return (
//     <div>
//       Home
//       <div>{params.get("key")}</div>
//     </div>
//   );
// };

// export default Home;
