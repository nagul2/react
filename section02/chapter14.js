// 1. async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드
async function getData() {
  return {
    name: '김사람',
    id: 'human',
  };
}

console.log(getData()); // 비동기 작업을 하는 Promise가 반환됨

// 그러나 async가 붙은 함수가 new Promise()를 반환하는 함수라면 별다른 동작을 하지않고 생성한 Promise를 반환함
async function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: '김사람',
        id: 'human',
      });
    }, 2000);
  });
}

console.log(getPromise()); // async가 별다른 일을 하지 않고 그대로 Promise를 반환함

// 2. await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// await를 사용하지 않았을 때 .then(), .catch()를 활용해야 함
function printData() {
  getData().then((value) => {
    console.log(value);
  });
}

// await를 사용
async function printData2() {
  const data = await getData(); // 비동기 작업이 종료되길 기다렸다가 종료가 되면 data 변수에 값을 저장함
}

console.log(printData2());
