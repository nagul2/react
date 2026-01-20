import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;

// // 화살표 함수로 만든 컴포넌트
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };

// // 함수 표현식으로 만든 컴포넌트
// function Header2() {
//   return (
//     <header>
//       <h1>header2</h1>
//     </header>
//   );
// }

// 컴포넌트 Import
// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// Props
// function App() {
//   return (
//     <>
//       <Button text={"메일"} color={"red"} />
//       <Button text={"카페"} />
//       <Button text={"블로그"} />
//     </>
//   );
// }

// Props - 객체
// function App() {
//   const ButtonProps = {
//     text: "메일",
//     color: "red",
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   return (
//     <>
//       <Button {...ButtonProps} />
//       {/* <Button text={"red"} color={"color"} a={1} b={2} c={3} /> */}

//       <Button text={"카페"} />
//       <Button text={"블로그"} />
//     </>
//   );
// }

// State 상태 관리하기
// function App() {
//   const [count, setCount] = useState(0);
//   const [light, setLight] = useState("OFF");
//   return (
//     <>
//       <div>
//         <h1>{light}</h1>
//         <button
//           onClick={() => {
//             setLight(light === "ON" ? "OFF" : "ON");
//           }}
//         >
//           {light === "ON" ? "전구 끄기" : "전구 켜기"}
//         </button>
//       </div>
//       <div>
//         <h1>{count}</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           +
//         </button>
//       </div>
//     </>
//   );
// }
