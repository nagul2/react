import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteBotton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteBotton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);

// 콜백 함수로 최적화
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // id, isDone, content, date의 값이 변경되었을 때에만 리렌더링 하도록 커스터마이징
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   // 전부 안바뀌었으면 리렌더링 X
//   return true;
// });
