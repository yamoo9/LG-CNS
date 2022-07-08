/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// CoffeeScript () -> {}
// ECMAScript   () => {}

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  // console.log(arguments);
  return moneyA + moneyB + moneyC + moneyD;
};

console.log(calculateTotal(10000, 8900, 1360, 2100));
console.log(calculateTotal(21500, 3200, 9800, 4700));
console.log(calculateTotal(3800, 15200, -500, 80200));
console.log(calculateTotal(560, 5000, 27100, 10200));
console.log(calculateTotal(9000, -2500, 5000, 11900));

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (moneyA, moneyB, moneyC, moneyD) => moneyA + moneyB + moneyC + moneyD;

let result = calcAllMoney(9000, -2500, 5000, 11900);

console.log(result);
