/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// CoffeeScript () -> {}
// ECMAScript   () => {}

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  // console.log(arguments);
  return moneyA + moneyB + moneyC + moneyD;
};

// console.log(calculateTotal(10000, 8900, 1360, 2100));
// console.log(calculateTotal(21500, 3200, 9800, 4700));
// console.log(calculateTotal(3800, 15200, -500, 80200));
// console.log(calculateTotal(560, 5000, 27100, 10200));
// console.log(calculateTotal(9000, -2500, 5000, 11900));

// 일반 함수 식 → 화살표 함수 식
// ES6 나머지 매개변수 (rest parameters)
// ES6 전개 연산자 (`...` , spread operator)
const calcAllMoney = (...params) => params.reduce((prevItem, currentItem) => prevItem + currentItem, 0);

// 일반 함수 식 arguments (O)
// 화살표 함수 식 arguments (X)
// 화살표 함수에 전달된 인자의 집합은 어떻게 활용할까?
let result = calcAllMoney(9000, -2500, 5000, 11900, 90);

console.log(result);

// 매개변수 갯수가 1개인 경우 괄호 생략 가능
// const getHTMLCode = elementNode => {
//   return elementNode.innerHTML;
// };

// return (괄호 포함)을 생략할 수 있음
const getHTMLCode = (elementNode) => elementNode.innerHTML;

// console.log(getHTMLCode(document.head));
