import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const ButtonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...ButtonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}></Button>
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

// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Button text={"메일"} color={"red"} />
//       <Button text={"카페"} />
//       <Button text={"블로그"} />
//     </>
//   );
// }

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
