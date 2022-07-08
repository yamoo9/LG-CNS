/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// React 컴포넌트(components)
// - 클래스
// - 함수

// 함수의 재사용
// console.log(calcTotal(10000, 8900, 1360, 2100));
// console.log(calcTotal(21500, 3200, 9800, 4700));
// console.log(calcTotal(3800, 15200, -500, 80200));
// console.log(calcTotal(560, 5000, 27100, 10200));
// console.log(calcTotal(9000, -2500, 5000, 11900));

// 함수 선언 → 일반 함수 (표현)식
// function literal
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

// console.log('calculateTotal', calculateTotal(100, 10, 1, -10));

// 익명 함수
let anonymousFunction;

const handleResize = function (event) {
  // console.log(event);
};

window.onresize = function () {};

// 콜백 함수
let callbackFunction;

[1, 2, 3, 4].forEach(function (item, index, array) {
  // 함수에 전달된 것들의 집합 객체
  // 전달인자 집합
  // arguments
  // console.log(arguments);
});

// 즉시 실행 함수 (표현)식
// 모듈(외부와 단절된 공간 형성, 보호) → JavaScript Closure
let immediatelyInvokedFunctionExpression;

// 함수 선언문(실행 영역으로 초기화 과정에서 끌어 올려진다) vs. 함수 (표현)식(런타임 중에 할당된다)
// JavaScript 실행 영역

// 일어나는 현상: 끌어 올려진다. (hoist)

// scope hoist

// moduleA.js
// moduleB.js

// main.js
// import modules
// programming

var callMe; // undefined

// callMe();

callMe = function () {
  console.log('call me');
};

callMe();
