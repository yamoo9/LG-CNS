/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호 
// 피연산자(被演算子): 처리 대상

// 단항 연산자
let unary = +'101'; // Number()

// console.log(unary, typeof unary);

// 이항 연산자
let abnormal = (10 + 2) * 7;

// console.log(abnormal);

// 삼항 연산자
// 조건 처리
let condition = false;
let ternary = condition ? 'yes' : 'no';

// console.log(ternary);

// 산술 연산자

// 덧셈 +
let addition;

// 뺄셈 -
let subtraction;

// 곱셈 *
let multiplication;

// 나눗셈 /
let division;

// 나머지 %
let value = 10_000;
let remainder = value % 6;

// console.log(remainder);

// 거듭 제곱 **
let pow = 4 ** 5;

// console.log(pow);


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)
// 참고: https://mzl.la/3aoQogn

let result = -pow + 10;


// 선,후 증감 연산자
// ++, --

// while, for문
let z = 100;
// console.log('z--', z--); // z = 100
// console.log('z', z); // 99

// z = z - 2;
// z -= 3;

let k = 100;
// console.log('--k', --k); // k = 100 - 1 = 99


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) ** 3; // ?

console.log(total);