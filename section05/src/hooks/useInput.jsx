import { useState } from "react";

// 커스텀 훅의 위치는 보통 src/hooks 폴더 내부에 생성함

function useInput() {
  // 커스텀 훅 -> 함수의 이름 앞에 'use' 키워드를 붙이면 됨
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return { input, onChange };
}

export default useInput;
