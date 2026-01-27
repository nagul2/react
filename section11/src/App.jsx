import "./App.css";
import { useReducer, useRef, createContext, useMemo } from "react";

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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useMemo로 감싼 시점에서부터는 useCallback을 하지 않아도 되므로 원상 복구
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  // useMemo의 deps를 빈배열로 적용하여 사용하여 컴포넌트가 마운트 된 이후에는 다시 생성되지 않도록 설정
  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
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

// 최적화 후, Context 분리 전 코드

// import "./App.css";
// import { useReducer, useRef, useCallback, createContext } from "react";

// import Header from "./components/Header.jsx";
// import Editor from "./components/Editor.jsx";
// import List from "./components/List.jsx";

// const mockData = [
//   {
//     id: 0,
//     isDone: false,
//     content: "React 공부하기",
//     date: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "빨래하기",
//     date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "노래 연습하기",
//     date: new Date().getTime(),
//   },
// ];

// function reducer(state, action) {
//   switch (action.type) {
//     case "CREATE":
//       return [action.data, ...state];
//     case "UPDATE":
//       return state.map((item) =>
//         item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
//       );
//     case "DELETE":
//       return state.filter((item) => item.id !== action.targetId);
//     default:
//       return state;
//   }
// }

// // 컴포넌트 리렌더링 할 때마다 Context가 다시 생성될 필요가 없기 때문에 특수한 경우가 아니면 보통 컴포넌트 밖에서 생성함
// // 생성된 컨텍스트의 프로퍼티 중 Provider 프로퍼티만 알면 됨
// // 컨텍스트가 공급할 데이터를 설정하거나, 컨텍스트에 데이터를 공급받을 컴포넌트들을 성정하기 위한 프로퍼티이자 컴포넌트임
// export const TodoContext = createContext();

// function App() {
//   const [todos, dispatch] = useReducer(reducer, mockData);
//   const idRef = useRef(3);

//   const onCreate = useCallback((content) => {
//     dispatch({
//       type: "CREATE",
//       data: {
//         id: idRef.current++,
//         isDone: false,
//         content: content,
//         date: new Date().getTime(),
//       },
//     });
//   }, []);

//   // 첫 번재 인수: 최적화 하고 싶은 함수, 두 번째 인수: deps
//   // deps가 변경되었을 때 콜백 함수를 그대로 생성해서 반환함 -> 함수를 메모이제이션
//   // deps가 빈 배열이면 컴포넌트가 마운트 될 때에(최초 한 번)만 생성하고 이후에는 리렌더링이 발생해도 함수를 새롭게 생성하지 않음
//   const onUpdate = useCallback((targetId) => {
//     dispatch({
//       type: "UPDATE",
//       targetId: targetId,
//     });
//   }, []);

//   const onDelete = useCallback((targetId) => {
//     dispatch({
//       type: "DELETE",
//       targetId: targetId,
//     });
//   }, []);

//   // 컨텍스트의 데이터를 공급받고자 하는 컴포넌트들을 감싸도록 Provider를 렌더링 해주면 됨
//   // 공급할 데이터는 value라는 Props로 전달해 주면 됨
//   return (
//     <>
//       <div className="App">
//         <Header />
//         <TodoContext.Provider
//           value={{
//             todos,
//             onCreate,
//             onUpdate,
//             onDelete,
//           }}
//         >
//           <Editor />
//           <List />
//         </TodoContext.Provider>
//       </div>
//     </>
//   );
// }

// export default App;
