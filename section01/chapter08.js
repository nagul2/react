// 1. null 병합 연산자 (Nullish Coalescing Operator)
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // var1, var2 중 null 또는 undefined가 아닌 값 선택
console.log("var4 = " + var4); // 10

let var5 = var1 ?? var3; // var1, var2, var3 중 null 또는 undefined가 아닌 값 선택
console.log("var5 = " + var5); // 20

let var6 = var2 ?? var3; // 둘 다 null 또는 undefined가 아니므로 왼쪽 값 선택
console.log("var6 = " + var6); // 10

// 실무 예시
let userName = "김너굴";
let userNickName = "너구리맨";

// 사용자가 이름을 입력했으면 이름을, 닉네임을 입력했으면 닉네임을, 아무것도 입력하지 않았으면 "게스트"를 출력
let displayName = userName ?? userNickName ?? "게스트";
console.log("안녕하세요 " + displayName + "님!");

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; // "string"
console.log(t1);

var7 = Number(var7); // 명시적 형 변환
t1 = typeof var7; // "number"

var7 = true;
t1 = typeof var7; // "boolean"
console.log(t1);

// 3. 삼항 연산자(항을 3개 사용하는 연산자)
// -> 조건식 ? 참일 때의 값 : 거짓일 때의 값
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

let var8 = 10;
// 요구사항: 변수 res에 var8의 값이 짝수이면 "짝", 홀수이면 "홀"을 대입
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
