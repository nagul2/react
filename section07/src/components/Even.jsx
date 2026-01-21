import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 3. 언마운트 : 죽음
    // 클린업(정리 함수) -> useEffect가 끝날때 실행 됨(언마운트)
    return () => {
      console.log("Unmount");
    };
  }, []);

  return <div>짝수 입니다.</div>;
};

export default Even;
