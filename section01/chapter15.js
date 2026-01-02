// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (간결, 권장됨)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이정환", // key: value
  age: 27,
  hobby: "테니스",
  extra: [], // 빈 배열
  extra2: {}, // 빈 객체
  "new extra3": null, // null 값
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 프로퍼티 접근 (점 표기법, 괄호 표기법)

let name = person.name; // 점 표기법
console.log(name); // "이정환"

let undifined = person.name2; // 존재하지 않는 프로퍼티 접근
console.log(undifined); // undefined

let age = person["age"]; // 괄호 표기법, 마찬가지로 존재 하지 않는 프로퍼티 접근 시 undefined 반환
console.log(age); // 27

// 괄호 표기법의 응용
let property = "hobby";
let hobby = person[property]; // 변수로 접근 시에는 괄호 표기법에 ""를 제거하고 사용
console.log(hobby);

// 동적으로 값을 꺼내야한다 -> 괄호 표기법 사용
// 정적으로 값을 꺼내야한다 -> 점 표기법 사용

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "DevOps";
person["favoriteFood"] = "치킨";
console.log(person);

// 3-3. 프로퍼티를 수정하는 방법
person.job = "Backend Developer";
person["favoriteFood"] = "피자";
console.log(person);

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3-5. 프로퍼티 존재 여부 확인
let result1 = "name" in person;
console.log(result1); // true

let result2 = "job" in person;
console.log(result2); // false
