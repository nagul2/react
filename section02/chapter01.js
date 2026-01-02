// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInt 0

if (!f2) {
  console.log("FALSY");
}

// 2. Truthy한 값
// 7가지 Falsy한 값을 제외한 모든 값
let t1 = "hello";
let t2 = 42;
let t3 = [];
let t4 = {};
let t5 = () => {};
// 등등..

if (t1) {
  console.log("TRUTHY");
}

// 3. 활용사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person; // 값이 할당되지 않음
printName(person);
