// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = 123; // 오류 발생: 상수 객체는 재할당 불가

// 상수 객체의 프로퍼티에 CRUD 작업은 가능

animal.age = 3;
animal.color = "white";
delete animal.name;

console.log(animal); // { type: '고양이', color: 'white', age: 3 }

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "너구리",
  sayHello: function () {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
  },

  // 화살표 함수에서는 this가 window를 가리키므로 주의가 필요함!
  arrowMethod: () => {
    console.log("화살표 함수로 메서드 생성");
  },

  // 메서드 선언
  method() {
    console.log("메서드 선언");
  },
};

person.sayHello();
person["arrowMethod"]();
person.method();
