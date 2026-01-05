// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]

// 여러 요소도 추가할 수 있으며 반환 값으로 요소가 추가된 배열의 길이를 반환함
let arr2Length = arr1.push(5, 6, 7);
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
console.log(arr2Length);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
let popValue = arr2.pop(); // 3 제거 및 반환

console.log(arr2, 'popValue:', popValue); // [1, 2], popValue: 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
let shiftValue = arr3.shift(); // 1 제거 및 반환

console.log(arr3, 'shiftValue:', shiftValue); // [2, 3], shiftValue: 1

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드, 변경된 배열의 길이 반환
let arr4 = [1, 2, 3];
let arr4Length = arr4.unshift(0);

console.log(arr4, 'arr4Length:', arr4Length); // [0, 1, 2, 3], arr4Length: 4

// shift, unshift는 pop, push보다 느리게 동작함 -> 배열의 저장 특성 때문임(java의 배열과 동일)

// 5. slice
// 인덱스값으로 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// slice(x, y); y는 포함되지 않음
// 원본 배열은 수정되지 않음
let arr5 = [1, 2, 3, 4, 5];
let newArr1 = arr5.slice(1, 3); // arr5의 1 ~ 2번 인덱스의 요소를 새로운 배열로 반환

console.log(newArr1); // [2, 3]

// 특정 범위부터 끝까지 자를 경우 2번째 인자는 생략 가능함
let newArr2 = arr5.slice(3); // arr5의 3번 인덱스 부터 끝까지를 새로운 배열로 반환

console.log(newArr2); // [4, 5]

// 배열의 뒤에서부터 잘라낼 경우 음수를 적용
let newArr3 = arr5.slice(-3); // arr5의 끝에서 부터 -3칸까지 새로운 배열로 반환

console.log(newArr3); // [3, 4, 5]

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let newArr4 = arr6.concat(arr7);

console.log(newArr4); // [1, 2, 3, 4, 5, 6]
