// 1. Number type
let num1 = 27;
let num2 = 3.14;
let num3 = -10;

console.log(num1 + num2);
console.log(num1 - num3);
console.log(num2 * num3);
console.log(num1 / num2);
console.log(num1 % num3);

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number: 수치연산이 실패 했을 때의 결과값
console.log(1 * "string"); // NaN

// 2. String type
let myName = "너구리"; // 큰따옴표, 작은따옴표, 백틱 모두 가능
let greeting = "Hello, " + myName + `!`; // 덧셈 연산으로 문자열 연결
console.log(greeting);

// 2-1. 백틱을 이용한 문자열 내 표현식 삽입
let age = 27;
let introduce = `제 이름은 ${myName}이고, 나이는 ${age}살 입니다.`; // 템플릿 리터럴 문법
console.log(introduce);

// 3. Boolean type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
console.log(empty);

// 5. Undefined Type (값이 할당되지 않음)
let undef = undefined;
let undef2; // 선언만 하고 값 할당 안하면 자동으로 undefined
console.log(undef);
console.log(undef2);

// 6. Type checking
console.log(typeof num1); // "number"
console.log(typeof myName); // "string"
console.log(typeof isSwitchOn); // "boolean"
console.log(typeof empty); // "object" (자바스크립트의 오래된 버그로 null은 object로 나옴)
console.log(typeof undef); // "undefined"
