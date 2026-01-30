import { useParams, useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/get-stringed-date";

import useDiary from "../hooks/useDiary.jsx";

import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const currentDiaryItem = useDiary(params.id);

  if (!currentDiaryItem) {
    return <div>데이터 로딩중 ... !</div>;
  }

  const { createdDate, emotionId, content } = currentDiaryItem;

  const titleDate = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${titleDate} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
