// 1. Spread 연산자
// Spread: 흩뿌리다, 펼치다
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];

// 새로운 배열 arr2의 요소 사이에 arr1의 요소를 삽입
// 정석 방식
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
console.log(arr2);

// 스프레드 연산자 사용
let arr3 = [4, ...arr1, 5, 6];
console.log(arr3);

let obj1 = {
  a: 1,
  b: 2,
};

// 객체도 가능
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

// 함수에서의 활용
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3); // 1, 2, 3
}

funcA(...arr1); // arr1의 요소를 전달

// 2. Rest 매개변수
// Rest는 나머지, 즉 나머지 매개변수라는 뜻 -> 여러개의 매개변수를 받을 수 있음
// Rest 매개변수는 추가 요소를 설정할 수 없으며 항상 마지막에 두어야 함

function funcB(...rest) {
  // Rest 매개변수
  // rest 매개변수
  console.log(rest);
}

funcB(...arr1); // spread 연산자

function funcC(p1, ...rest) {
  // arr1로 넘어온의 첫번째 요소는 p1 변수에, 나머지는 배열로 저장
  console.log(p1, rest);
}

funcC(...arr1); // spread 연산자
