// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환, 콜백 함수 사용
// 웹서비스를 개발할 때 특정 조건을 검색시키거나, 카테고리별 필터기능을 만들 때 필수적으로 사용됨
let arr1 = [
  { name: '요사람', hobby: '헬스' },
  { name: '너구리', hobby: '헬스' },
  { name: '오소리', hobby: '독서' },
];

const fitnessPeople = arr1.filter(
  (item) => item.hobby === '헬스',
);

console.log(fitnessPeople);

// 2. map
// 배열의모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환, 콜백함수 사용
let arr2 = [1, 2, 3];

const mapResult = arr2.map(
  (item, idx, arr) => {
    console.log(item, idx, arr);
    return item * 2; // 반환값 설정이 가능함
  },
);

console.log(mapResult); // 새로운 배열이 생성됨

// arr1의 배열의 이름만 반환
let names = arr1.map(
  (item) => item.name,
);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ['b', 'd', 'a', 'c'];
arr3.sort();
console.log(arr3); // ['a', 'b', 'c', 'd']

// 숫자의 대소 관계로 정렬하는 것이 아니기 때문에 배열의 요소가 숫자인 경우에는 sort()메서드 호출 시 비교기준을 입력해 주어야 함
let arr4 = [3, 5, 1, 4, 2];
arr4.sort((a, b) => a - b); // 오름차순, a - b의 결과값이 0보다 작으면 a가 b앞에, 같으면 그대로, 크면 b뒤에 배치됨(큰 값이 뒤로 감)
console.log(arr4); // 1, 2, 3, 4, 5

arr4.sort((a, b) => b - a); // 내림차순 b - a의 결과값이 0보다 작으면 a가 b앞에, 같으면 그대로, 크면 b뒤에 배치됨(큰 값이 앞으로 감)
console.log(arr4); // 5, 4, 3, 2, 1

// 4. toSorted(가장 최근에 추가된 최신 함수)
// 정렬 후 새로운 배열을 반환하는 메서드, 동작은 sort와 동일
let arr5 = ['c', 'd', 'a', 'b'];
let sortedArr = arr5.toSorted();
console.log('toSorted:', sortedArr);
console.log('원본:', arr5);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
// 기본 구분자는 `,`로 들어감
let arr6 = ['hi', 'im', 'winterlood'];

const joined = arr6.join();
console.log(joined); // hi,im,winterlood

// 구분자를 바꾸고 싶다면 인자에 구분자를 문자열로 넣어주면 됨
// 빈 문자열일 경우 문자열이 전부 붙어짐
const joined2 = arr6.join('-');
console.log(joined2); // hi-im-winterlood
