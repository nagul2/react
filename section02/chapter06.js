// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스
// 인덱스를 활용
for (let i = 0; i < arr.length; i++) {
  // arr.length: 배열의 길이
  console.log(`arr[${i}]: `, arr[i]);
}

// 1-2. for of 반복문
// 인덱스를 활용하지 않고 순서대로 순환
let arr2 = [4, 5, 6, 7, 8];
for (let item of arr2) {
  console.log(`arr2[${arr2.indexOf(item)}]: `, item);
}

// 2. 객체 순회
let person = {
  name: "김사람",
  age: 27,
  hobby: "테니스",
};

// 2-1. Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'hobby']

for (let i = 0; i < keys.length; i++) {
  let value = person[keys[i]];
  console.log(`${keys[i]}:`, value);
}

for (let key of keys) {
  let value = person[key];
  console.log(`${key}:`, value);
}

// 2-2. Object.values 사용
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  console.log("value:", value);
}

// 2-3. for in(for of와 비슷)
for (let key in person) {
  let value = person[key];
  console.log(`${key}:`, value);
}
