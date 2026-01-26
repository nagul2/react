import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// ESLint 경고 발생하지만 react 동작에는 문제 없음 -> 옵션을 끄면 됨
export default memo(Header); // Header 컴포넌트의 Props가 변경되지 않았을 때는 리렌더링이 발생하지 않음

// const memoizedHeader = memo(Header);
// export default memoizedHeader;
