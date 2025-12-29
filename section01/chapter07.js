// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2; // 덧셈
let num2 = 5 - 2; // 뺄셈
let num3 = 4 * 2; // 곱셈
let num4 = 8 / 2; // 나눗셈
let num5 = 7 % 3; // 나머지

let num6 = 2 + 2 * 3; // 우선순위에 따라 곱셈이 먼저 계산되어 2 + 6 = 8
console.log(num6);
let num7 = (2 + 2) * 3; // 괄호 안이 먼저 계산되어 4 * 3 = 12
console.log(num7);

let num8 = 2 ** 2; // 2의 2제곱 = 4
console.log(num8);

// 3. 복합 대입 연산자(산술 + 대입)
let num9 = 10;
num9 += 20;
console.log(num9); // 30
num9 -= 5;
console.log(num9); // 25

num9 *= 2;
num9 /= 5;
num9 %= 6;

// 4. 증감 연산자 (값을 1씩 증가/감소)
let num10 = 5;
console.log(num10++); // 5, 라인이 끝난 후에 1 증가(후위 연산)
console.log(num10); // 6

let num11 = 5;
console.log(++num11); // 6, 바로 1 증가(전위 연산)

console.log(num11--); // 뺄셈도 동일
console.log(num11);

// 5. 논리 연산자
let or = true || false; // 논리합(OR)
let and = true && false; // 논리곱(AND)
let not = !true; // 논리부정(NOT)

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 일치(타입과 값 모두 비교)
let comp2 = 1 !== 2; // 불일치 여부 비교
console.log(comp1, comp2); // false true

let comp3 = 1 == "1"; // 동등(값만 비교, 타입은 무시)
console.log(comp3); // true

// 자바스크립트에서는 == 보다는 === 사용을 권장

let comp4 = 3 > 2; // 초과
let comp5 = 3 < 2; // 미만
let comp6 = 3 >= 2; // 이상
let comp7 = 3 <= 2; // 이하

console.log(comp4, comp5, comp6, comp7);
