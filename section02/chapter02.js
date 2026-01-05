function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // false -> True 함수는 호출되지 않음(단락 평가)
console.log(returnTrue() && returnFalse()); // True 함수, False 함수 모두 호출됨

console.log(returnTrue() || returnFalse()); // true -> False 함수는 호출되지 않음(단락 평가)

function truthyFunction() {
  console.log("Truthy 함수");
  return 10;
}

function falsyFunction() {
  console.log("Falsy 함수");
  return undefined;
}

console.log(truthyFunction() || falsyFunction()); // Truthy 함수만 호출 됨(단락 평가)

// 활용 사례

// 조건문을 활용
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

// 위 코드를 단락 평가로 변경
function printNameShort(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printNameShort(); // person의 값이 없음
printNameShort({ name: "Alice" }); // Alice
