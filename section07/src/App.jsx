import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 컴포넌트의 라이프 사이클
  // 1. 마운트 : 탄생
  // 의존성 배열에 빈 배열을 넣으면 콜백함수가 마운트 될 때만 실행 됨
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  // 의존성 배열을 생략하면 마운트 될 때 한 번 실행 된 다음에 리렌더링 될 때마다 실행 됨
  useEffect(() => {
    console.log("update");
  });

  // 2-1. 컴포넌트가 마운트 되고나서 업데이트가 되는 순간에만 콜백함수를 실행하고 싶을 때에는 현재 컴포넌트가 마운트가 되었는지 여부를 체크하는 변수를 만들어서 활용하면 됨
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update - update only");
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple counter</h1>
      <section>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;

// useEffect 사용하기
// function App() {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState("");

//   //   useEffect(() => {
//   //     console.log(`count: ${count} / input: ${input}`);
//   //   }, [count, input]);

//   const onClickButton = (value) => {
//     setCount(count + value);
//     console.log(count);
//   };

//   return (
//     <div className="App">
//       <h1>Simple counter</h1>
//       <section>
//         <input value={input} onChange={(e) => setInput(e.target.value)} />
//       </section>
//       <section>
//         <Viewer count={count} />
//       </section>
//       <section>
//         <Controller onClickButton={onClickButton} />
//       </section>
//     </div>
//   );
// }
