// 콜백함수
function main(value) {
  value(); // value()로 넘어온 sub 함수를 호출함
}

function sub() {
  console.log("I'm sub");
}

main(sub); // sub 함수 자체가 main 함수의 인자로 전달됨, 즉, sub가 callback 함수
/* 출력결과
I'm sub
*/

// 화살표 표현식 활용
main(() => {
  console.log("I'm callback function");
});

// 콜백 함수 활용 예시

// 비슷한 기능을 하는 코드가 많아지는 중복 발생
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
}

repeat(5);
repeatDouble(5);
repeatTriple(5);

// 콜백 함수로 중복 제거
function repeatCallback(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// 위의 repeat 함수 기능을 하는 콜백 함수
repeatCallback(5, (idx) => {
  console.log(`콜백 함수로 출력, ${idx}`);
});

// 위의 repeatDouble 함수 기능을 하는 콜백 함수
repeatCallback(5, (idx) => {
  console.log(`콜백 함수로 출력, ${idx * 2}`);
});

// 위의 repeatTriple 함수 기능을 하는 콜백 함수
repeatCallback(5, (idx) => {
  console.log(`콜백 함수로 출력, ${idx * 3}`);
});
