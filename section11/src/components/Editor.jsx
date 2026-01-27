import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App.jsx";

const Editor = () => {
  // useContext: 인수로 전달한 context로 공급된 데이터를 반환해주는 함수
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // onKeydown: 사용자가 키를 눌렀을 때 방생하는 이벤트
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      // 엔터키를 눌렀을 때 onSubmit() 함수 호출
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // 내용 입력 없이 추가 버튼 눌렀을 때 focus 및 저장 방지
      return;
    }
    onCreate(content);
    setContent(""); // 추가 후 input 태그의 내용 제거
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
