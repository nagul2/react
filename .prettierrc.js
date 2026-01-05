module.exports = {
  // 한 줄에 허용할 최대 길이
  // 이 길이를 넘으면 자동으로 줄바꿈
  // 값이 작을수록 객체/배열이 여러 줄로 잘 쪼개짐
  printWidth: 40,

  // 문자열을 "큰따옴표" 대신 '작은따옴표'로 통일
  singleQuote: true,

  // 문장 끝에 세미콜론(;) 항상 붙임
  // 팀 규칙/자동 병합 충돌 방지에 유리
  semi: true,

  // 여러 줄 구조에서 마지막 요소 뒤에도 쉼표 허용
  // diff가 깔끔해지고 줄바꿈 유도 효과 있음
  trailingComma: 'all',

  // 화살표 함수 인자가 1개여도 괄호 유지
  // 예: (item) => {} / item => {} 중 전자 사용
  arrowParens: 'always',
};
