// 1. if 조건문(if문)
// let num = 10;
let num = 9;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참일 때 실행됩니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  // 조건이 거짓일 때 실행
  console.log("num은 10 미만입니다.");
  console.log("조건이 거짓일 때 실행됩니다.");
}

// 2. Switch 문
// if문과 기능 장체는 동일하지만 다수의 조건을 처리할 때 if보다 더 직관적임
let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이입니다.");
    break;
  }
  case "dog": {
    console.log("강아지입니다.");
    break;
  }
  case "bear": {
    console.log("곰입니다.");
  }
  case " snake": {
    consolse.log("뱀입니다.");
    break;
  }
  case "tiger": {
    console.log("호랑이입니다.");
    break;
  }
  default: {
    // else와 동일
    console.log("동물이 아닙니다.");
  }
}
