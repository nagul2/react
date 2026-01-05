// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 기존 방식
let a = arr[0];
let b = arr[1];
let c = arr[2];

// 구조 분해 할당 방식
let [one, two, three, four] = arr;

console.log(one, two, three); // 1 2 3
console.log(one, two); // 1 2
console.log(one, two, three, four); // 1 2 3 undefined

let [one1, two2, three3, four4 = 4] = arr;
console.log(one1, two2, three3, four4); // 1 2 3 4

// 2. 객체의 구조 분해 할당
let person = {
  name: "김사람",
  age: 27,
  hobby: "테니스",
};

// 기존 방식
let personName = person.name;
let personAge = person.age;
let personHobby = person.hobby;

// 구조 분해 할당 방식
let { name, age, hobby, extra } = person;

console.log(name, age, hobby); // 김사람 27 테니스
console.log(name, age, hobby, extra); // 김사람 27 테니스 undefined

// 객체의 각 변수명을 변경하여 구조 분해
let {
  name: newName,
  age: newAge,
  hobby: newHobby,
  extra: newExtra = "없음",
} = person;
console.log(newName, newAge, newHobby, newExtra); // 김사람 27 테니스 없음

// 3. 객체 구조 분해 할당을 이용하여 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, newExtra }) => {
  console.log(name, age, hobby, newExtra); // 김사람 27 테니스 undefined
};

func(person);
