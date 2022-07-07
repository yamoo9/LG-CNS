/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

let n = 10_000_000; // 숫자 값 (literal)

// console.log(typeof(n)); // 'number'
// console.log(typeof(n + '원'));
// console.log(typeof n);
// console.log(typeof n.toString());

// undefined, null
// console.log(null, typeof(null + ""));
// console.log(undefined, typeof(undefined + ''));

// boolean
let isCkeck = true;

// console.log(isCkeck, typeof isCkeck.toString());


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
// console.log(undefined, undefined + 0); NaN, Not a Number

// null
// console.log(null, null + 10); // null → 0 + 10 = 10

// boolean
// console.log(true, true + 0);
// console.log(false, false + 0);

// string
// console.log('this is string\n', 'this is string' + 10 + '\n', typeof 'this is string'); // 문자 + 숫자 = ?(접합)

let unit = '100px';

// console.log('100px', parseInt(unit, 10));

// 숫자형 문자 numeric string

let t = '1000';

// console.log(typeof Number(t));


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' → false
// * → true

console.log(null, Boolean(null));
console.log(undefined, Boolean(undefined));
console.log(0, Boolean(0));
console.log(NaN, Boolean(NaN));
console.log('', Boolean(''));