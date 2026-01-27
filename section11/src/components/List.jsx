import "./List.css";
import TodoItem from "./TodoItem.jsx";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App.jsx";

const List = () => {
  // 객체로 전달하지 않았기 때문에 구조 분해 할당 문법이 아니라 그냥 변수로 받음
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredTodos = getFilteredData();

  // 첫 번째 인수: 콜백 함수, 두 번째 인수: 의존성 배열(deps)
  // useEffect 처럼 deps에 포함된 값이 변경되면 콜백 함수를 다시 실행하고 그 결과를 반환함
  // 콜백 함수를 deps를 기준으로 메모이제이션함
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;

// useMemo 사용 전 - 성능 악화

// import "./List.css";
// import TodoItem from "./TodoItem.jsx";
// import { useState } from "react";

// const List = ({ todos, onUpdate, onDelete }) => {
//   const [search, setSearch] = useState("");

//   const onChangeSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const getFilteredData = () => {
//     if (search === "") {
//       return todos;
//     }
//     return todos.filter((todo) =>
//       todo.content.toLowerCase().includes(search.toLowerCase()),
//     );
//   };

//   const filteredTodos = getFilteredData();

//   const getAnalyzedData = () => {
//     console.log("getAnalyzedData 호출");
//     // 전체 할일 개수
//     const totalCount = todos.length;
//     // 완료된 할일 개수
//     const doneCount = todos.filter((todo) => todo.isDone).length;
//     // 완료되지 않은 할일 개수
//     const notDoneCount = totalCount - doneCount;

//     // filter 메서드는 배열의 전체 요소를 순회 함 -> 할일의 갯수가 많아질 수록 성능이 악화됨 -> 이 함수를 불필요하게 렌더링 하지 않도록 해야함

//     return {
//       totalCount,
//       doneCount,
//       notDoneCount,
//     };
//   };

//   // List 컴포넌트가 리렌더링 될 때마다 계속 새롭게 호출 됨
//   // search 바에 검색한 단어마다 계속 리렌더링 됨 -> 낭비(새로운 일정이 추가, 수정, 삭제 될 때만 호출 되는 것이 맞음)
//   const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

//   return (
//     <div className="List">
//       <h4>Todo List 🌱</h4>
//       <div>
//         <div>total: {totalCount}</div>
//         <div>done: {doneCount}</div>
//         <div>not done: {notDoneCount}</div>
//       </div>
//       <input
//         value={search}
//         onChange={onChangeSearch}
//         placeholder="검색어를 입력하세요"
//       />
//       <div className="todos_wrapper">
//         {filteredTodos.map((todo) => {
//           return (
//             <TodoItem
//               key={todo.id}
//               {...todo}
//               onUpdate={onUpdate}
//               onDelete={onDelete}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default List;
