import "./App.css";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import NotFound from "./pages/NotFound.jsx";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, [mockData]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />"
      </Routes>
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
