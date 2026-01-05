// 프로미스 객체 생성시 비동기 작업을 실행할 콜백 함수를 작성(Executor 함수라고 부름)
const promise = new Promise(() => {
  // 비동기 작업(executor)
  setTimeout(() => {
    console.log('안녕');
  }, 2000);
});

console.log(promise);
/* Promise 출력 결과
> Promise {<pending>}
  > [[Prototype]]: Promise
    [[PromiseState]]: "pending"
    [[PromiseResult]]: undefined
*/

// Executor 함수에는 성공 상태로 바꾸는 resolve() 함수와 실패 상태로 바꾸는 reject() 함수가 존재함
const successPromise = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      console.log('프로미스 성공!');
      resolve('안녕');
    }, 2000);
  },
);

setTimeout(() => {
  console.log(successPromise);
}, 3000);
/* Promise 출력 결과
> Promise <fulfilled>: '안녕'
  > [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "안녕"
*/

const rejectPromise = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      console.log('프로미스 실패!'); // 오류 로그 출력
      reject('실패한 이유...');
    }, 2000);
  },
);

setTimeout(() => {
  console.log(rejectPromise);
}, 3000);
/* Promise 출력 결과
> Promise <rejected>: '실패한 이유...'
  > [[Prototype]]: Promise
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: "실패한 이유..."
*/
