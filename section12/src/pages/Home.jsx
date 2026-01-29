import { useState, useContext } from "react";
import { DiaryStateContext } from "../App.jsx";

import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  // 월에 +1을 하고 일에 0을 넣으면 해당월 이전달의 마지막 날짜로 설정됨
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime,
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
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
