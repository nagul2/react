// 1. 배열 생성
let arr1 = new Array(); // 배열 생성자
let arr2 = []; // 배열 리터럴 (간결, 권장됨)

let arr3 = [1, 2, 3, 4, 5]; // 배열을 초기화하면서 생성
console.log(arr3); // [1, 2, 3, 4, 5]

// 다양한 타입을 저장할 수 있음
let arr4 = [1, "hello", true, null, undefined, () => {}, {}, []];

// 2. 배열 요소에 접근하는 방법
let item1 = arr4[0]; // 1
let item2 = arr4[1]; // "hello"
let item3 = arr4[2]; // true
console.log(item1, item2, item3);

arr4[1] = "byebye"; // 요소 수정
console.log(arr4[1]); // "byebye"
