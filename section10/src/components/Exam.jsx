import { useReducer } from "react";

// reducer: 변환기
// -> 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch: 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // -> useReducer의 첫 번째 인수로써 상태를 변환하는 함수를, 두 번재 인수로써 State의 초기값을 전달
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      // 인수: 상태가 어떻게 변하되길 원하는지 정보를 객체 형태로 전달함 -> 액션 객체
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
