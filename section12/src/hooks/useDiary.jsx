import { DiaryStateContext } from "../App.jsx";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 다양한 리액트 훅을 사용하는 모드를 별도의 함수로 추출하기 위해 커스텀 훅을 작성 -> 리액트 함수는 일반 자바스크립트 함수에서는 못불러오기 때문임
// 현재 일기의 정보들을 꺼내고 잘못된 페이지로 이동할 경우 안내문구 출력 및 Home으로 이동
// 함수의 이름앞에 'use'라는 접두사가 붙으면 커스텀 훅이 됨

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  // 현재 일기의 정보들을 꺼내는 동작을 useEffect를 통해서 활용
  useEffect(() => {
    const findDiaryItem = data.find((item) => String(item.id) === String(id));

    // 잘못된 페이지로 갈 경우 경고창 띄우고 Home으로 이동
    if (!findDiaryItem) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiaryItem(findDiaryItem);
  }, [id, nav]);

  return currentDiaryItem;
};

export default useDiary;
