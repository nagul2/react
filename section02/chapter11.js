// 동기적으로 코드를 실행
console.log(1);

// 비동기적으로 코드를 실행
setTimeout(() => {
  console.log(2);
}, 3000); // 3초가 지나면 2가 출력됨

console.log(3);
