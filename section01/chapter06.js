// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환

let num = 10;
let str = "5";

const result = num + str; // "105" (숫자 10이 문자열 "5"로 변환되어 연결됨)
console.log(result); // "105"
console.log(typeof result); // "string"

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시

// 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1); // 10 (문자열이 숫자로 변환됨)
console.log(10 + strToNum); // 20
console.log(typeof strToNum); // "number"

let str2 = "10개";
let strToNum2 = Number(str2); // NaN (문자열이 숫자로 변환되지 않음)
console.log(strToNum2); // NaN
console.log(typeof strToNum2); // "number"

let strToNum3 = parseInt(str2); // 10 (문자열이 숫자로 정상 변환됨)
console.log(strToNum3); // 10
console.log(typeof strToNum3); // "number"

let str3 = "asdfasdf10개"; // 문자열이 숫자 앞에 있으면 정상적으로 변환되지 않음
let strToNum4 = parseInt(str3); // NaN
console.log(strToNum4); // NaN
console.log(typeof strToNum4); // "number"

// 숫자 -> 문자열
let num2 = 20;
let numToStr = String(num2);
console.log(numToStr + "입니다"); // "20입니다"
console.log(typeof numToStr); // "string"
