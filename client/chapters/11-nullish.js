/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress = 'yamoo9@naver.com',
  receivedEmailAddress;

// if 문
// if (emailAddress === undefined || emailAddress === null) {
//   receivedEmailAddress = 'user@company.io';
// } else {
//   receivedEmailAddress = emailAddress;
// }

// 3항 연산자 조건 식
// receivedEmailAddress =
//   emailAddress === undefined || emailAddress === null
//     ? 'user@company.io'
//     : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
// receivedEmailAddress = emailAddress ?? 'user@company.io';

// 논리합 연산자를 활용한 처리

receivedEmailAddress = emailAddress || 'user@company.io';

// console.log(receivedEmailAddress);

let count = -0;

let calcNumber = count ?? 90;

console.log(calcNumber); // 0

// ?? vs. ||
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

// function queryNode(selector, context /* undefined */) {
//   context = context ?? document;
//   return context.querySelector(selector);
// }
