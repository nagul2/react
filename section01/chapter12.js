// 일반 함수
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수가 할당된 변수
varA(); // funcA 출력

// 함수를 만들자 마자 변수에 담을 수 있음 -> 함수 표현식
let varB = function funcB() {
  console.log("funcB");
};

varB(); // funcB 출력
// funcB(); // 오류 발생: funcB is not defined

// 그렇기 때문에 익명 함수로 많이 사용
let varC = function () {
  console.log("익명 함수");
};

// 화살표 함수
// 함수를 빠르고 간결하게 작성할 수 있음, 'function' 키워드 및 함수의 이름을 생략
let varArrow = () => {
  return 1;
};

let varArrow2 = () => 1; // 반환값이 하나일 때 중괄호와 return 생략 가능
console.log(varArrow2()); // 1

let varArrow3 = (x, y) => x + y; // 매개변수가 필요할 때는 소괄호에 매개변수를 사용
console.log(varArrow3(2, 3)); // 호출 시 인수에 값 전달

// 함수에 여러 줄의 코드가 있을 때에는 중괄호와 return문을 사용
let varArrow4 = (x, y) => {
  console.log("x:", x, "y:", y);
  let sum = x + y;
  return sum;
};

console.log(varArrow4(10, 20));
