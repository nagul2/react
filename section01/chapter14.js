// 스코프
// 전역(전체 영역) 스코프 / 지역 스코프
// 전체 스코프: 전체 영역에서 접근 가능
// 지역 스코프:

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a); // 1, 전역 스코프 접근 가능
}

funcA();
console.log(b); // 실행 Error, 지역 스코프 접근 불가

// 함수 뿐 아니라 조건문, 반복문 등의 블록'{ }'도 지역 스코프임
if (true) {
  let c = 3; // 지역 스코프
}

for (let i = 0; i < 5; i++) {
  let d = 4; // 지역 스코프
}

// 함수 선언식의 지역 스코프

function outer() {
  function inner() {
    // 내부 함수도 지역 스코프
    console.log("I'm inner");
  }
}

inner(); // 실행 Error, inner 함수는 outer 함수의 지역 스코프이기 때문에 접근 불가

// 그러나 조건식, 반복문 등의 블록 내부에 선언된 함수는 전역 스코프임

if (true) {
  function funcB() {
    console.log("I'm funcB");
  }
}

funcB(); // "I'm funcB", funcB 함수는 전역 스코프이기 때문에 접근 가능

for (let i = 0; i < 5; i++) {
  function funcC() {
    console.log("I'm funcC");
  }
}

funcC(); // "I'm funcC", funcC 함수는 전역 스코프이기 때문에 접근 가능
