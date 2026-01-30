import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App.jsx";

import useDiary from "../hooks/useDiary.jsx";

import Header from "../components/Header.jsx";
import Editor from "../components/Editor.jsx";
import Button from "../components/Button.jsx";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요.")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;

// 지금처럼 작성되면 팝업창은 뜨지만 콘솔창에 useEffect를 통해 컴포넌트가 먼저 렌더링 되어야 한다는 오류문구와 함께 Home 화면으로 돌아가지 않음
// 네비게이터 함수는 컴포넌트가 마운트 된 이후에 사용 가능함 -> 네비게이터 함수 자체가 BrowserRouter 컴포넌트에서 공급하는 기능이기 때문
// getCurrentDiaryItem 함수는 Edit 컴포넌트가 렌더링 되었을 때 즉시 호출되기 때문에 컴포넌트들이 화면에 그려지기 전(마운트 되기 전)이므로 네비게이트 함수가 동작할 수 없음

// 기존에 작성했던 nav 함수는 이벤트 핸들러에 등록된 함수이기 때문에 이벤트가 발생되는 시점은 모두 컨포넌트가 렌더링 된 이후시점이기 때문에 에러가 발생하지 않았음

// 현재 일기의 정보들을 꺼내는 함수
//   const getCurrentDiaryItem = () => {
//     const curruentDiaryItem = data.find(
//       (item) => String(item.id) === String(params.id),
//     );

//     // 잘못된 페이지로 갈 경우 경고창 띄우고 Home으로 이동
//     if (!curruentDiaryItem) {
//       alert("존재하지 않는 일기입니다.");
//       nav("/", { replace: true });
//     }

//     return curruentDiaryItem;
//   };

//   const currentDiaryItem = getCurrentDiaryItem();

// 코드 설명
//   // 삭제하기 전 안내 문구를 띄우고 삭제
//   const onClickDelete = () => {
//     // window.confirm : 브라우저의 내장 기능을 사용하는 함수 -> 확인, 취소 버튼이 달려있는 팝업창을 띄움,
//     // 확인 선택시 true, 취소 선택 시 false가 반환됨
//     if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요.")) {
//       onDelete(params.id);
//       nav("/", { replace: true });
//     }
//   };

//   // 작성완료 버튼 -> onUpdate 동작
//   const onSubmit = (input) => {
//     if (window.confirm("일기를 정말 수정할까요?")) {
//       onUpdate(
//         params.id,
//         input.createdDate.getTime(),
//         input.emotionId,
//         input.content,
//       );
//       nav("/", { replace: true });
//     }
//   };
