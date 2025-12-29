// for (초기식; 조건식; 증감식) {
//  반복 실행할 코드
// }

for (let i = 0; i < 5; i++) {
  console.log("반복!");
  console.log(i);
}

// 중간에 종료 시키기
for (let i = 0; i < 10; i++) {
  console.log("중간종료 " + i);
  if (i >= 5) {
    break;
  }
}

// 중간을 건너뛰기
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("건너뛰기 " + i);
}
