// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 현재 시간을 생성
console.log(date1);

// 특정 날짜로 생성, `-`가 아닌 `.`, `/`, ` `(공백) 모두 가능,
// 시간은 :으로 구분하며 날짜와 시간 사이는 `.`, `/`, ` `(공백)만 가능함
let date2 = new Date(
  '1997-01-02 10:20:30',
);
console.log(date2);

/* prettier-ignore */
let date3 = new Date(1997, 0, 2, 10, 20, 30); // 문자열이 아니라 컴마로 구분해도 동일하게 적용됨
console.log(date3);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(협정세계시, UTC; 시간이 시작되는 지점)로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 시간 계산 시 타임 스탬프로 변환해서 자주 사용함
let ts1 = date1.getTime(); // Date 객체를 타임 스탬프 값으로 변환
console.log(ts1);

let date4 = new Date(ts1); // 인수로 타임 스탬프 값을 넣으면 해당 값으로 Date 객체가 생성됨
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth(); // Month값은 실제 월에 -1한 값이 출력됨(자바스크립트의 동작 방식)
let date = date1.getDate();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

/* prettier-ignore */
console.log(year, month + 1, date, hours, minutes, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(8); // 9월로 수정, Month값은 실제 월에 -1 한 값으로 동작
date1.setDate(1);

date1.setHours(12);
date1.setMinutes(30);
date1.setSeconds(15);

console.log(date1); // Fri Sep 01 2023 12:30:15 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 날짜만 출력(영어 표현)
console.log(date1.toTimeString()); // 시간만 출력

console.log(date1.toLocaleString()); // 날짜 및 시간 (현지화)
console.log(date1.toLocaleDateString()); // 날짜만 출력(현지화)
console.log(date1.toLocaleTimeString()); // 시간만 출력(현지화)
