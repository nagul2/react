// const moduleData = require('./math');

// // 점 표기법으로 모듈 사용
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// // 구조 분해를 이용하면 점 표기법 없이 바로 모듈을 사용할 수 있음
// const { add, sub } = require('./math');
// console.log(add(1, 2));
// console.log(sub(1, 2));

import mul from './math.js';
console.log(mul(1, 2));

import { add, sub, div } from './math.js'; // 확장자 필수
console.log(add(1, 2));
console.log(sub(1, 2));

console.log(div(1, 2));

import mul, {
  add,
  sub,
  div,
} from './math.js';
console.log(mul(1, 2));
