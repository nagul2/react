import "./Main.css"; // CSS 파일을 불러올 때는 import 문에 경로만 입력해줘도 자동으로 적용 됨

const Main = () => {
  const user = {
    name: "오소리",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div className="login">로그인</div>;
  }
};

export default Main;

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
// 2. 숫자, 문자열, 배열 값만 렌더링 됨
// 3. 모든 태그는 닫혀있어야 함
// 4. 최상위 태그는 반드시 하나여야만 함

/**
 * 실습 내역
 */
// const Main = () => {
//   const number = 10;
//   const obj = {
//     a: 1,
//   };

//   return (
//     <>
//       <h1>main</h1>
//       <h2>{number} </h2>
//       <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
//       {10}
//       {[1, 2, 3]}
//       {obj.a}
//       <img />
//     </>
//   );
// };

// const Main = () => {
//   const user = {
//     name: "오소리",
//     isLogin: false,
//   };

//   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
//   if (user.isLogin) {
//     return <div>로그아웃</div>;
//   } else {
//     return <div>로그인</div>;
//   }
// };

// const Main = () => {
//   const user = {
//     name: "오소리",
//     isLogin: true,
//   };

//   if (user.isLogin) {
//     return (
//       <div
//         style={{
//           backgroundColor: "red",
//           borderBottom: "5px solid blue",
//         }}
//       >
//         로그아웃
//       </div>
//     );
//   } else {
//     return <div>로그인</div>;
//   }
// };

// export default Main;
