// 함수선언

function greeting() {
  // 실행 순서 1
  console.log("안녕하세요!"); // 실행 순서 4
}

console.log("호출 전"); // 실행 순서 2

// 함수 호출
greeting(); // 실행 순서 3

console.log("호출 후"); // 실행 순서 5

// 직사각형의 넓이를 만드는 함수

// 고정된 값을 출력하는 함수
function getArea() {
  let width = 10;
  let height = 20;
  let area = width * height;

  console.log("넓이:", area);
}

getArea();

// 동적으로 함수를 호출 할 때마다 다른 값을 출력하는 함수
// width, height : 매개변수(parameter)
function getAreaDynamic(width, height) {
  let area = width * height;

  console.log("넓이(동적):", area);
}

getAreaDynamic(30, 40); // 30, 40 : 인수(argument)

// 반환값이 있는 함수
function getAreaReturn(width, height) {
  let area = width * height;

  return area; // 반환값
}

let area1 = getAreaReturn(10, 20);
console.log("반환된 넓이1:", area1);

// 함수 안의 함수
function outer() {
  function inner() {
    console.log("inner 함수 실행");
  }
  console.log("outer 함수 실행");
  inner(); // outer 함수 안에서 inner 함수 호출
}

outer(); // outer 함수 호출

// 호이스팅 (hoisting), 끌어올리다.
hoisted(); // 함수 호출

function hoisted() {
  console.log("호이스팅 된 함수 실행");
}
