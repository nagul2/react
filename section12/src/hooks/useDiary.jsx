import { DiaryStateContext } from "../App.jsx";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const findDiaryItem = data.find((item) => String(item.id) === String(id));

    if (!findDiaryItem) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiaryItem(findDiaryItem);
  }, [id, nav]);

  return currentDiaryItem;
};

export default useDiary;
