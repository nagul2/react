// 예시 1 - 3초뒤 코드 실행
function task() {
  setTimeout(() => {
    console.log('안녕하세요');
  }, 3000);
}

task();

// 예시 2 - 인자값 활용
function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}

add(1, 2);

// 예시 3 - 비동기 처리의 결과값 활용
function add2(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

// 마지막 인자에 콜백 함수를 입력
add2(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황, 비동기 작업
function orderFood(callback) {
  setTimeout(() => {
    const food = '떡볶이';
    callback(food);
  }, 3000);
}

// 음식을 식히는 함수, 비동기 작업
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

// 음식을 냉동, 비동기 작업
function freezeFood(food, callback) {
  setTimeout(() => {
    const frozenedFood = `냉동된 ${food}`;
    callback(frozenedFood);
  }, 1000);
}

// 비동기 작업의 결과들을 또다른 비동기 작업으로 사용
// -> 콜백함수 안에서 다른 콜백함수를 호출하다보면 들여쓰기가 많아짐
// -> 코드가 점점 많아질 수록 콜백 지옥이 펼쳐짐
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(
      cooldownedFood,
      (frozenedFood) => {
        console.log(frozenedFood);
      },
    );
  });
});
