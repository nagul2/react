// 1. 변수
let age = 27;
// console.log(age); // 27

age = 30;
// console.log(age); // 30

// let age = 35; // 오류: 이미 선언된 변수

// 2. 상수
const birth = "1997.01.07";
// birth = "2000.01.01"; // 실행시오류: 상수는 재할당 불가
// const birth2; // 오류: 상수는 선언과 동시에 초기화 필요

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용 불가
let $name = "홍길동";
let _name = "홍길동";
// let -name = "홍길동"; // 오류
// let na!me = "홍길동"; // 오류

// 3-2. 숫자로 시작 불가
// let 1name = "홍길동"; // 오류
let $2name = "홍길동";

// 3-3. 예약어 사용 불가
// let let = 10; // 오류
let myLet = 10;

// 4. 변수 명명 가이드
// 친절하고 알아볼 수 있는 변수명으로 지어야함
// 카멜케이스(camelCase) 권장
let firstName = "Hong";
let lastName = "GilDong";
