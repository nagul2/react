import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import NotFound from "./pages/NotFound.jsx";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    }

    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중 입니다.</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />"
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

// <a> 태그는 페이지 이동시 새로고침 됨 -> CSR 로 동작하지 않음
//   <div>
//     <a href="/">Home</a>
//     <a href="/new">New</a>
//     <a href="/diary">Diary</a>
//   </div>

// public 폴더 아래에 있는 이미지 불러오기
/* 
      <div>
        <img src={"/emotion1.png"} />
        <img src={"/emotion2.png"} />
        <img src={"/emotion3.png"} />
        <img src={"/emotion4.png"} />
        <img src={"/emotion5.png"} />
      </div>
   */

// 헤더, 버튼 실습
//         <Header
//     title={"Header"}
//     leftChild={<Button text={"left"} />}
//     rightChild={<Button text={"right"} />}
//   />
//   <Button
//     text={"123"}
//     onClick={() => {
//       console.log("123번 버튼 클릭");
//     }}
//   />
//   <Button
//     text={"123"}
//     type={"POSITIVE"}
//     onClick={() => {
//       console.log("123번 버튼 클릭");
//     }}
//   />
//   <Button
//     text={"123"}
//     type={"NEGATIVE"}
//     onClick={() => {
//       console.log("123번 버튼 클릭");
//     }}
//   />

// 일기 관리기능 테스트 버튼
//   <button
//     onClick={() => {
//       onCreate(new Date().getTime(), 1, "Hello");
//     }}
//   >
//     일기 추가 테스트
//   </button>
//   <button
//     onClick={() => {
//       onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다");
//     }}
//   >
//     일기 수정 테스트
//   </button>
//   <button
//     onClick={() => {
//       onDelete(1);
//     }}
//   >
//     일기 삭제 테스트
//   </button>

// mockdata
// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2026-01-29").getTime(),
//     emotionId: 1,
//     content: "1번 일기 내용",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2026-01-28").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용",
//   },
//   {
//     id: 3,
//     createdDate: new Date("2025-12-29").getTime(),
//     emotionId: 3,
//     content: "3번 일기 내용",
//   },
// ];
