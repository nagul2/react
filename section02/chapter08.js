// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// 콜백함수 활용, function(요소, 반복 횟수, 배열)
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

// 화살표 함수도 가능
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
console.log(arr2.includes(2)); // true
console.log(arr2.includes(4)); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 같은 요소가 존재할 경우 가장 앞에 있는 인덱스 번호를 반환
// 존재하지 않는 요소로 indexOf를 호출할 경우 -1을 반환

let arr3 = [2, 2, 3, 4, 5];
console.log(arr3.indexOf(3)); // 2
console.log(arr3.indexOf(2)); // 0
console.log(arr3.indexOf(20)); // -1

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드
// 콜백함수를 만족한다 === 참을 반환한다.
let arr4 = [1, 2, 3, 4, 5];

const findedIndex = arr4.findIndex(
  (item) => {
    if (item % 2 !== 0) return true;
  },
);

console.log(findedIndex); // 0

// 화살표 함수에 조건식을 return 하도록 만들면 더 간결하게 만들 수 있음
const findedIndex2 = arr4.findIndex(
  (item) => item % 2 !== 0,
);
console.log(findedIndex2); // 0

// 존재하지 않는 요소로 찾을 경우 -1 반환
const findedIndex3 = arr4.findIndex(
  (item) => item === 999,
);
console.log(findedIndex3); // -1

// findIndex가 존재하는 이유는 배열의 요소에 원시타입이 아닌 객체 타입이 있을 경우 indexOf로는 제대로 찾을 수 없기 때문임
let objArr = [
  { name: '김사람' },
  { name: '저인간' },
];

console.log(
  objArr.indexOf({
    name: '김사람',
  }),
); // -1, 못찾음(객체의 주소값으로 찾아야 하는데, 프로퍼티로 찾고 있기 때문)

console.log(
  objArr.findIndex(
    (item) => item.name === '김사람',
  ),
); // 0

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 요소 자체를 반환
let arr5 = [
  { name: '김사람' },
  { name: '저인간' },
];

// {name: '저인간'}
console.log(
  arr5.find(
    (item) => item.name === '저인간',
  ),
);
