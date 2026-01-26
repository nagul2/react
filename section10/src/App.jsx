import "./App.css";
import { useReducer, useRef, useCallback } from "react";

import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // 첫 번재 인수: 최적화 하고 싶은 함수, 두 번째 인수: deps
  // deps가 변경되었을 때 콜백 함수를 그대로 생성해서 반환함 -> 함수를 메모이제이션
  // deps가 빈 배열이면 컴포넌트가 마운트 될 때에(최초 한 번)만 생성하고 이후에는 리렌더링이 발생해도 함수를 새롭게 생성하지 않음
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;

// 최적화 전 코드

//   const onCreate = (content) => {
//     dispatch({
//       type: "CREATE",
//       data: {
//         id: idRef.current++,
//         isDone: false,
//         content: content,
//         date: new Date().getTime(),
//       },
//     });
//   };

//   const onUpdate = (targetId) => {
//     dispatch({
//       type: "UPDATE",
//       targetId: targetId,
//     });
//   };

//   const onDelete = (targetId) => {
//     dispatch({
//       type: "DELETE",
//       targetId: targetId,
//     });
//   };
