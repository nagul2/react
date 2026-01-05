function add10(num) {
  const promise = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        if (typeof num === 'number') {
          resolve(num + 10);
        } else {
          reject('num이 숫자가 아닙니다.');
        }
      }, 2000);
    },
  );

  return promise;
}
// 콜백 함수의 결과를 또 다른 콜백 함수가 사용하는 콜백지옥
const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
});

// 프로미스의 결과값을 반환한 다음 메서드 체이닝을 통해 콜백 지옥을 해결
// 실패할 가능성까지 고려하여 catch()메서드도 작성
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result); // 정상 작동
  })
  .then((result) => {
    console.log(result);
    return add10(undefined); // 오류 발생 -> catch로 이동
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
