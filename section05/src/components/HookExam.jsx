import { useState } from "react";
import useInput from "../hooks/useInput";

// 3가지 Hook 관련 팁

// 3. 커스텀 훅을 제작할 수 있음
const HookExam = () => {
  const { input, onChange } = useInput();

  // 반복 사용도 가능함
  const { input2, onChange2 } = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// // const state = useState(); // 함수 밖에서 선언하면 오류가 발생함

// const HookExam = () => {
//   //   const state = useState();

//   return <div>HookExam</div>;
// };

// export default HookExam;

// 2. 조건부로 호출될 수는 없음
// const HookExam = () => {

//     // 조건문 내부에서 Hook 호출 - 오류 발생
//     if (true) {
//         const state = useState();
//     }

//     // 반복문 내부에서 Hook 호출 - 오류 발생
//     for (let i = 0; i < 3; i++) {
//         const state = useState();
//     }

//   return <div>HookExam</div>;
// };

// export default HookExam;
