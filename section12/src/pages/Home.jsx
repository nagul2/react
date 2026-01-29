import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
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
