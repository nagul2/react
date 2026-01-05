const promise = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      //   const num = 10;
      const num = null; // reject

      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다.');
      }
    }, 2000);
  },
);

setTimeout(() => {
  console.log(promise);
}, 3000);

// then 메서드
// 프로미스 객체가 성공(resolve)한 후에 성공한 결과값을 전달받고 콜백 함수를 실행함
promise.then((value) => {
  console.log(value);
});

// catch 메서드
// 프로미스 객체가 실패(reject)한 후에 실패한 결과값을 전달받고 콜백 함수를 실행함
promise.catch((error) => {
  console.log(error);
});

// then 메서드는 자기 자신의 promise 객체를 반환하므로 메서드 체인이 가능함
promise
  // 성공 시
  .then((value) => {
    console.log(value);
  })
  // 실패 시
  .catch((error) => {
    console.log(error);
  });
