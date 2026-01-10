// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// // Common JS 모듈
// module.exports = {
//   add: add,
//   sub, // 내보낼 이름과 함수 명이 같을 경우 ': 내보낼 이름'은 생략해도 됨
// };

// ESM 모듈
export { add, sub }; // 객체를 리터럴로 생성하여 담아주기만 하면 됨

export function div(a, b) {
  return a / b;
}

export default function multiply(a, b) {
  return a * b;
}
